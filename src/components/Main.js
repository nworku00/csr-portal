import React, { useContext, useState } from "react";
import PortalContext from "../PortalContext";
import UserList from "./UserList";
import './Components.css'


const Main = () => {
    return (
        <div className="Main">
            <UserList />

            {/*
            router set up
            userprofile
            useredit
            
            */}

        </div>
    );
};

export default Main;
