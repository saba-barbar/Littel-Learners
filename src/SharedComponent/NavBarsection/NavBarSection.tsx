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

    return (
        <nav className="nav">
            <NavLink to="/" className="logo">
                <img src={logo} alt={logoText} />
                <p>{logoText}</p>
            </NavLink>

            <ul className={`navBtns ${isOpen ? "open" : ""}`}>
                {items.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) =>
                            `btn ${isActive ? "activ" : ""}`
                        }
                        onClick={() => {
                            setIsOpen(false);
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            });
                        }}
                    >
                        {item.contant}
                    </NavLink>
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