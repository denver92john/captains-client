import React, {Component} from 'react';
import {Section} from '../../components/Utils/Utils';
import Dash from '../../components/Dash/Dash';

class DashboardPage extends Component {
    render() {
        return (
            <div>
                <Section className="hero">
                    <header className="section-header">
                        <h1>Dashboard Page</h1>
                        <p>{this.props.user.username}</p>
                        <p>Select the 'Lists' icon to go to the Lists page.</p>
                        <p>Select the 'Teams' icon to go to the Teams page.</p>
                    </header>
                </Section>
                <Section>
                    <Dash />
                </Section>
            </div>
        );
    }
}

export default DashboardPage;