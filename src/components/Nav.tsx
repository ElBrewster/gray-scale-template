import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <nav className="nav-bar">
            <ul className="nav-root"><Link to="/">HOME</Link></ul>
            <ul className="nav-profile"><Link to="/profile">PROFILE</Link></ul>
            <ul className="nav-scoreboard"><Link to="/scoreboard">HIGH SCORES</Link></ul>
        </nav>
    );
}