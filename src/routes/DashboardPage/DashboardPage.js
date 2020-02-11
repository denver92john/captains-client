import React, {Component} from 'react';
import {Section} from '../../components/Utils/Utils';
import Dash from '../../components/Dash/Dash';

class DashboardPage extends Component {
    render() {
        return (
            <div>
                <Section className="hero">
                    <header className="section-header">
                        <h1>{this.props.user.username}</h1>
                    </header>
                    <div>
                        <p>Select the 'Lists' icon to add, edit, and delete lists and list items.</p>
                        <p>Select the 'Teams' icon to start creating your teams.</p>
                    </div>
                </Section>
                <Section>
                    <Dash />
                </Section>
                <Section />
            </div>
        );
    }
}

export default DashboardPage;