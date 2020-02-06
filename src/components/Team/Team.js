import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import './Team.css';

function createNamesArray(array) {
    const nameArray = [];
    array.map(item => nameArray.push(` ${item.item_name}`))
    return nameArray;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createTeams(arr, numberOfTeams) {
    let rest = arr.length % numberOfTeams,
        restUsed = rest,
        partLength = Math.floor(arr.length / numberOfTeams),
        result = [];

    for (let i = 0; i < arr.length; i += partLength) {
        let end = partLength + i,
            add = false;

        if (rest !== 0 && restUsed) {
            end++;
            restUsed--;
            add = true;
        }

        result.push(arr.slice(i, end));

        if (add) {
            i++;
        }
    }
    return result;
}

class Team extends Component {
    state = {
        names: [],
        teams: []
    }

    // do i need to use shouldComponentUpdate()??
    componentDidUpdate(oldProps) {
        if(oldProps.items !== this.props.items) {
            const listNames = createNamesArray(this.props.items)
            this.setState({names: listNames})
        }
    }

    handleSubmit = ev => {
        ev.preventDefault();
        const {number_teams} = ev.target;
        const shuffledList = shuffleArray(this.state.names);
        const newTeams = createTeams(shuffledList, number_teams.value);
        this.setState({teams: newTeams})
    }

    renderForm() {
        return (
            <form onSubmit={this.handleSubmit} className="team-form">
                <div className="team-form-section">
                    <label htmlFor="number-teams-input" className="team-form-label">Number of teams (2-10): </label>
                    <input 
                        type="number"
                        id="number-teams-input"
                        name="number_teams"
                        className="team-form-input"
                        min="2"
                        max="10"
                    />
                </div>

                <button type="submit" className="team-form-button">Create Teams</button>
            </form>
        );
    }

    renderTeamList() {
        const {teams} = this.state;
        return (
            <>
                {/*(teams.length === 0)
                    ? <p>Add some players to this list before you create any teams.</p>
                    : null*/}
                <ul className="team-list">
                    {teams.map((team, index) =>
                        <li key={index} className="team-item">
                            <p className="team-p"><span className="team-number">Team {index + 1}: </span>{team.toString()}</p>
                        </li>
                    )}
                </ul>
            </>
        );
    }

    render() {
        const {error} = this.props;
        let content;
        if(error) {
            content = <p>There wasn an error</p>
        } else {
            content = 
                <div className="wrapper team">
                    {this.renderForm()}
                    {this.renderTeamList()}
                </div>
        }

        return (
            <>{content}</>
        );
    }
}

export default Team;