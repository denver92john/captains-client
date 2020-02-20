import React, {Component} from 'react';
import Modal from 'react-modal';
import ListApiService from '../../services/ListApiService';
import ItemApiService from '../../services/ItemApiService';
import ItemContext from '../../contexts/ItemContext';
import {Section} from '../../components/Utils/Utils';
import BackAndAlt from '../../components/BackAndAlt/BackAndAlt';
import List from '../../components/List/List';
import FormModal from '../../components/FormModal/FormModal';

//Modal.setAppElement("#root"); 

class NamesPage extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            modalPlaceholder: null,
            patchItemId: null
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    static contextType = ItemContext;

    static defaultProps = {
        match: {params: {}}
    }

    handleOpenModal() {
        this.setState({showModal: true})
    }

    handleCloseModal() {
        this.setState({
            showModal: false,
            modalPlaceholder: null
        })
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

    // passed down to FormItem and triggered when edit icon clicked
    handlePrePatch = (item, ev) => {
        ev.preventDefault();
        this.setState({
            patchItemId: item.id,
            modalPlaceholder: item.item_name
        })
        this.handleOpenModal();
    }

    // called when FormModal submitted
    handlePatchItem = ev => {
        ev.preventDefault();
        this.context.clearError();
        const {item_name} = ev.target;
        const {patchItemId} = this.state;
        const patchedItem = {
            item_name: item_name.value
        }

        ItemApiService.patchItem(patchedItem, patchItemId)
            .then(() => {
                this.context.patchItem(patchedItem.item_name, patchItemId)
                item_name.value = ''
            })
            .catch(this.context.setError)

        this.handleCloseModal();
    }

    handleDeleteItem = (item, ev) => {
        ev.preventDefault();
        this.context.clearError();

        ItemApiService.deleteItem(item.id)
            .then(() => {
                this.context.deleteItem(item.id)
            })
            .catch(this.context.setError)
    }

    render() {
        const {list, items} = this.context;
        return (
            <div>
                <Section className="hero">
                    <div className="wrapper">
                        <header className="section-header">
                            <h1>{list.list_name} Items</h1>
                        </header>
                        <div>
                            <p className="section-p">To add a name to the list, type a name in the input and click the 'Create' button.</p>
                            <p className="section-p"></p>
                        </div>
                    </div>
                </Section>
                <Section>
                    <BackAndAlt 
                        backTo="/lists"
                        backWhat="Lists"
                        altTo={`/team/list/${list.id}`}
                        altWhat="Create Teams"
                        isList={true}
                    />
                    <List 
                        items={items}
                        onPost={this.handlePostItem}
                        onPatch={this.handlePrePatch}
                        onDelete={this.handleDeleteItem}
                    />
                    <Modal
                        isOpen={this.state.showModal}
                        className="form-modal"
                    >
                        <FormModal 
                            onModal={this.handlePatchItem}
                            onCloseModal={this.handleCloseModal}
                            placeholder={this.state.modalPlaceholder}
                        />
                    </Modal>
                </Section>

                <Section />
            </div>
        );
    }
}

export default NamesPage;