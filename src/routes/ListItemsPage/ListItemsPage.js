import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Section} from '../../components/Utils/Utils';
import List from '../../components/List/List';

const findList = (lists=[], list_id) => (
    lists.find(list => list.id === list_id)
)

const getItemsForList = (items=[], list_id) => (
    (!list_id)
        ? items
        : items.filter(item => item.list_id === list_id)
)

class ListItemsPage extends Component {
    static defaultProps = {
        match: {params: {}}
    }

    render() {
        const {list_id} = this.props.match.params;
        const {list_items, lists} = this.props.store;
        const foundList = findList(lists, list_id)
        const itemsForList = getItemsForList(list_items, list_id);

        return (
            <div>
                <Section className="hero">
                    <header className="section-header">
                        <h1>List Item's Page</h1>
                        <h2>{foundList.list_name}</h2>
                        <p>To add a name to the list, type a name in the input and click the 'Create' button. To edit the name click the edit icon. To delete the name from the list click the delete icon.</p>
                    </header>
                </Section>
                <Section>
                    {<List items={itemsForList}/>}
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