import './App.css';
import AllMeetups from './pages/AllMeetups';
import MainNavigation from './pages/MainNavigation';
import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';

function App() {

  const [meetups, setMeetups]=useState([]);
  const [favorites, setFavorites]=useState([]);

  function onAddMeetup(meetup){setMeetups((prevMeetups) => {  return prevMeetups.concat(meetup);})}

  function removeFromFavorites(meetup){
    setFavorites((prevFavorites) => prevFavorites.filter((fav) =>(fav.id !== meetup.id)));
  }
  function addToFavorites(meetup){
    if(favorites.some((fav) => fav.id === meetup.id)){
      return ;
    }
    else{
      setFavorites((prevFavorites) => [...prevFavorites, meetup]);
}
  }
  return (
      <div>
      <MainNavigation/>
      <Routes>
        <Route path='/' element={<AllMeetups meetups={meetups} addToFavorites={addToFavorites} favorites={favorites} removeFromFavorites={removeFromFavorites}/>}/>
        <Route path='/NewMeetup' element={<NewMeetup onAddMeetup={onAddMeetup}/>} />
        <Route path='/Favorites' element={<Favorites addToFavorites={addToFavorites} favorites={favorites} removeFromFavorites={removeFromFavorites}/>}/>
      </Routes>
      </div>    
  );
}

export default App;
