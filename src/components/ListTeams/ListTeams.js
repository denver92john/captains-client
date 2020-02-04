import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ListTeams extends Component {
    render() {
        const {items} = this.props;
        return (
            <div className="wrapper list-component">
                {(items.length === 0)
                    ? <p>You haven't created any lists yet. Go to the <Link to={`/lists`}>Lists Page</Link> to create a new list.</p>
                    : null}
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