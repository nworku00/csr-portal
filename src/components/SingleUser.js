import React from "react";
import "./Components.css"

const SingleUser = () => {
    return <div className="SingleUser">
        <p>F. LastName</p>
        <div>
            <p style={{marginBottom: '7px' , marginTop:'5px'}}>email@email.com</p>
            <p style={{marginTop: '5px', marginBottom:'7px'}}>123-456-7890</p>
        </div>
        <p>isActive</p>
        <button>Select Profile</button>
    </div>;
};

export default SingleUser;
