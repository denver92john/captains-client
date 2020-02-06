import React from 'react';
import {Link} from 'react-router-dom';
import FormItem from '../FormItem/FormItem';
import './ListItem.css';

const ifList = (item, link) => (
    (item.list_name)
        ? <Link to={link} className="list-item-link">{item.list_name}</Link>
        : <p className="list-item-p">{item.item_name}</p>
)

function ListItem(props) {
    const {item, link, onPatch, onDelete} = props;
    const content = ifList(item, link);

    return (
        <li className="list-item">
            {content}
            <FormItem 
                item={item}
                onPatch={onPatch} 
                onDelete={onDelete} 
            />
        </li>
    );
}

export default ListItem;