import logo from "./logo.svg";
import "./App.css";
import PortalContext from "./PortalContext";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import seedData from "./components/seedData";
function App() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        if (!localStorage.getItem("user0")) {
            localStorage.clear();
            for (let i = 0; i < seedData.length; i++) {
                localStorage.setItem(`user${i}`, JSON.stringify(seedData[i]));
            }
        }
        setUsers([...users, ...seedData])
    }, []);
    return (
        <div className="App">
            <PortalContext.Provider value={{ users, setUsers }}>
                <Header />
                <Main />
                <Footer />
            </PortalContext.Provider>
        </div>
    );
}

export default App;
