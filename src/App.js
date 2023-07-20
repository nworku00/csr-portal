import logo from "./logo.svg";
import "./App.css";
import PortalContext from "./PortalContext";
import Main from "./components/Main";
import { useState } from "react";
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
    const [user, setUser] = useState('');
    return (
        <div className= "App">
            <PortalContext.Provider value={{ user, setUser }}>
            <Header/>
            <Main/>
            <Footer/>
            </PortalContext.Provider>
        </div>
    );
}

export default App;
