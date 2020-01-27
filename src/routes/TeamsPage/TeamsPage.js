import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Section} from '../../components/Utils/Utils';
//import Teams from '../../components/Teams/Teams';
import ListTeams from '../../components/ListTeams/ListTeams';

class TeamsPage extends Component {
    render() {
        return (
            <div>
                <Section className="hero">
                    <header className="section-header">
                        <h1>Team's Page</h1>
                        <h2>Select a List to create some Teams</h2>
                    </header>
                </Section>
                <Section>
                    <ListTeams store={this.props.store} />
                </Section>
                <Section>
                    <div className="wrapper">
                        <p>If no lists are appearing, then create one at the <Link to="/lists">Lists Page</Link>.</p>
                    </div>
                </Section>
            </div>
        );
    }
}

export default TeamsPage;