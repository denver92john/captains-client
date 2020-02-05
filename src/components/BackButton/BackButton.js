import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function BackButton(props) {
    return (
        <div>
            <Link to={props.pathTo}>
                <FontAwesomeIcon icon="arrow-circle-left" />
            </Link>
        </div>
    );
}

export default BackButton;