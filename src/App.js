import "./App.css";
import PortalContext from "./PortalContext";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import seedData from "./components/seedData";
function App() {

    //states are defined here to allow all components to access and change
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});
    
    //this useEffect first checks if local storage has been populated by user seed data, then adds seed data if not
    //then it gets users from localStorage, i did this so that data is always populated from local storage, the only time seed
    //data is used is to first populate the local storage
    useEffect(() => {
        if (!localStorage.getItem("user1")) {
            localStorage.clear();
            for (let i = 0; i < seedData.length; i++) {
                let user = seedData[i];
                localStorage.setItem(`user${user.id}`, JSON.stringify(user));
            }
        }
        let localStorageKeys = Object.keys(localStorage);
        let usersFromLocalStorage = [];
        localStorageKeys.forEach((key) => {
            const userData = JSON.parse(localStorage.getItem(key));
            if (userData) {
                usersFromLocalStorage.push(userData);
            }
        });
        setUsers(usersFromLocalStorage);
    }, []);
    return (
        <div className="App">
            <PortalContext.Provider value={{ users, setUsers , selectedUser, setSelectedUser}}>
                <Header />
                <Main />
                <Footer />
            </PortalContext.Provider>
        </div>
    );
}

export default App;
