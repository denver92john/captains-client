import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../List/List.css';

function FormItem(props) {
    const {item, onPatch, onDelete} = props;
    return (
        <div>
            <button
                type="button"
                onClick={ev => onPatch(item, ev)}
            >
                <FontAwesomeIcon icon="edit" />
            </button>
            <button
                type="button"
                onClick={ev => onDelete(item, ev)}
            >
                <FontAwesomeIcon icon="trash-alt" />
            </button>
        </div>
    );
}

export default FormItem;