import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Button} from '../Utils/Utils';
import './FormItem.css';

function FormItem(props) {
    const {item, onPatch, onDelete} = props;
    return (
        <div>
            <Button className="formitem-button"
                type="button"
                onClick={ev => onPatch(item, ev)}
            >
                <FontAwesomeIcon icon="edit" className="fa-formitem-icon" />
            </Button>
            <Button className="formitem-button"
                type="button"
                onClick={ev => onDelete(item, ev)}
            >
                <FontAwesomeIcon icon="trash-alt" className="fa-formitem-icon" />
            </Button>
        </div>
    );
}

export default FormItem;