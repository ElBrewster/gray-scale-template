import { Link } from "react-router-dom";
import Button from "../components/Button";


export default function Home() {
    return(
        <div>
            <h2>Home Page</h2>
            <Link to="/form" className="link-button">Get Devil Form</Link>
            <div className="button-box">
                <Button />
                <button className="button-default">"default"</button>
                <button className="button-hover">"hover"</button>
                <button className="button-active">"active"</button>
            </div>
        </div>
    );
}