import { useContext } from "react";
import { ColorContext } from "../contexts/ColorContext";
import { MdDarkMode } from "react-icons/md";

function Header ({ setIsDarkMode }) {

    const colorTheme = useContext(ColorContext);

    return (
        <header className={`${colorTheme ? "dark-blue-bg white-fc dark-header-shadow" : "white-bg black-fc light-header-shadow"}`}>
            <h1>
                Where in the world?
            </h1>
            <button onClick={() => setIsDarkMode(prevMode => !prevMode)} className="color-toggle-button">
                <MdDarkMode className="moon-icon icon"/>
                <span>Dark Mode</span>
            </button>
        </header>
    )
}

export default Header;