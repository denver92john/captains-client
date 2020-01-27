import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Section} from '../../components/Utils/Utils';
import ListItems from '../../components/ListItems/ListItems';

const findList = (lists=[], list_id) => (
    lists.find(list => list.id === list_id)
)

class ListItemsPage extends Component {
    static defaultProps = {
        match: {params: {}}
    }

    render() {
        const {list_id} = this.props.match.params;
        const {list_items, lists} = this.props.store;
        const foundList = findList(lists, list_id)

        return (
            <div>
                <Section className="hero">
                    <header className="section-header">
                        <h1>List Item's Page</h1>
                        <h2>{foundList.list_name}</h2>
                    </header>
                </Section>
                <Section>
                    <ListItems list_id={list_id} list_items={list_items} />
                </Section>
                <Section>
                    <div className="wrapper">
                        <p>Have a list you want to create a set of teams with? Click <Link to="/teams">here</Link> to go to the Teams Page</p>
                    </div>
                </Section>
            </div>
        );
    }
}

export default ListItemsPage;