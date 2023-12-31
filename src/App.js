import "./App.css";
import PortalContext from "./PortalContext";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import seedData from "./components/seedData";
function App() {
    const [users, setUsers] = useState([]);

    //user state is initialized with the session storage selected user so that UserProfile keeps information on reload, works with
    //works with navigation redirect so when you try to access the /profile route without a selected user it redirects to homepage
    const [selectedUser, setSelectedUser] = useState(
        JSON.parse(sessionStorage.getItem("selected"))
    );

    //this useEffect populates localStorage with the seedData,
    //then it gets users from localStorage, i did this so that data is always populated from local storage, the only time seed
    //data is used is to first populate the local storage
    useEffect(() => {
        localStorage.clear();
        for (let i = 0; i < seedData.length; i++) {
            let user = seedData[i];
            localStorage.setItem(`user${user.id}`, JSON.stringify(user));
        }
        setUsers(seedData);
    }, []);
    return (
        <div className="App">
            <PortalContext.Provider value={{ users, setUsers, selectedUser, setSelectedUser }}>
                <Header />
                <Main />
                <Footer />
            </PortalContext.Provider>
        </div>
    );
}

export default App;
