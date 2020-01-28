import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//import '../List/List.css';

class ListTeams extends Component {
    render() {
        const {lists} = this.props.store;
        return (
            <div className="wrapper list-component">
                <ul className="named-list">
                    {lists.map(list =>
                        <Link to={`/team/list/${list.id}`} key={list.id} className="named-list-item">
                       <li>{list.list_name}</li> 
                    </Link>
                    )}
                </ul>
            </div>
        );
    }
}

export default ListTeams;