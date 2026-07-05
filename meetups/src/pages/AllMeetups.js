import MeetupItem from "./MeetupItem";

function AllMeetups(props){

        function favoritesCounter(){
            if(!props.favorites){
                return <div>Favorites:0</div>
            }
            else{
                return <div>Favorites:{props.favorites.length}</div>
            }
        }


        if(!props.meetups || props.meetups.length === 0){
            return(
                <h1>No Meetups Found :(</h1>
            )
        }

        
            return  (<div>
        {favoritesCounter()}
        {props.meetups.map((meetup)=> (
            <MeetupItem
            key={meetup.id}
            id={meetup.id}
            title={meetup.title}
            address = {meetup.address}
            image={meetup.image}
            description={meetup.description}
            addToFavorites={props.addToFavorites}
            favorites = {props.favorites}
            removeFromFavorites = {props.removeFromFavorites}
            />
        ))}
        
    </div>
            );
    
}

export default AllMeetups;