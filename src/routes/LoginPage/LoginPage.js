import React, {Component} from 'react';
import TokenService from '../../services/TokenService';
import AuthApiService from '../../services/AuthApiService';
import {Section} from '../../components/Utils/Utils';
import FormAuth from '../../components/FormAuth/FormAuth';


class LoginPage extends Component {
    static defaultProps = {
        history: {
            push: () => {}
        }
    }

    state = {error: null}

    handleLoginSuccess = (user) => {
        const {history, setUser} = this.props;
        setUser(user)
        history.push('/dashboard')
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const {username, password} = ev.target;
        const loggedUser = {
            username: username.value,
            password: password.value
        }
        
        AuthApiService.postLogin(loggedUser)
            .then(res => {
                username.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.handleLoginSuccess(res.user)
            })
            .catch(res => this.setState({error: res.error}))
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