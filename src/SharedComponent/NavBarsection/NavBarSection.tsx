import { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import "./NavBarSection.css";
import { NavLink } from "react-router-dom";

interface NavBarProps {
    logo: string;
    logoText: string;
    items: Array<arrayProps>;
}
interface arrayProps {
    contant: string;
    path: string;
}

function NavBar({ logo, items, logoText }: NavBarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [activ, setActiv] = useState<number>(0)

    return (
        <nav className="nav">
            <NavLink to="/" className="logo">
                <img src={logo} alt={logoText} />
                <p>{logoText}</p>
            </NavLink>

            <ul className={`navBtns ${isOpen ? "open" : ""}`}>
                {items.map((item, index) => (
                    <li className={`btn ${activ === index ? "activ" : ""}`} key={index}
                        onClick={() => {
                            setActiv(index);
                            window.scrollTo({top: 0, behavior: "smooth", });
                        }} >
                        <NavLink to={item.path} className="btn-link ">
                            {item.contant}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <button
                className="bars"
                onClick={() => setIsOpen(!isOpen)}
            >
                <HiBars3BottomRight />
            </button>
        </nav>
    );
}

export default NavBar;