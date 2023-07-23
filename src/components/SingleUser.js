import React from "react";
import "./Components.css";
import { Button } from "@themesberg/react-bootstrap";
const SingleUser = ({firstName , lastName, email , phoneNumber}) => {
    return (
        <div className="SingleUser">
            <p>{firstName} {lastName}</p>
            <div>
                <p style={{ marginBottom: "7px", marginTop: "5px" }}>{email}</p>
                <p style={{ marginTop: "5px", marginBottom: "7px" }}>{phoneNumber}</p>
            </div>
            <p>isActive</p>
            <Button variant="primary" type="submit">
                View or Edit Profile
            </Button>
        </div>
    );
};

export default SingleUser;
