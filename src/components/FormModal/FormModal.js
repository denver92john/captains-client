import React from 'react';
import {Input, Button} from '../Utils/Utils';
import './FormModal.css';

function FormModal(props) {
    return (
        <form onSubmit={props.onModal} className="form-modal-form">
            <Input 
                type="text"
                name="item_name"
                className="form-modal-input"
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