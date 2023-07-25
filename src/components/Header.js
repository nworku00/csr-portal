import React from "react";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import "./Components.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <img src={require("../logo-no-background.png")} alt="" height={50} />
            <Link to="/">
                <IconButton>
                    <HomeIcon fontSize="large"></HomeIcon>
                </IconButton>
            </Link>
        </div>
    );
};

export default Header;
