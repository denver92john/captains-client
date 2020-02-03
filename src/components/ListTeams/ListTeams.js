import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//import '../List/List.css';

class ListTeams extends Component {
    render() {
        //const {lists} = this.props.store;
        const {items} = this.props;
        return (
            <div className="wrapper list-component">
                <ul className="named-list">
                    {items.map(item =>
                        <Link to={`/team/list/${item.id}`} key={item.id} className="named-list-item">
                            <li>
                                {item.list_name}
                            </li>
                        </Link>
                    )}
                </ul>
            </div>
        );
    }
}

export default ListTeams;

/*
{lists.map(list =>
    <Link to={`/team/list/${list.id}`} key={list.id} className="named-list-item">
        <li>
            {list.list_name}
        </li> 
    </Link>
)}
*/