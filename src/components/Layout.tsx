import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import Aside from "./Aside";

export default function Layout() {
    return(
        <div>
            <a href="main-content">Skip to the main content.</a>
            <Header />
            <Aside />
            <main id="main-content">
                <Outlet /> 
            </main>
            <Footer />
        </div>
    )
}