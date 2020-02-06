import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './FormItem.css';

function FormItem(props) {
    const {item, onPatch, onDelete} = props;
    return (
        <div>
            <button className="formitem-button"
                type="button"
                onClick={ev => onPatch(item, ev)}
            >
                <FontAwesomeIcon icon="edit" className="fa-formitem-icon" />
            </button>
            <button className="formitem-button"
                type="button"
                onClick={ev => onDelete(item, ev)}
            >
                <FontAwesomeIcon icon="trash-alt" className="fa-formitem-icon" />
            </button>
        </div>
    );
}

export default FormItem;