import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Section} from '../../components/Utils/Utils';
import List from '../../components/List/List';

class ListsPage extends Component {
    render() {
        return (
            <div>
                <Section className="hero">
                    <header className="section-header">
                        <h1>List's Page</h1>
                        <p>Create a list by typing a name and then clicking 'Create'. To edit the names in the list click on the list name.</p>
                        <p>To edit the list name, click the edit icon. And to delete the list entirely, click the delete icon.</p>
                    </header>
                </Section>
                <Section>
                    <List items={this.props.store.lists}></List>
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

export default ListsPage;