import React from 'react';
import icon from '../../img/wireframe-box.jpg';
import '../List/List.css';

function FormItem(props) {
    const {itemId, onPatch, onDelete} = props;
    return (
        <div>
            <button
                type="button"
                onClick={ev => onPatch(itemId, ev)}
            >
                <img src={icon} alt="edit button" className="list-item-button" />
            </button>
            <button
                type="button"
                onClick={ev => onDelete(itemId, ev)}
            >
                <img src={icon} alt="delete button" className="list-item-button"/>
            </button>
        </div>
    );
}

export default FormItem;