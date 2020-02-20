import React from 'react';
import {Label, Input, Button} from '../Utils/Utils';
import './FormModal.css';

function FormModal(props) {
    return (
        <form onSubmit={props.onModal} className="form-modal-form">
            <Label htmlFor="item_name_input">Edit Name:</Label>
            <Input 
                type="text"
                id="item_name_input"
                name="item_name"
                className="form-modal-input"
                placeholder={props.placeholder}
                required
            />

            <div className="form-modal-buttons">
                <Button
                    type="submit"
                    className="form-modal-btn"
                >
                    Update
                </Button>

                <Button
                    type="button"
                    className="form-modal-btn"
                    onClick={props.onCloseModal}
                >Cancel</Button>
            </div>
            
        </form>
    );
}

export default FormModal;