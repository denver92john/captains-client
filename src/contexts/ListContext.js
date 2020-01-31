import React, {Component} from 'react';

const ListContext = React.createContext({
    lists: [],
    error: null,
    setLists: () => {},
    setError: () => {},
    addList: () => {},
    patchList: () => {},
    deleteList: () => {},
    clearLists: () => {},
    clearError: () => {}
});

export default ListContext;

export class ListProvider extends Component {
    state = {
        lists: [],
        error: null
    }

    setLists = lists => {}

    setError = error => {}

    addList = list => {}

    patchList = list => {}

    deleteList = list => {}

    clearLists = () => {}
    
    clearError = () => {}

    render() {
        const contextValue = {
            lists: this.state.lists,
            error: this.state.error,
            setLists: this.setLists,
            setError: this.setError,
            addList: this.addList,
            patchList: this.patchList,
            deleteList: this.deleteList,
            clearLists: this.clearLists,
            clearError: this.clearError
        }

        return (
            <ListContext.Provider value={contextValue}>
                {this.props.children}
            </ListContext.Provider>
        );
    }
}