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

    setLists = lists => {
        this.setState({lists})
    }

    setError = error => {
        console.error(error)
        this.setState({error})
    }

    addList = list => {
        this.setState(prevState => ({
            lists: [...prevState.lists, list]
        }))
    }

    patchList = (listName, listId) => {
        const {lists} = this.state;
        let listIndex = lists.findIndex(obj => obj.id === listId);
        let listsCopy = JSON.parse(JSON.stringify(lists));
        listsCopy[listIndex].list_name = listName
        this.setState({
            lists: listsCopy
        })
    }

    deleteList = listId => {
        const lists = this.state.lists.filter(ls => ls.id !== listId);
        this.setState({lists})
    }

    clearLists = () => {
        this.setLists([])
    }
    
    clearError = () => {
        this.setState({error: null})
    }

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