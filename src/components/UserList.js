import React, { useContext, useState } from "react";
import "./Components.css";
import PortalContext from "../PortalContext";
import { Input, Dropdown, Menu } from "semantic-ui-react";
import { Button, Table } from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";
//just some options for the 2 dropdown menus
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
    const { users, setSelectedUser } = useContext(PortalContext);
    const [searchInput, setSearchInput] = useState("");

    //initialize state so React can control dropdown menus, names are default sorted alphabetically and ascending
    //and by any subscription status
    const [sortingOption, setSortingOption] = useState("asc");
    const [filteringOption, setFilteringOption] = useState("all");
 
    const handleSearchChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    //a method to have a React Controlled dropdown, event or 'e' is replaced by underscore to be ignored,
    //data parameter is accessing the options arrays, ie: in the function below data.value is "asc" or "desc"
    const handleSortChange = (_, data) => {
        setSortingOption(data.value);
    };

    const handleFilterChange = (_, data) => {
        setFilteringOption(data.value);
    };

    //search function checks if anything is typed, then checks users' first names or last names, then filters users
    const searchedUsers = searchInput
        ? users.filter(
              (user) =>
                  user.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
                  user.lastName.toLowerCase().includes(searchInput.toLowerCase())
          )
        : users;
    //sort function checks if asc or desc is selected then organizes alphabetically
    const sortedUsers = sortingOption
        ? [...searchedUsers].sort((a, b) => {
              switch (sortingOption) {
                  case "asc":
                      return a.lastName.toLowerCase() < b.lastName.toLowerCase() ? -1 : 1;
                  case "desc":
                      return a.lastName.toLowerCase() > b.lastName.toLowerCase() ? -1 : 1;
                  default:
                      return 0;
              }
          })
        : searchedUsers;
    //hasActiveSubscription checker given own function to be able to be used passed as a prop to filteredUser.map function
    const hasActiveSubscription = (user) => {
        return user.vehicles.some((vehicle) => vehicle.activeSub);
    };
    //filter function checks and sorts by subscription status
    const filteredUsers = (() => {
        switch (filteringOption) {
            case "all":
                return sortedUsers;
            case true:
                return sortedUsers.filter((user) => hasActiveSubscription(user));
            case false:
                return sortedUsers.filter((user) => !hasActiveSubscription(user));
            default:
                return sortedUsers;
        }
    })();
    //selectedUser is stored in sessionStorage to ensure it doesn't interfere with user data in local storage,
    //and so that once user is selected when you are taken to UserProfile page the it keeps that user on refresh
    const handleUserSelect = (user) => {
        sessionStorage.setItem("selected", JSON.stringify(user));
        setSelectedUser(user);
    };
    return (
        <div className="UserList">
            <div className="UserListHeader">
                <Input
                    size="mini"
                    icon="search"
                    placeholder="Search..."
                    onChange={handleSearchChange}
                />
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
            
                <Table striped>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Subscription Status</th>
                            <th>Show/Edit User Profile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* filteredUsers variable is mapped here because it returns all users by default and then allows you to 
                        sort/filter/search without having to change variables */}
                        {filteredUsers.map((user, index) => (
                            <tr key={index}>
                                <td>
                                    {user.firstName} {user.lastName}
                                </td>
                                <td>{user.email}</td>
                                <td>{user.phoneNum}</td>
                                {hasActiveSubscription(user) ? (
                                    <td>Active Subscription(s)</td>
                                ) : (
                                    <td>No Active Subscriptions</td>
                                )}
                                <td>
                                    <Link to="/profile">
                                        <Button
                                            variant="primary"
                                            type="submit"
                                            onClick={() => handleUserSelect(user)}>
                                            View or Edit Profile
                                        </Button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            
        </div>
    );
};

export default UserList;
