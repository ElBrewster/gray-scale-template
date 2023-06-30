import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import Aside from "./Aside";
import SkipNav from "./SkipNav";

export default function Layout() {
    return(
        <div className="layout-container">
            <SkipNav />
            <div className="top-container">
                <Header />
                <Aside />
            </div>
            <main id="main-content">
                <Outlet /> 
            </main>
            <Footer />
        </div>
    )
}