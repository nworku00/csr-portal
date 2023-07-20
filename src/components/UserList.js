import React from "react";
import SingleUser from "./SingleUser";

const UserList = () => {
    const style = {
        backgroundColor:'green'
    }
    return (
        <div className="UserList" style = {style}>
            <SingleUser />
            <SingleUser />
            <SingleUser />
            <SingleUser />
        </div>
    );
};

export default UserList;
