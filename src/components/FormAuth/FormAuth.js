import React from 'react';
import {Input, Button, Label, Form} from '../Utils/Utils';

function FormAuth(props) {
    return (
        <Form onSubmit={props.onSubmit} className="form-auth">
            <div className="form-section">
                <Label htmlFor="username-input">Username:</Label>
                <Input 
                    type="text"
                    id="username-input"
                    name="username"
                    required
                />
            </div>

            <div className="form-section">
                <Label htmlFor="password-input">Password:</Label>
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

            <div className="form-auth-buttons">
                <Button
                    type="submit"
                    className="form-auth-button"
                >
                    Submit
                </Button>
                <Button
                    type="reset"
                    className="form-auth-button"
                >
                    Reset
                </Button>
            </div>
        </Form>
    );
}

export default FormAuth;