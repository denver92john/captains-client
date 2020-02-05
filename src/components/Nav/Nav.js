import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TokenService from '../../services/TokenService';
import logo from '../../img/captains-30px30px.png';
import './Nav.css';

class Nav extends Component {
    handleLogOutClick = () => {
        TokenService.clearAuthToken()
        this.props.onLogOut()
    }

    renderLoggedIn = () => {
        return (
            <ul className="nav-links">
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
                        onClick={this.handleLogOutClick}
                        to="/"
                    >
                        Logout
                    </Link>
                </li>
            </ul>
        );
    }

    renderLoggedOut = () => {
        return (
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
            </ul>
        );
    }

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

                {TokenService.hasAuthToken()
                    ? this.renderLoggedIn()
                    : this.renderLoggedOut()}
            </nav>
        );
    }
}

export default Nav;