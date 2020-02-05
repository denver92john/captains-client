import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './BackButton.css';

function BackButton(props) {
    return (
        <div className="backbutton-div">
            <Link to={props.pathTo}>
                <FontAwesomeIcon icon="arrow-circle-left" className="fa-backbutton-icon" />
            </Link>
        </div>
    );
}

export default BackButton;