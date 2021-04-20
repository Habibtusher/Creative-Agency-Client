import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png'
const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false)
    console.log(loggedInUser.email)
    useEffect(() => {
        fetch('https://damp-ocean-55307.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light  ">
                <div class="container-fluid navWidth">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item me-5">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item me-5">
                                <a class="nav-link" href="#">About Us</a>
                            </li>
                            <li class="nav-item me-5">
                                <a class="nav-link " href="#">Projects</a>
                            </li>
                            <li class="nav-item me-5">
                                <a class="nav-link " href="#">Contact</a>
                            </li>
                            {
                                isAdmin && <div>
                                    <li class="nav-item me-5 bg-success rounded">
                                        <a class="nav-link text-white" href="/admin">Admin</a>
                                    </li>
                                </div>
                            }

                            {
                                loggedInUser.email ? (

                                    <Button className="bg-success" style={{ marginLeft: "10px" }} onClick={() => setLoggedInUser({ name: "", email: "", photo: "" })}>Logout</Button>

                                ) : (
                                    <Link to="/login">
                                        <Button className="bg-success" style={{ marginLeft: "10px" }}>Sign In</Button>
                                    </Link>
                                )
                            }
                            {/* <li class="nav-item me-5 bg-success rounded  ">
                                <a class="nav-link text-white" href="/login">Login</a>
                            </li> */}

                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default NavBar;