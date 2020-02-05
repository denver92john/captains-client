import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Dash.css';

class Dash extends Component {
    render() {
        return (
            <div className="wrapper dash">
                <div className="dash-icon">
                    <Link to="/lists">
                        <FontAwesomeIcon icon="list" className="fa-dash-icon" />
                    </Link>
                    <h2 className="dash-icon-text">Lists</h2>
                </div>
                <div className="dash-icon">
                    <Link to="/teams">
                        <FontAwesomeIcon icon="user-friends" className="fa-dash-icon" />
                    </Link>
                    <h2 className="dash-icon-text">Teams</h2>
                </div>
            </div>
        );
    }
}

export default Dash;