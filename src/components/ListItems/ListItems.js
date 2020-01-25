import React, {Component} from 'react';
import {Form, Input, Button} from '../Utils/Utils';
import icon from '../../img/wireframe-box.jpg';
import '../List/List.css';

class ListItems extends Component {
    render() {
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
                </ul>
            </div>
        );
    }
}

export default ListItems;