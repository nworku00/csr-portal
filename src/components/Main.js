import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UserList from "./UserList";
import UserProfile from "./UserProfile";
import "./Components.css";

//this component is just for a container/layout purposes, and to control routing for rendering

const Main = () => {
    return (
        <div className="Main">
            <Routes>
                <Route path="/" element={<UserList />} />

                {/* this route contains a conditional check, if a user isnt selected and someone tries to manually navigate to profile route
                they are redirected to the home page */}
                <Route
                    path="/profile"
                    element={
                        sessionStorage.getItem("selected") ? (
                            <UserProfile />
                        ) : (
                            <Navigate replace to="/" />
                        )
                    }
                />
            </Routes>
        </div>
    );
};

export default Main;
