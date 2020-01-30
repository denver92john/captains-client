import React, {Component} from 'react';
import {Section} from '../../components/Utils/Utils';
import FormAuth from '../../components/FormAuth/FormAuth';


class LoginPage extends Component {
    handleSubmit = ev => {
        ev.preventDefault()
        const {username, password} = ev.target;
        const loggedUser = {
            username: username.value,
            password: password.value
        }
        console.log(loggedUser);
    }

    render() {
        return (
            <div>
                <Section className="hero">
                    <header className="section-header">
                        <h1>Login Page</h1>
                    </header>
                </Section>
                <Section>
                    <div className="wrapper">
                        <FormAuth onSubmit={this.handleSubmit} />
                    </div>
                </Section>
            </div>
        );
    }
}

export default LoginPage;