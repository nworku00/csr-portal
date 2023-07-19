import logo from "./logo.svg";
import "./App.css";
import PortalContext from "./PortalContext";
import Main from "./components/Main";
import { useState } from "react";
function App() {
    const [user, setUser] = useState({});
    return (
        <div className="">
            <PortalContext.Provider value={{ user, setUser }}>
                <Main></Main>
            </PortalContext.Provider>
        </div>
    );
}

export default App;
