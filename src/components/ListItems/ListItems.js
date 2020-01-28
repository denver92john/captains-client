import React, {Component} from 'react';
import {Form, Input, Button} from '../Utils/Utils';
import icon from '../../img/wireframe-box.jpg';
import '../List/List.css';

const getItemsForList = (items=[], list_id) => (
    (!list_id)
        ? items
        : items.filter(item => item.list_id === list_id)
)

class ListItems extends Component {
    render() {
        const {list_id, list_items} = this.props;
        const itemsForList = getItemsForList(list_items, list_id);

        return (
            <div className="wrapper list-component">
                <Form>
                    <div className="form-section">
                        <Input 
                            type="text"
                            name="list-name"
                            required
                        />
                        <Button
                            type="submit"
                        >
                            Create
                        </Button>
                    </div>
                </Form>
                <ul className="named-list">
                    {itemsForList.map(item =>
                        <li key={item.id} className="named-list-item">
                            <p>{item.item_name}</p>
                            <Form>
                                <input type="image" src={icon} alt="edit button" className="list-item-button" />
                                <input type="image" src={icon} alt="delete button" className="list-item-button" />
                            </Form>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default ListItems;

/*
    <li>
        <p>Joe</p>
        <form>
            <input type="image" src={icon} alt="edit button" className="list-item-button" />
            <input type="image" src={icon} alt="delete button" className="list-item-button" />
        </form>
    </li>
    <li>
        <p>Greg</p>
        <form>
            <input type="image" src={icon} alt="edit button" className="list-item-button" />
            <input type="image" src={icon} alt="delete button" className="list-item-button" />
        </form>
    </li>
    <li>
        <p>Ben</p>
        <form>
            <input type="image" src={icon} alt="edit button" className="list-item-button" />
            <input type="image" src={icon} alt="delete button" className="list-item-button" />
        </form>
    </li>
    <li>
        <p>Bill</p>
        <form>
            <input type="image" src={icon} alt="edit button" className="list-item-button" />
            <input type="image" src={icon} alt="delete button" className="list-item-button" />
        </form>
    </li>
*/