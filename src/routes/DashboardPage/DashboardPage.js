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