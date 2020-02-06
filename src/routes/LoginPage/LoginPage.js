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
        this.setState({error: null})
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
        const {error} = this.state;
        let errMessage;
        if(error) {
            errMessage = error.message
        }
        return (
            <div>
                <Section className="hero">
                    <header className="section-header">
                        <h1>Login Page</h1>
                    </header>
                </Section>
                <Section>
                    <FormAuth onSubmit={this.handleSubmit} err={errMessage} />
                </Section>
            </div>
        );
    }
}

export default LoginPage;