import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function BackButton(props) {
    return (
        <div className="backbutton-div">
            <Link to={props.backTo}>
                <FontAwesomeIcon icon="arrow-circle-left" className="fa-backbutton-icon" />
                <p className="backbutton-text">{props.backWhat}</p>
            </Link>
        </div>
    );
}

export default BackButton;