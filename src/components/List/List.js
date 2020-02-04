import React from 'react';
import FormList from '../FormList/FormList';
import ListItem from '../ListItem/ListItem';
import './List.css';

function List(props) {
    const {items, onPost, onPatch, onDelete} = props;
    return (
        <div className="wrapper list-component">
            <FormList onPost={onPost} />
            {(items.length === 0)
                ? <p>You haven't added anything yet.</p>
                : null}
            <ul className="named-list">
                {items.map(item =>
                    <ListItem 
                        key={item.id}
                        item={item}
                        link={`/list/${item.id}/list-items`}
                        onPatch={onPatch}
                        onDelete={onDelete}
                    />
                )}
            </ul>
        </div>
    );
}

export default List;