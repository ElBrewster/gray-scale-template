import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

export default function Layout() {
    return(
        <div>
            <Header />
            <Nav />
            <main id="main-content">
                <Outlet /> 
            </main>
            <Footer />
        </div>
    )
}