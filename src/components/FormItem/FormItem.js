import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Button} from '../Utils/Utils';
import '../List/List.css';

function FormItem(props) {
    const {item, onPatch, onDelete} = props;
    return (
        <div>
            <Button
                type="button"
                onClick={ev => onPatch(item, ev)}
            >
                <FontAwesomeIcon icon="edit" />
            </Button>
            <Button
                type="button"
                onClick={ev => onDelete(item, ev)}
            >
                <FontAwesomeIcon icon="trash-alt" />
            </Button>
        </div>
    );
}

export default FormItem;