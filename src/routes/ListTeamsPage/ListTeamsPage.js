import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ListApiService from '../../services/ListApiService';
import ListContext from '../../contexts/ListContext';
import {Section} from '../../components/Utils/Utils';
import ListTeams from '../../components/ListTeams/ListTeams';

class ListTeamsPage extends Component {
    static contextType = ListContext;

    componentDidMount() {
        this.context.clearError();
        ListApiService.getUserLists()
            .then(lists => {
                this.context.setLists(lists)
            })
            .catch(this.context.setError)
    }

    componentWillUnmount() {
        this.context.clearLists()
    }

    render() {
        return (
            <div>
                <Section className="hero">
                    <header className="section-header">
                        <h1>Team's Page</h1>
                        <p>Select a list to create some teams.</p>
                    </header>
                </Section>
                <Section>
                    <ListTeams items={this.context.lists} />
                </Section>
                <Section>
                    <div className="wrapper">
                        <p>To create more lists, go to the <Link to="/lists">Lists Page</Link>.</p>
                    </div>
                </Section>
            </div>
        );
    }
}

export default ListTeamsPage;