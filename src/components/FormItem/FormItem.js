import React from 'react';
import icon from '../../img/wireframe-box.jpg';
import '../List/List.css';

function FormItem(props) {
    return (
        <form>
            <input type="image" src={icon} alt="edit button" className="list-item-button" />
            <input type="image" src={icon} alt="delete button" className="list-item-button" />
        </form>
    );
}

export default FormItem;