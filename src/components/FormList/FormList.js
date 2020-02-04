import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Input, Button} from '../Utils/Utils';

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
                <FontAwesomeIcon icon="plus" />
            </Button>
        </form>
    );
}

export default FormList;