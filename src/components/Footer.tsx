import { SiGithub, SiLinkedin } from "react-icons/si";
import { AiOutlineHeart } from "react-icons/ai";

export default function Footer() {
    return (
        <footer>
            <div className="footerWrapper">
                <div className="footerNote">
                <small>made by:</small>&nbsp;
                <AiOutlineHeart className="iconOutline" />
                </div>
                <a
                href="https://github.com/pattpjy"
                aria-label="Go to Patt's github page"
                className="myLink"
                >
                <SiGithub className="icon-github" />
                </a>
                <a
                href="https://www.linkedin.com/in/pattsookmark/"
                aria-label="Go to Patt's linked-in page"
                className="myLink"
                >
                <SiLinkedin className="icon-linked" />
                </a>
                <a
                href="https://github.com/ElBrewster"
                aria-label="Go to El's github page"
                className="myLink"
                >
                <SiGithub className="icon-github" />
                </a>
                <a
                href="https://www.linkedin.com/in/el-brewster/"
                aria-label="Go to El's linked-in page"
                className="myLink"
                >
                <SiLinkedin className="icon-linked" />
                </a>
            </div>
        </footer>
    )
}