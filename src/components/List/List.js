import React, {Component} from 'react';
import FormList from '../FormList/FormList';
import ListItem from '../ListItem/ListItem';
import './List.css';

/*
<ListItem key={item.id} item_name={item.item_name} link={null} />
<ListItem key={item.id} item_name={item.list_name} link={`/list/${item.id}/list-items`} />
*/

class List extends Component {
    render() {
        const {items, onPost} = this.props;
        return (
            <div className="wrapper list-component">
                <FormList onPost={onPost} />
                <ul className="named-list">
                    {items.map(item =>
                        <ListItem 
                            key={item.id}
                            //item_name={item.list_name}
                            item={item}
                            link={`/list/${item.id}/list-items`}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

export default List;