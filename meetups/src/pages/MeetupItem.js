import { useNavigate } from 'react-router-dom';
        
    function MeetupItem(props){
            // const navigate = useNavigate?();
            const isFavorite = props.favorites?.some((fav) => (fav.id === props.id));
            
            function  clickHandler(){
                if(isFavorite){
                    props.removeFromFavorites({id:props.id});
                }
                else{
                    props.addToFavorites({
                    id: props.id,
                    title: props.title,
                    address: props.address,
                    image: props.image,
                    description: props.description,
                });
                //  navigate('/Favorites');
            }
            
        }
            return(
            <div>
                <h1>{props.title}</h1>
                <img src={props.image}/>
                <p>{props.address}</p>
                <p>{props.description}</p>
                <div>
                <button onClick={clickHandler}>
                {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                </button>
            </div>
            </div>
        )
    }

    export default MeetupItem;