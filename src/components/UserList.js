import React, { useContext, useState } from "react";
import "./Components.css";
import SingleUser from "./SingleUser";
import PortalContext from "../PortalContext";
import { Input, Dropdown, Menu } from "semantic-ui-react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";

const optionsSort = [
    { key: 1, text: "A-Z", value: "asc" },
    { key: 2, text: "Z-A", value: "desc" },
];
const optionsFilter = [
    { key: 1, text: "All Subscriptions", value: "all" },
    { key: 2, text: "Active Subscription", value: true },
    { key: 3, text: "Inactive Subscription", value: false },
];
const UserList = () => {
    const { users } = useContext(PortalContext);
    const [searchInput, setSearchInput] = useState("");
    const [sortingOption, setSortingOption] = useState(null);
    const [filteringOption, setFilteringOption] = useState("all");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    const handleSortChange = (_, data) => {
        setSortingOption(data.value);
    };

    const handleFilterChange = (_, data) => {
        setFilteringOption(data.value);
    };

    const searchedUsers = searchInput
        ? users.filter(
              (user) =>
                  user.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
                  user.lastName.toLowerCase().includes(searchInput.toLowerCase())
          )
        : users;

        const sortedUsers = sortingOption
        ? [...searchedUsers].sort((a, b) => {
            if (sortingOption === "asc") {
              return a.lastName.toLowerCase() < b.lastName.toLowerCase() ? -1 : 1;
            } else if (sortingOption === "desc") {
              return a.lastName.toLowerCase() > b.lastName.toLowerCase() ? -1 : 1;
            } else {
                return 0
              }
          })
        : searchedUsers;
      

    const filteredUsers =
        filteringOption === "all"
            ? sortedUsers
            : sortedUsers.filter((user) => user.active === filteringOption);

    return (
        <div className="UserList">
            <div className="UserListHeader">
                <Input size="mini" icon="search" placeholder="Search..." onChange={handleChange} />
                <Menu compact>
                    <Dropdown
                        text="Sort"
                        options={optionsSort}
                        simple
                        item
                        onChange={handleSortChange}
                    />
                    <Dropdown
                        text="Filter"
                        options={optionsFilter}
                        simple
                        item
                        onChange={handleFilterChange}
                    />
                </Menu>
            </div>
            {filteredUsers.map((user) => (
                <SingleUser
                    key={user.id} // Make sure to set a unique key for each element in the list
                    firstName={user.firstName}
                    lastName={user.lastName}
                    email={user.email}
                    phoneNumber={user.phoneNum}
                />
            ))}
        </div>
    );
};

export default UserList;
