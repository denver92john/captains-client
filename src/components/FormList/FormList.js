import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Input} from '../Utils/Utils';
import './FormList.css';

function FormList(props) {
    return (
        <form onSubmit={props.onPost} className="form-list">
            <Input 
                type="text"
                name="item_name"
                className="form-list-input"
                required
            />
            <button
                type="submit"
                className="form-list-button"
            >
                <FontAwesomeIcon icon="plus" className="fa-formlist-icon" />
            </button>
        </form>
    );
}

export default FormList;