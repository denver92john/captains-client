import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import ListApiService from '../../services/ListApiService';
import ListContext from '../../contexts/ListContext';
import {Section} from '../../components/Utils/Utils';
import BackButton from '../../components/BackButton/BackButton';
import List from '../../components/List/List';

Modal.setAppElement("#root");

class ListsPage extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            patchListId: null
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    static contextType = ListContext;

    handleOpenModal() {
        this.setState({showModal: true})
    }

    handleCloseModal() {
        this.setState({showModal: false})
    }

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

    handlePrePatch = (list, ev) => {
        ev.preventDefault();
        this.context.clearError();
        this.setState({patchListId: list.id});
        this.handleOpenModal();
    }

    handlePatchList = ev => {
        ev.preventDefault();
        const {list_name} = ev.target;
        const {patchListId} = this.state;
        const patchedList = {
            list_name: list_name.value
        }

        ListApiService.patchList(patchedList, patchListId)
            .then(() => {
                this.context.patchList(patchedList.list_name, patchListId)
                list_name.value = ''
            })
            .catch(this.context.setError)

        this.handleCloseModal();
    }

    handleDeleteList = (list, ev) => {
        ev.preventDefault();
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
                    <BackButton pathTo="/dashboard" />
                    <List 
                        items={this.context.lists}
                        onPost={this.handlePostList}
                        onPatch={this.handlePrePatch}
                        onDelete={this.handleDeleteList}
                    />
                    <Modal
                        isOpen={this.state.showModal}
                        contentLabel="Update it"
                    >
                        <form onSubmit={this.handlePatchList}>
                            <input 
                                type="text"
                                name="list_name"
                                required
                            />
                            <button
                                type="submit"
                            >
                                Update
                            </button>
                            <button
                                type="button"
                                onClick={this.handleCloseModal}
                            >
                                Cancel
                            </button>
                        </form>
                    </Modal>
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