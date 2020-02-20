import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './ListTeams.css';

class ListTeams extends Component {
    render() {
        const {items} = this.props;
        return (
            <div className="wrapper list-component">
                {/* if no lists passed down via props p tag is rendered */}
                {(items.length === 0)
                    ? <p>You haven't created any lists yet. Go to the <Link to={`/lists`} className="no-lists-link">Lists Page</Link> to create a new list.</p>
                    : null}
                <ul className="named-list">
                    {items.map(item =>
                        <li key={item.id} className="list-team-item">
                            <Link to={`/team/list/${item.id}`} className="list-team-item-link">
                                {item.list_name}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default ListTeams;