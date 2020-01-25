import React, {Component} from 'react';
import {Section} from '../../components/Utils/Utils';
import ListItems from '../../components/ListItems/ListItems';

class ListItemsPage extends Component {
    render() {
        return (
            <div>
                <Section className="hero">
                    <header className="section-header">
                        <h1>List Item's Page</h1>
                    </header>
                </Section>
                <Section>
                    <ListItems />
                </Section>
            </div>
        );
    }
}

export default ListItemsPage;