import React, {Component} from 'react';

const UserContext = React.createContext({
    user: {},
    error: null,
    setUser: () => {},
    setError: () => {},
    clearUser: () => {},
    clearError: () => {}
})

export default UserContext;

export class UserProvider extends Component {
    state = {
        user: {},
        error: null
    }

    setUser = user => {
        this.setState({user})
    }

    setError = error => {
        this.setState({error})
    }

    clearUser = () => {
        this.setState({user: {}})
    }

    clearError = () => {
        this.setState({error: null})
    }

    render() {
        const contextValue = {
            user: this.state.user,
            error: this.state.error,
            setUser: this.setUser,
            setError: this.setError,
            clearUser: this.clearUser,
            clearError: this.clearError
        }
        return (
            <UserContext.Provider value={contextValue}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}