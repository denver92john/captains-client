import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Input, Button} from '../Utils/Utils';
import './FormList.css';

function FormList(props) {
    return (
        <form onSubmit={props.onPost}>
            <Input 
                type="text"
                name="item_name"
                required
            />
            <Button
                type="submit"
                className="button-submit"
            >
                <FontAwesomeIcon icon="plus" className="fa-formlist-icon" />
            </Button>
        </form>
    );
}

export default FormList;