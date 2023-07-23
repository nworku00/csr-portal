import React, { useContext, useState } from "react";
import {Routes, Route} from 'react-router-dom'
import PortalContext from "../PortalContext";
import UserList from "./UserList";
import UserProfile from './UserProfile'
import UserProfileEdit from './UserProfileEdit'
import seedData from "./seedData";
import './Components.css'
import { Button } from "semantic-ui-react";


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
