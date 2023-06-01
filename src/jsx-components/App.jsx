import { useState } from "react";
import { ColorContext } from "../contexts/ColorContext";
import Header from "./Header";
import Main from "./Main";

function App () {

    const [ isDarkMode, setIsDarkMode ] = useState(true);

    return (
        <ColorContext.Provider value={isDarkMode}>
            <div className="new-body">
                <Header setIsDarkMode={setIsDarkMode} />
                <Main />
            </div>
        </ColorContext.Provider>
    )
}

export default App;