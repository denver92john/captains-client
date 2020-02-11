import React, {Component} from 'react';
import ListApiService from '../../services/ListApiService';
import ListContext from '../../contexts/ListContext';
import {Section} from '../../components/Utils/Utils';
import BackAndAlt from '../../components/BackAndAlt/BackAndAlt';
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
                    <div className="wrapper">
                        <header className="section-header">
                            <h1>Team's Page</h1>
                        </header>
                        <div>
                            <p className="section-p">Select a list to create your teams.</p>
                        </div>
                    </div>
                    
                </Section>
                <Section>
                    <BackAndAlt 
                        backTo="/dashboard"
                        backWhat="Dashboard"
                        altTo="/lists"
                        altWhat="Edit Lists"
                        isList={false}
                    />
                    <ListTeams items={this.context.lists} />
                </Section>
                <Section />
            </div>
        );
    }
}

export default ListTeamsPage;