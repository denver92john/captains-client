import React, {Component} from 'react';
import FormList from '../FormList/FormList';
import ListItem from '../ListItem/ListItem';
import './List.css';

class List extends Component {
    render() {
        const {items, onPost, onPatch, onDelete} = this.props;
        return (
            <div className="wrapper list-component">
                <FormList onPost={onPost} />
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
}

export default List;