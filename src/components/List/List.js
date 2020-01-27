import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Form, Input, Button} from '../Utils/Utils';
import icon from '../../img/wireframe-box.jpg';
import './List.css';

class List extends Component {
    render() {
        const {lists} = this.props.store;
        return (
            <div className="wrapper">
                <div className="list-component">
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
                        {lists.map(list =>
                            <li key={list.id}>
                                <Link to={`/list/${list.id}/list-items`}>{list.list_name}</Link>
                                <form>
                                    <input type="image" src={icon} alt="edit button" className="list-item-button" />
                                    <input type="image" src={icon} alt="delete button" className="list-item-button" />
                                </form>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default List;

/*
    <li>
        <Link to="/list-items">List 1</Link>
        <form>
            <input type="image" src={icon} alt="edit button" className="list-item-button" />
            <input type="image" src={icon} alt="delete button" className="list-item-button" />
        </form>
    </li>
    <li>
        <Link to="/list-items">List 2</Link>
        <form>
            <input type="image" src={icon} alt="edit button" className="list-item-button" />
            <input type="image" src={icon} alt="delete button" className="list-item-button" />
        </form>
    </li>
    <li>
        <Link to="/list-items">List 3</Link>
        <form className="list-item-buttons">
            <input type="image" src={icon} alt="edit button" className="list-item-button" />
            <input type="image" src={icon} alt="delete button" className="list-item-button" />
        </form>
    </li>
*/