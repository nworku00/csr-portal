import React, { useContext, useState } from "react";
import {Routes, Route} from 'react-router-dom'
import PortalContext from "../PortalContext";
import UserList from "./UserList";
import UserProfile from './UserProfile'
import UserProfileEdit from './UserProfileEdit'
import './Components.css'


const Main = () => {
    return (
        <div className="Main">
            <Routes>
                <Route path="/" element={<UserList />} />
                <Route path='/profile' element={<UserProfile/>}  />
                <Route path ='/profile/edit'/>
            </Routes>
        </div>
    );
};

export default Main;
