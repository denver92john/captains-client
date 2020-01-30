import React, {Component} from 'react';
import {Input, Label, Required, Section} from '../../components/Utils/Utils';
import FormAuth from '../../components/FormAuth/FormAuth';

class SignupPage extends Component {
    handleSubmit = ev => {
        ev.preventDefault()
        const {username, password, re_password} = ev.target;
        const newUser = {
            username: username.value,
            password: password.value,
            re_password: re_password.value
        }
        console.log(newUser);
    }

    render() {
        return (
            <div>
                <Section className="hero">
                    <header className="section-header">
                        <h1>Signup Page</h1>
                    </header>
                </Section>
                <Section>
                    <div className="wrapper">
                        <FormAuth onSubmit={this.handleSubmit}>
                            <div className="form-section">
                                <Label htmlFor="re_password-input"><Required/>Re-enter Password:</Label>
                                <Input 
                                    type="password"
                                    id="re_password-input"
                                    name="re_password"
                                    required
                                />
                            </div>
                        </FormAuth>
                    </div>
                </Section>
            </div>
        );
    }
}

export default SignupPage;