import React, {Component} from 'react';
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
                    <List></List>
                </Section>
            </div>
        );
    }
}

export default ListsPage;