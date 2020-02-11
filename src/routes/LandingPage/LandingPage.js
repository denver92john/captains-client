import React, {Component} from 'react';
import {Section} from '../../components/Utils/Utils';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Section className="hero">
                    <div className="wrapper">
                        <header className="section-header">
                            <h1>Captains</h1>
                        </header>
                        <div className="section-div">
                            <p className="section-p">Have you ever organized a party or another type of event where everyone is supposed to split up into groups but no one wants to step up and be a team captain to pick teams?</p>
                            <p className="section-p">Captains fills that void by allowing you to create a list of everyones names, and randomly selects and creates the teams for you.</p>
                        </div>
                    </div>
                </Section>
                <Section>
                    <div className="wrapper">
                        <header className="section-header">
                            <h2>Lists</h2>
                        </header>
                        <div className="section-div">
                            <p className="section-p">Navigate to the List's Page where you can add, edit, or delete your lists.</p>
                            <p className="section-p">To create a list, type the name of the list into the input box and click the create button.</p>
                            <p className="section-p">To add items or names to your list, click the name of the list which will then take you to that list's items page.</p>
                            <p className="section-p">On the list's items page, you can add, edit, and delete names from that list.</p>
                        </div>
                    </div>
                </Section>
                <Section>
                    <div className="wrapper">
                        <header className="section-header">
                            <h2>Teams</h2>
                        </header>
                        <div className="section-div">
                            <p className="section-p">Once you have created a list and added all of your names/items to that list, go to the Team's List page and select the desired list to start creating teams.</p>
                            <p className="section-p">You will know you are on the Team's List page when there is no option to add, edit, or delete any of your lists.</p>
                            <p className="section-p">Once you have selected the list you want to create teams with, you will be taken to the Teams page.</p>
                            <p className="section-p">From there, pick the number of desired teams and all of the names in that list will be randomly divided to create your teams.</p>
                        </div>
                    </div>
                </Section>
                <Section>
                    <div className="wrapper">
                        <header className="section-header">
                            <h2>User Demo Account</h2>
                        </header>
                        <div>
                            <p className="section-p">Username: JDenver</p>
                            <p className="section-p">Password: JDenver1!</p>
                        </div>
                    </div>
                </Section>
            </div>
        );
    }
}

export default LandingPage;