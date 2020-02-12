import React, {Component} from 'react';
import Modal from 'react-modal';
import ListApiService from '../../services/ListApiService';
import ListContext from '../../contexts/ListContext';
import {Section} from '../../components/Utils/Utils';
import BackAndAlt from '../../components/BackAndAlt/BackAndAlt';
import List from '../../components/List/List';
import FormModal from '../../components/FormModal/FormModal';

//Modal.setAppElement("#root");

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
        const {item_name} = ev.target;
        const {patchListId} = this.state;
        const patchedList = {
            list_name: item_name.value
        }

        ListApiService.patchList(patchedList, patchListId)
            .then(() => {
                this.context.patchList(patchedList.list_name, patchListId)
                item_name.value = ''
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
                    <div className="wrapper">
                        <header className="section-header">
                            <h1>List's Page</h1>
                        </header>
                        <div>
                            <p className="section-p">To create list, select input box and give your list a name, then click the create button.</p>
                            <p className="section-p">Your newly created list will be added below.</p>
                            <p className="section-p">To modify the names in your list, click the list name.</p>
                        </div>
                    </div>
                </Section>

                <Section>
                    <BackAndAlt 
                        backTo="/dashboard"
                        backWhat="Dashboard"
                        altTo="/teams"
                        altWhat="Pick List"
                        isList={true}
                    />
                    <List 
                        items={this.context.lists}
                        onPost={this.handlePostList}
                        onPatch={this.handlePrePatch}
                        onDelete={this.handleDeleteList}
                    />
                    <Modal
                        isOpen={this.state.showModal}
                        contentLabel="Update it"
                        className="form-modal"
                    >
                        <FormModal 
                            onModal={this.handlePatchList} 
                            onCloseModal={this.handleCloseModal} 
                        />
                    </Modal>
                </Section>
                
                <Section />
            </div>
        );
    }
}

export default ListsPage;