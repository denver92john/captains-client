import React from 'react';
import BackButton from '../BackButton/BackButton';
import AltButton from '../AltButton/AltButton';
import './BackAndAlt.css';

function BackAndAlt(props) {
    const {backTo, backWhat, altTo, altWhat} = props;
    return (
        <div className="back-and-alt">
            <BackButton backTo={backTo} backWhat={backWhat} />
            <AltButton altTo={altTo} altWhat={altWhat} />
        </div>
    );
}

export default BackAndAlt;