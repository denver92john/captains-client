import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ListApiService from '../../services/ListApiService';
import ItemApiService from '../../services/ItemApiService';
import {Section} from '../../components/Utils/Utils';
import List from '../../components/List/List';

class ListItemsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: {},
            items: [],
            error: null
        }
    }

    static defaultProps = {
        match: {params: {}}
    }

    componentDidMount() {
        ListApiService.getList(this.props.match.params.list_id)
            .then(list => {
                ItemApiService.getListItems(list.id)
                    .then(items => {
                        this.setState({
                            list,
                            items
                        })
                    })
                    .catch(err => this.setState({error: err.error}))
            })
            .catch(err => this.setState({error: err.error}))
    }

    handlePostItem = ev => {
        ev.preventDefault();
        console.log(`handlePostItem ran`);
        this.setState({error: null})
        const {item_name} = ev.target;
        const newItem = {
            item_name: item_name.value,
            list_id: this.state.list.id
        }
        
        ItemApiService.postItem(newItem)
            .then(res => {
                item_name.value = ''
                this.setState(prevState => ({
                    items: [...prevState.items, res]
                }))
            })
            .catch(err => this.setState({error: err.error}))
    }

    handlePatchItem = (item, ev) => {
        ev.preventDefault();
        console.log(`handlePatchItem ran for: ${item.id}`);
    }

    handleDeleteItem = (item, ev) => {
        ev.preventDefault();
        console.log(`handleDeleteItem ran for: ${item.id}`);
    }

    render() {
        /*const {list_id} = this.props.match.params;
        const {list_items, lists} = this.props.store;
        const foundList = findList(lists, list_id)
        const itemsForList = getItemsForList(list_items, list_id);*/
        //console.log(this.state);
        const {list, items} = this.state;
        console.log(items);

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