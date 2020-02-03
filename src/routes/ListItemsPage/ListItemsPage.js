import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ListApiService from '../../services/ListApiService';
import ItemApiService from '../../services/ItemApiService';
import ItemContext from '../../contexts/ItemContext';
import {Section} from '../../components/Utils/Utils';
import List from '../../components/List/List';

class ListItemsPage extends Component {
    static contextType = ItemContext;

    static defaultProps = {
        match: {params: {}}
    }

    componentDidMount() {
        this.context.clearError();
        ListApiService.getList(this.props.match.params.list_id)
            .then(list => {
                ItemApiService.getListItems(list.id)
                    .then(items => {
                        this.context.setList(list)
                        this.context.setItems(items)
                    })
                    .catch(this.context.setError)
            })
            .catch(this.context.setError)
    }

    componentWillUnmount() {
        this.context.clearList()
    }

    handlePostItem = ev => {
        ev.preventDefault();
        console.log(`handlePostItem ran`);
        this.context.clearError();
        const {item_name} = ev.target;
        const newItem = {
            item_name: item_name.value,
            list_id: this.context.list.id
        }
        
        ItemApiService.postItem(newItem)
            .then(item => {
                item_name.value = ''
                this.context.addItem(item);
            })
            .catch(this.context.setError)
    }

    handlePatchItem = (item, ev) => {
        ev.preventDefault();
        console.log(`handlePatchItem ran for: ${item.id}`);
        this.context.clearError();

        //ItemApiService.patchItem()
    }

    handleDeleteItem = (item, ev) => {
        ev.preventDefault();
        console.log(`handleDeleteItem ran for: ${item.id}`);
        this.context.clearError();

        ItemApiService.deleteItem(item.id)
            .then(() => {
                this.context.deleteItem(item.id)
            })
            .catch(this.context.setError)
    }

    render() {
        //const {list, items} = this.state;
        console.log(this.context);
        const {list, items} = this.context;
        return (
            <div>
                <Section className="hero">
                    <header className="section-header">
                        <h1>List Item's Page</h1>
                        <h2>{list.list_name}</h2>
                        <p>To add a name to the list, type a name in the input and click the 'Create' button. To edit the name click the edit icon. To delete the name from the list click the delete icon.</p>
                    </header>
                </Section>
                <Section>
                    <List 
                        items={items}
                        onPost={this.handlePostItem}
                        onPatch={this.handlePatchItem}
                        onDelete={this.handleDeleteItem}
                    />
                </Section>
                <Section>
                    <div className="wrapper">
                        <p>Have a list you want to create a set of teams with? Click <Link to="/teams">here</Link> to go to the Teams Page</p>
                    </div>
                </Section>
            </div>
        );
    }
}

export default ListItemsPage;