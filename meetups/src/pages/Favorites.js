import MeetupItem from "./MeetupItem";

function Favorites(props){
    if(!props.favorites || props.favorites.length === 0){
        return <h1>No favorites yet:(</h1>
    }else{
    return(
        <div>
            {props.favorites.map((fav) => (
                <MeetupItem
                key={fav.id}
                id={fav.id}
                title={fav.title}
                image={fav.image}
                address={fav.address}
                description={fav.description}
                favorites ={props.favorites}
                removeFromFavorites = {props.removeFromFavorites}
                addToFavorites={props.addToFavorites}
                />
            ))}
        </div>
    );
}
}


export default Favorites;