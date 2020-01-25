import React, {Component} from 'react';
import {Section} from '../../components/Utils/Utils';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Section className="hero">
                    <header className="section-header">
                        <h1>Landing Page</h1>
                    </header>
                    <div className="section-div">
                        This app (Captains) will allow you to create a list of names which you can then use to create a randomized set number of teams.
                    </div>
                </Section>
                <Section>
                    <div className="wrapper">
                        <header className="section-header">
                            <h2>Create Player List</h2>
                        </header>
                        <div className="section-div">
                            Create a list of names by adding individual names to a list. You can then edit the person's name or delete them from the list.
                        </div>
                    </div>
                </Section>
                <Section>
                    <div className="wrapper">
                        <header className="section-header">
                            <h2>Create Randomized Teams</h2>
                        </header>
                        <div className="section-div">
                            After a list has been created you can then create a set number of teams with a randomized order of said list.
                        </div>
                    </div>
                </Section>
                <Section>
                    <div className="wrapper">
                        <header className="section-header">
                            <h2>User Demo Account</h2>
                        </header>
                    </div>
                </Section>
            </div>
        );
    }
}

export default LandingPage;