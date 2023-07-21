import React from "react";
import "./Components.css"
import SingleUser from "./SingleUser";
import UserListHeader from "./UserListHeader";
const UserList = () => {
    return (
        <div className="UserList">
            <UserListHeader/>
            <SingleUser />
            <SingleUser />
            <SingleUser />
            <SingleUser />
        </div>
    );
};

export default UserList;
