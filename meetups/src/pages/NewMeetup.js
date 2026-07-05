   import {useRef} from "react"; 
   import {useNavigate} from 'react-router-dom';
   
    function NewMeetup(props){
        const navigate = useNavigate();

        const InputImage = useRef();
        const InputDesc = useRef();
        const InputTitle = useRef();
        const InputAddress = useRef();

        function submitHandler(event){
            event.preventDefault();

            const meetupData={
                id: Date.now(),
                title:InputTitle.current.value,
                image:InputImage.current.value,
                address:InputAddress.current.value,
                description:InputDesc.current.value,
            };
            props.onAddMeetup(meetupData);
            navigate('/');
        }
        
        return(
                <form onSubmit={submitHandler}>
                    
                    <label htmlFor="title">Title</label>
                    <input type='text'required id="title" ref={InputTitle}/>

                    <label htmlFor="image">Image URL</label>
                    <input type='url' required id="image" ref={InputImage}/>

                    <label htmlFor="address">Address</label>
                    <input type='text'required id="address" ref={InputAddress}/>
                    
                    <label htmlFor="description">Description</label>
                    <textarea required id="description" rows='5' ref={InputDesc}></textarea>

                    <button>Submit</button>
                </form>
        )
    }
    export default NewMeetup;