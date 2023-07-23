import React, { useContext, useState } from "react";
import PortalContext from "../PortalContext";
import { Col, Row, Card, Form, Button, InputGroup, Table } from "@themesberg/react-bootstrap";

const UserProfile = () => {
    
    const clear = () => {
        localStorage.clear()
    }
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
                                    placeholder="Enter your first name"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Group id="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Also your last name"
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
                                    placeholder="name@company.com"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Group id="phone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="+12-345 678 910"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Form.Group id="creditCard">
                                <Form.Label>Credit Card Number</Form.Label>
                                <Form.Control required type="text" placeholder="Example Number" />
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Group id="creditCardExpiry">
                                <Form.Label>Expiry</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder='c'
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="mt-3">
                        <Button variant="primary" type="submit">
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
                                    <tr>
                                        <td>5.40</td>
                                        <td>Lorem ipsum dolor sit amet.</td>
                                        <td>01/20/22</td>
                                    </tr>
                                    <tr>
                                        <td>2.50</td>
                                        <td>Lorem ipsum dolor sit amet.</td>
                                        <td>01/20/22</td>
                                    </tr>
                                    <tr>
                                        <td>300</td>
                                        <td>Lorem ipsum dolor sit amet.</td>
                                        <td></td>
                                    </tr>
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
                                    <tr>
                                        <td>Toyota</td>
                                        <td>Camry</td>
                                        <td>
                                        123abc
                                        </td>
                                        <td>
                                        <input type="checkbox" name="" id="activeSub" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Toyota</td>
                                        <td>4Runner</td>
                                        <td>
                                        123abc
                                        </td>
                                        <td>
                                        <input type="checkbox" name="" id="activeSub" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Ford</td>
                                        <td>Mustang</td>
                                        <td>
                                        123abc
                                        </td>
                                        <td>
                                            <input type="checkbox" name="" id="activeSub" />
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <div className="mt-3">
                        <Button variant="primary" type="submit">
                            Submit Edit
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UserProfile;
