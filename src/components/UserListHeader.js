import React from "react";
import "./Components.css";
import { Input, Dropdown, Menu } from "semantic-ui-react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";

const optionsSort = [
    { key: 1, text: "A-Z", value: 1 },
    { key: 2, text: "Z-A", value: 2 },
];
const optionsFilter = [
    { key: 1, text: "All Subscriptions", value: 1 },
    { key: 2, text: "Active Subscription", value: 2 },
    { key: 3, text: "Inactive Subscription", value: 3 },
];
const UserListHeader = () => {
    return (
        <div className="UserListHeader">
            <Input size="mini" icon="search" placeholder="Search..." />
            <Menu compact>
                <Dropdown text="Sort" options={optionsSort} simple item />
                <Dropdown text="Filter" options={optionsFilter} simple item />
            </Menu>
        </div>
    );
};

export default UserListHeader;
