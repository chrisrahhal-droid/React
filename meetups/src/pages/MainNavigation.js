    import { Link} from "react-router-dom";
    function MainNavigation(){

        return (
            <div>
            <h1>React Meetups</h1>
            <div>
                <Link to='/'>All Meetups</Link>
                <Link to='/NewMeetup' >New Meetup</Link>
                <Link to='/Favorites' >Favorites</Link>
            </div>
            </div>
        )
    }
    export default MainNavigation;