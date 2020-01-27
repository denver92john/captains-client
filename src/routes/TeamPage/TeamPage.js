import React, {Component} from 'react';
import {Section} from '../../components/Utils/Utils';
import Team from '../../components/Team/Team';

const findList = (lists=[], list_id) => (
    lists.find(list => list.id === list_id)
)


const getItemsForList = (items=[], list_id) => (
    (!list_id)
        ? items
        : items.filter(item => item.list_id === list_id)
)

class TeamPage extends Component {
    static defaultProps = {
        match: {params: {}}
    }

    render() {
        const {list_id} = this.props.match.params;
        const {list_items, lists} = this.props.store;
        const foundList = findList(lists, list_id);
        const listItems = getItemsForList(list_items, list_id);

        return (
            <div>
                <Section className="hero">
                    <header className="section-header">
                        <h1>Create Team Page</h1>
                        <h2>{foundList.list_name}</h2>
                    </header>
                </Section>
                <Section>
                    <Team list_id={list_id} list_items={listItems} />
                </Section>
            </div>
        );
    }
}

export default TeamPage;