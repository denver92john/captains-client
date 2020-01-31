import React from 'react';
import {Input, Button} from '../Utils/Utils';

function FormList(props) {
    return (
        <form onSubmit={props.onPost}>
            <Input 
                type="text"
                name="list_name"
                required
            />
            <Button
                type="submit"
                className="button-submit"
            >
                Create
            </Button>
        </form>
    );
}

export default FormList;