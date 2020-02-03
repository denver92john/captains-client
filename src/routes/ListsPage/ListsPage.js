import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ListApiService from '../../services/ListApiService';
import ListContext from '../../contexts/ListContext';
import {Section} from '../../components/Utils/Utils';
import List from '../../components/List/List';

class ListsPage extends Component {
    /*constructor(props) {
        super(props);
        this.state = {
            lists: [],
            error: null
        }
    }*/

    static contextType = ListContext;

    componentDidMount() {
        this.context.clearError();
        ListApiService.getUserLists()
            .then(lists => {
                this.context.setLists(lists)
            })
            .catch(this.context.setError)
    }

    componentWillUnmount() {
        this.context.clearLists()
    }

    handlePostList = ev => {
        ev.preventDefault();
        this.context.clearError();
        const {item_name} = ev.target;
        const newList = {
            list_name: item_name.value
        }

        ListApiService.postList(newList)
            .then(list => {
                item_name.value = ''
                this.context.addList(list)
            })
            .catch(this.context.setError)
    }

    handlePatchList = (list, ev) => {
        ev.preventDefault();
        console.log(`handlePatchList ran for list.id: ${list.id}`);
        this.context.clearError();

        //ListApiService.patchList()
    }

    handleDeleteList = (list, ev) => {
        ev.preventDefault();
        console.log(`handleDeleteList ran for list.id: ${list.id}`)
        this.context.clearError();

        ListApiService.deleteList(list.id)
            .then(() => {
                this.context.deleteList(list.id)
            })
            .catch(this.context.setError)
    }

    render() {
        return (
            <div>
                <Section className="hero">
                    <header className="section-header">
                        <h1>List's Page</h1>
                        <p>Create a list by typing a name and then clicking 'Create'. To edit the names in the list click on the list name.</p>
                        <p>To edit the list name, click the edit icon. And to delete the list entirely, click the delete icon.</p>
                    </header>
                </Section>
                <Section>
                    <List 
                        user_id={this.props.user_id} 
                        items={this.context.lists}
                        onPost={this.handlePostList}
                        onPatch={this.handlePatchList}
                        onDelete={this.handleDeleteList}
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

export default ListsPage;