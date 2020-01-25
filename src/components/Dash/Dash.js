import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import icon from '../../img/wireframe-box.jpg';
import './Dash.css';

class Dash extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="dash">
                    <div className="dash-icon">
                        <Link to="/lists">
                            <img src={icon} alt="List's icon" className="dash-icon-img" />
                        </Link>
                        <h2 className="dash-icon-text">Lists</h2>
                    </div>
                    <div className="dash-icon">
                        <Link to="/teams">
                            <img src={icon} alt="Team's icon" className="dash-icon-img" />
                        </Link>
                        <h2 className="dash-icon-text">Teams</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dash;