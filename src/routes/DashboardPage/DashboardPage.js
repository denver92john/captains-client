import React, {Component} from 'react';
import {Section} from '../../components/Utils/Utils';
import Dash from '../../components/Dash/Dash';

class DashboardPage extends Component {
    render() {
        return (
            <div>
                <Section className="hero">
                    <header className="section-header">
                        <h1>Dashboard</h1>
                    </header>
                    <div>
                        <p className="section-p">Select the 'Lists' icon to modify your lists.</p>
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