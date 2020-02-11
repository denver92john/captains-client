import React from 'react';
import {Input, Button} from '../Utils/Utils';
import './FormModal.css';

function FormModal(props) {
    return (
        <form onSubmit={props.onModal}>
            <Input 
                type="text"
                name="item_name"
                required
            />

            <Button
                type="submit"
            >
                Update
            </Button>

            <Button
                type="button"
                onClick={props.onCloseModal}
            ></Button>
        </form>
    );
}

export default FormModal;