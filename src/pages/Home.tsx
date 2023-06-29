import { Link } from "react-router-dom";

export default function Home() {
    return(
        <div>
            <h2>Home Page</h2>
            <Link to="/form" className="link-button">Get Devil Form</Link>
        </div>
    );
}