import {useRef, useState} from 'react';
import { db } from './firebase';
import {collection, addDoc} from "firebase/firestore";

function Form(){
    const firstNameInput = useRef();
    const lastNameInput = useRef();
    const emailInput = useRef();
    const contactInput = useRef();
    const imageUrlInput = useRef();
    const resumeInput = useRef();
    const aboutInput = useRef();

    const [gender, setGender] = useState("");
    const [subject, setSubject] = useState([]);
    const [age, setAge] = useState(18);

    const handleSubjectChange = (e) => {
        const value = e.target.value;
        if (subject.includes(value)) {
        setSubject(subject.filter((s) => s !== value));
        } else {
        setSubject([...subject, value]);
        }
    };

    function generateAges(){
    let options = [];
    for(let i = 18; i <= 64; i++){
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  }


    const handleGenderChange = (e) => setGender(e.target.value);
    
    async function submitHandler(event){
        event.preventDefault();

        const formData ={
        firstName : firstNameInput.current.value,
        lastName : lastNameInput.current.value,
        email : emailInput.current.value,
        contact : contactInput.current.value,
        resume : resumeInput.current.value,
        imageUrl : imageUrlInput.current.value,
        about: aboutInput.current.value,
        gender,
        subject,
        age
        }

        console.log(formData);
        await addDoc(collection(db, "formData"), formData);
        alert("Submited Successfully!")
    }

    function reset(){
        setGender("");
        setSubject([]);
        setAge("");

        firstNameInput.current.value = "";
        lastNameInput.current.value = "";
        emailInput.current.value = "";
        contactInput.current.value = "";
        resumeInput.current.value = "";
        imageUrlInput.current.value = "";
        aboutInput.current.value = "";
    }




    return(
        <form onSubmit={submitHandler}>
            <label htmlFor='firstName'>First Name*</label>
            <input type = 'text' required id = 'firstName' ref={firstNameInput} />
        
            <label htmlFor='lastName'>Last Name*</label>
            <input type = 'text' required id = 'lastName' ref={lastNameInput}/>
        
            <label htmlFor='Email'>Enter Email*</label>
            <input type = 'email' required id = 'Email' ref={emailInput}/>
        
            <label htmlFor='contact'>Contact*</label>
            <input type = 'tel' required id = 'contact' ref={contactInput}/>
            
            <label>Gender*</label>
        <div className="radiogroup">
                <label><input type = 'radio' name = 'gender' value = 'Male' checked = {gender === 'Male'} onChange = {handleGenderChange}/>Male</label>
                <label><input type = 'radio' name = 'gender' value = 'Female' checked = {gender === 'Female'} onChange = {handleGenderChange}/>Female</label>
                <label><input type = 'radio' name = 'gender' value = 'Other' checked = {gender === 'Other'} onChange = {handleGenderChange}/>Other</label>
        </div>    
            <label>Your Best Subject</label>
        <div className="checkboxgroup">
                <label><input type = 'checkbox' name = 'subject' value = 'English' checked = {subject.includes('English')} onChange={handleSubjectChange}/>English</label>
                <label><input type = 'checkbox' name = 'subject' value = 'Maths' checked = {subject.includes('Maths')} onChange ={handleSubjectChange}/>Maths</label>
                <label><input type = 'checkbox' name = 'subject' value = 'Physics' checked = {subject.includes('Physics')} onChange = {handleSubjectChange}/>Physics</label>
        </div>
            <label htmlFor='resume'>Upload Resume*</label>
            <input type = 'file' required id = 'resume' ref = {resumeInput}/>
            
            <label htmlFor='imageurl'>Enter URL*</label>
            <input type = 'url' required id = 'imageurl' ref = {imageUrlInput}/>
            
            <label htmlFor='age'>Select your Age</label>
        <select id='age' value={age} onChange={(e) => setAge(e.target.value)} required>
            {generateAges()}
        </select>

            <label htmlFor='about'>About</label>
            <textarea rows={4} cols={5} required id = 'about' ref= {aboutInput}/>
       
            <label><strong>Submit OR Reset</strong></label>
             <div className='button-group'>
            <button type='submit'>Submit</button>
            <button onClick={reset}>Reset</button>
            </div>
        </form>
    )
}
export default Form;