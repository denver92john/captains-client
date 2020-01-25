import React, {Component} from 'react';
import {Input, Button, Form, Label, Required, Section} from '../../components/Utils/Utils';

class SignupPage extends Component {
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
                        <Form>
                            <div className="form-section">
                                <Label htmlFor="username-input"><Required />Username: </Label>
                                <Input 
                                    type="text"
                                    id="username-input"
                                    name="username"
                                    placeholder="KwahiLeonard"
                                    required
                                />
                            </div>
                            <div className="form-section">
                                <Label htmlFor="password-input"><Required />Password: </Label>
                                <Input 
                                    type="password"
                                    id="password-input"
                                    name="password"
                                    required
                                />
                            </div>

                            <div className="form-buttons">
                                <Button type="submit" className="button-submit">Submit</Button>
                                <Button type="reset" className="button-reset">Reset</Button>
                            </div>
                        </Form>
                    </div>
                    
                </Section>
            </div>
        );
    }
}

export default SignupPage;