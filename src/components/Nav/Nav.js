import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../img/wireframe-box.jpg';
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="logo-div">
                    <Link
                        to="/"
                    >
                        <img src={logo} alt="" className="logo" />
                    </Link>
                </div>

                <ul className="nav-links">
                    <li>
                        <Link
                            className="nav-link"
                            to="/signup"
                        >
                            Signup
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="nav-link"
                            to="/login"
                        >
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="nav-link"
                            to="/dashboard"
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="nav-link"
                            to="/lists"
                        >
                            Lists
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="nav-link"
                            to="/list-items"
                        >
                            List-Items
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="nav-link"
                            to="/teams"
                        >
                            Teams
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;