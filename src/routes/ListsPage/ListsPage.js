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
                    </header>
                </Section>
                <Section>
                    <List store={this.props.store}></List>
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