import React, {Component} from 'react';

const ItemContext = React.createContext({
    list: {},
    items: [],
    error: null,
    setItems: () => {},
    setError: () => {},
    addItem: () => {},
    patchItem: () => {},
    deleteItem: () => {},
    clearItems: () => {},
    clearError: () => {}
});

export default ItemContext;

export class ItemProvider extends Component {
    state = {
        list: {},
        items: [],
        error: null
    }

    setItems = items => {}

    setError = error => {}

    addItem = item => {}

    patchItem = item => {}

    deleteItem = item => {}

    clearItems = () => {}

    clearError = () => {}

    render() {
        const contextValue = {
            list: this.state.list,
            items: this.state.items,
            error: this.state.error,
            setItems: this.setItems,
            setError: this.setError,
            addItem: this.addItem,
            patchItem: this.patchItem,
            deleteItem: this.deleteItem,
            clearItems: this.clearItems,
            clearError: this.clearError
        }

        return (
            <ItemContext.Provider value={contextValue}>
                {this.props.children}
            </ItemContext.Provider>
        );
    }
}