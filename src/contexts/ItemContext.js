import React, {Component} from 'react';

export const nullList = {
    id: null,
    list_name: null,
    user_id: null
}

const ItemContext = React.createContext({
    list: {},
    items: [],
    error: null,
    setList: () => {},
    setItems: () => {},
    setError: () => {},
    addItem: () => {},
    patchItem: () => {},
    deleteItem: () => {},
    clearList: () => {},
    clearError: () => {}
});

export default ItemContext;

export class ItemProvider extends Component {
    state = {
        list: {},
        items: [],
        error: null
    }

    setList = list => {
        this.setState({list})
    }

    setItems = items => {
        this.setState({items})
    }

    setError = error => {
        console.error(error)
        this.setState({error})
    }

    addItem = item => {
        this.setState(prevState => ({
            items: [...prevState.items, item]
        }))
    }

    //JSON.parse(JSON.stringify(array))
    patchItem = (itemName, itemId) => {
        const {items} = this.state;
        let itemIndex = items.findIndex(obj => obj.id === itemId);
        let itemsCopy = JSON.parse(JSON.stringify(items));
        itemsCopy[itemIndex].item_name = itemName
        this.setState({
            items: itemsCopy
        })
    }

    deleteItem = itemId => {
        const items = this.state.items.filter(itm => itm.id !== itemId);
        this.setState({items})
    }

    clearList = () => {
        this.setList(nullList)
        this.setItems([])
    }

    clearError = () => {
        this.setState({error: null})
    }

    render() {
        const contextValue = {
            list: this.state.list,
            items: this.state.items,
            error: this.state.error,
            setList: this.setList,
            setItems: this.setItems,
            setError: this.setError,
            addItem: this.addItem,
            patchItem: this.patchItem,
            deleteItem: this.deleteItem,
            clearList: this.clearList,
            clearError: this.clearError
        }

        return (
            <ItemContext.Provider value={contextValue}>
                {this.props.children}
            </ItemContext.Provider>
        );
    }
}