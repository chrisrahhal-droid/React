import { useState } from 'react';
import { FaSearch, FaVolumeUp } from 'react-icons/fa';
import './App.css';

function App() {

  const[word, setWord] = useState("");
  const[data, setData] = useState(null);
  const[error, setError] = useState(null);

  const handleInputChange = (event) => setWord(event.target.value);
  
  const handleSearch = async () => {
    if(!word) return;
      try{
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if(!response.ok){
          throw new Error('Word not found');
      }
        const result = await response.json();
        setData(result[0]);
        setError(null);
      } catch(err){
          setData(null);
          setError(err.message);
        }
  }

    const speakWord = () => {
      if (!data) return;
      const synth = window.speechSynthesis;
      const text = `${data.word}. Definition: ${data.meanings[0].definitions[0].definition}`;
      const utterance = new SpeechSynthesisUtterance(text);
      synth.speak(utterance);
    }
  
return (
    <div className='App'>
      <h1>Free Dictionary</h1>
      <div className='searchBox'>
      <input type='text' value={word} onChange={handleInputChange}placeholder='Search...'/>
      <button onClick={handleSearch}><FaSearch/></button>
      </div>
       {error && <p>{error}</p>}
       {data && 
       (
        <div className='showResults'>
        <h2>{data.word}<button className="voiceButton" onClick={speakWord}>
            <FaVolumeUp />
          </button>
          </h2>
        <p>{data.meanings[0].definitions[0].definition}</p>
       </div>
      )
      }
    </div>
     
  );
}


export default App;
