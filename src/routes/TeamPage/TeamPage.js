import React, {Component} from 'react';
import ListApiService from '../../services/ListApiService';
import ItemApiService from '../../services/ItemApiService';
import ItemContext from '../../contexts/ItemContext';
import {Section} from '../../components/Utils/Utils';
import BackAndAlt from '../../components/BackAndAlt/BackAndAlt';
import Team from '../../components/Team/Team';

class TeamPage extends Component {
    static defaultProps = {
        match: {params: {}}
    }

    static contextType = ItemContext;

    componentDidMount() {
        this.context.clearError();
        ListApiService.getList(this.props.match.params.list_id)
            .then(list => {
                ItemApiService.getListItems(list.id)
                    .then(items => {
                        this.context.setList(list)
                        this.context.setItems(items)
                    })
                    .catch(this.context.setError)
            })
            .catch(this.context.setError)
    }

    componentWillUnmount() {
        this.context.clearList()
    }

    render() {
        const {list, items, error} = this.context;

        return (
            <div>
                <Section className="hero">
                    <div className="wrapper">
                        <header className="section-header">
                            <h1>Create Teams Page</h1>
                            <h2>{list.list_name}</h2>
                        </header>
                        <div>
                            <p className="section-p">Select the desired number of teams and your list will be randomly and evenly divided.</p>
                        </div>
                    </div>
                    
                </Section>

                <Section>
                    <BackAndAlt 
                        backTo="/teams"
                        backWhat="Pick List"
                        altTo={`/list/${list.id}/list-items`}
                        altWhat="Edit Items"
                        isList={false}
                    />
                    <Team items={items} error={error} />
                </Section>

                <Section />
            </div>
        );
    }
}

export default TeamPage;