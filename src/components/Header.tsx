import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link to="./">
                <h1>Gray-Scale Template</h1> 
            </Link>
        </header>
    );
}