import React, { useState, useContext } from "react";
import PortalContext from "../PortalContext";
import { Col, Row, Card, Form, Button, Table } from "@themesberg/react-bootstrap";

const UserProfile = () => {
    const { setUsers, selectedUser, setSelectedUser } = useContext(PortalContext);

    //all 'New' states are defined with a default value of the original user so that they can show up in the input
    //boxes and be editable withour having start from an empty string
    const [newFirstName, setNewFirstName] = useState(selectedUser.firstName);
    const [newLastName, setNewLastName] = useState(selectedUser.lastName);
    const [newEmail, setNewEmail] = useState(selectedUser.email);
    const [newPhoneNum, setNewPhoneNum] = useState(selectedUser.phoneNum);
    const [newCreditNum, setNewCreditNum] = useState(selectedUser.creditNum);
    const [newCreditExpiry, setNewCreditExpiry] = useState(selectedUser.creditExpiry);
    const [newVehicles, setNewVehicles] = useState(selectedUser.vehicles)

    //functions to capture input data
    const handleNewFirstNameChange = (e) => {
        setNewFirstName(e.target.value);
    };
    const handleNewLastNameChange = (e) => {
        setNewLastName(e.target.value);
    };

    const handleNewEmailChange = (e) => {
        setNewEmail(e.target.value);
    };

    const handleNewPhoneNumChange = (e) => {
        setNewPhoneNum(e.target.value);
    };

    const handleNewCreditNumChange = (e) => {
        setNewCreditNum(e.target.value);
    };

    const handleNewCreditExpiryChange = (e) => {
        setNewCreditExpiry(e.target.value);
    };
    //this function is different because I am changing the value of only one array object, instead of setting the whole state to that value,
    //it essentially does the same thing, it sets the selected user's vehicles subscription status to the status of the checked box
    const handleActiveSubChange = (index, e) => {
        const updatedVehicles = [...newVehicles];
        updatedVehicles[index].activeSub = e.target.checked;
        setNewVehicles(updatedVehicles);
      };
    //main function of UserProfile : ...selectedUser is here to make a copy of the selectedUser, whatever you don't change/can't change is kept and is all included so that the format of the object stays the same
    //then, the 'selectedUser',  sessionstorage version, and the localstorage version are all set to the updated user, and then the user state is updated to the new user info, so that the changes are reflected in the UserProfile page and the UserList page
    const handleNewUserSubmit = (e) => {
        e.preventDefault();
        const updatedUser = {
            ...selectedUser,
            firstName: newFirstName,
            lastName: newLastName,
            email: newEmail,
            phoneNum: newPhoneNum,
            creditNum: newCreditNum,
            creditExpiry: newCreditExpiry,
            vehicles: newVehicles
        };
        sessionStorage.setItem("selected", JSON.stringify(updatedUser));
        setSelectedUser(updatedUser);
        localStorage.setItem(`user${selectedUser.id}`, JSON.stringify(updatedUser));
        let localStorageKeys = Object.keys(localStorage);
        let usersFromLocalStorage = [];
        localStorageKeys.forEach((key) => {
            const userData = JSON.parse(localStorage.getItem(key));
            if (userData) {
                usersFromLocalStorage.push(userData);
            }
        });
        setUsers(usersFromLocalStorage);
    };
    return (
        <div className="UserProfile">
            <Card border="light" className="bg-light shadow-sm mb-4 w-75">
                <Card.Body>
                    <h4 className="mb-4">Customer information</h4>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Form.Group id="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    value={newFirstName}
                                    onChange={handleNewFirstNameChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Group id="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    value={newLastName}
                                    onChange={handleNewLastNameChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Form.Group id="emal">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    value={newEmail}
                                    onChange={handleNewEmailChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Group id="phone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    value={newPhoneNum}
                                    onChange={handleNewPhoneNumChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Form.Group id="creditCard">
                                <Form.Label>Credit Card Number</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    value={newCreditNum}
                                    onChange={handleNewCreditNumChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Group id="creditCardExpiry">
                                <Form.Label>Expiry</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    value={newCreditExpiry}
                                    onChange={handleNewCreditExpiryChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="mt-3">
                        <Button variant="primary" type="submit" onClick={handleNewUserSubmit}>
                            Submit Edit
                        </Button>
                    </div>
                </Card.Body>
            </Card>
            <Card border="light" className="bg-light shadow-sm mb-4 w-75">
                <Card.Body>
                    <h4 className="mb-4">Purchase History and Vehicle Subscriptions</h4>
                    <Row>
                        <h5>Recent Purchases</h5>
                        <Col className="mb-3">
                            <Table bordered={true}>
                                <thead>
                                    <tr>
                                        <th>Price</th>
                                        <th>Details</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedUser.recentPurchases.map((purchase, index) => (
                                        <tr key={index}>
                                            <td>{purchase.price}</td>
                                            <td>{purchase.details}</td>
                                            <td>{purchase.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Row>
                        <h5>Vehicles</h5>
                        <Col className="mb-3">
                            <Table bordered={true}>
                                <thead>
                                    <tr>
                                        <th className="w-25">Make</th>
                                        <th className="w-25">Model</th>
                                        <th className="w-25">Tag</th>
                                        <th className="w-25">Active Subscription</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedUser.vehicles.map((vehicle, index) => (
                                        <tr key={index}>
                                            <td>{vehicle.make}</td>
                                            <td>{vehicle.model}</td>
                                            <td>{vehicle.tag}</td>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    id="activeSub"
                                                    defaultChecked={vehicle.activeSub}
                                                    onChange={(e) => handleActiveSubChange(index, e)}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <div className="mt-3">
                        {/* this button does the same thing as the other button, originally it just submitted purchase data and vehicle data but 
                        because I decided to just make active subscriptions changeable I just rolled the functionality into the other button's
                        handle change and made this button do the same thing */}
                    <Button variant="primary" type="submit" onClick={handleNewUserSubmit}>
                            Submit Edit
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UserProfile;
