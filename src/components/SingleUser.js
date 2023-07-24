import React from "react";
import "./Components.css";
import { Button } from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";

//simple layout to render basic user details, use props here because I don't want to define all these variables in App.js,
//button also serves as link to /profile route

const SingleUser = ({ firstName, lastName, email, phoneNumber, handleUserSelect, activeSub }) => {
    return (
        <div className="SingleUser">
            <p>{firstName} {lastName}</p>
            <div>
                <p style={{ marginBottom: "7px", marginTop: "5px" }}>{email}</p>
                <p style={{ marginTop: "5px", marginBottom: "7px" }}>{phoneNumber}</p>
            </div>
            {activeSub ?
                <p> Active Subscription(s)</p> : <p> No Active Subscriptions</p>}
            <Link to = '/profile'>
            <Button variant="primary" type="submit" onClick={handleUserSelect}>
                View or Edit Profile
            </Button>
            </Link>
        </div>
    );
};

export default SingleUser;
