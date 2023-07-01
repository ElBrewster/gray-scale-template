import { Link } from "react-router-dom";
import Button from "../components/Button";


export default function Home() {
    return(
        <div className="home-page-container">
            <h2>Home Page</h2>
            <div className="button-box">
                <Link to="/form-page" className="link-button">Get Devil Form</Link>
            </div>
            <div className="button-box">
                <Button />
                <button className="button-default">"default"</button>
                <button className="button-hover">"hover"</button>
                <button className="button-active">"active"</button>
            </div>
        </div>
    );
}