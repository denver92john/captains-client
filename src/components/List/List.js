import React from 'react';
import FormList from '../FormList/FormList';
import ListItem from '../ListItem/ListItem';
import './List.css';

function List(props) {
    const {items, onPost, isOpen, onPatch, onDelete} = props;
    return (
        <div className="wrapper list-component">
            <FormList onPost={onPost} />
            <ul className="named-list">
                {items.map(item =>
                    <ListItem 
                        key={item.id}
                        item={item}
                        link={`/list/${item.id}/list-items`}
                        isOpen={isOpen}
                        onPatch={onPatch}
                        onDelete={onDelete}
                    />
                )}
            </ul>
        </div>
    );
}

export default List;