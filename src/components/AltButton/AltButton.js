import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import './AltButton.css';

function AltButton(props) {
    return (
        <div>
            <Link to={props.altTo}>
                <p className="altbutton-text">{props.altWhat}</p>
                {(!props.isList)
                    ? <FontAwesomeIcon icon="list" className="fa-altbutton-icon" />
                    : <FontAwesomeIcon icon="user-friends" className="fa-altbutton-icon" />}
            </Link>
        </div>
    );
}

export default AltButton;