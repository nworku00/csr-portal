import React from "react";
import {Routes, Route} from 'react-router-dom'
import UserList from "./UserList";
import UserProfile from './UserProfile'
import './Components.css'

//this component is just for a container/layout purposes, and to control routing for rendering

const Main = () => {
    return (
        <div className="Main">
            <Routes>
                <Route path="/" element={<UserList />} />
                <Route path='/profile' element={<UserProfile/>}  />
            </Routes>
        </div>
    );
};

export default Main;
