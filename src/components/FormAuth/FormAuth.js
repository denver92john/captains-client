import React from 'react';
import {Input, Button, Label, Required} from '../Utils/Utils';

function FormAuth(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <div className="form-section">
                <Label htmlFor="username-input"><Required />Username:</Label>
                <Input 
                    type="text"
                    id="username-input"
                    name="username"
                    required
                />
            </div>

            <div className="form-section">
                <Label htmlFor="password-input"><Required />Password:</Label>
                <Input 
                    type="password"
                    id="password-input"
                    name="password"
                    required
                />
            </div>

            {props.children}

            <div role="alert">
                {props.err && <p>{props.err}</p>}
            </div>

            <div className="form-buttons">
                <Button
                    type="submit"
                    className="button-submit"
                >
                    Submit
                </Button>
                <Button
                    type="reset"
                    className="button-reset"
                >
                    Reset
                </Button>
            </div>
        </form>
    );
}

export default FormAuth;