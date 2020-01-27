import React, {Component} from 'react';
import {Form, Input, Button} from '../Utils/Utils';
import './Team.css';

function createNamesArray(array) {
    const nameArray = [];
    array.map(item => nameArray.push(item.item_name))
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


/*
const shuffleArray = array => (
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
)
*/

class Team extends Component {
    render() {
        const {list_items} = this.props;
        const names = createNamesArray(list_items);
        const newList = shuffleArray(names);
        const teams = createTeams(newList, 2);

        return (
            <div className="wrapper teams-component">
                <Form>
                    <div className="form-section">
                        <label htmlFor="number-teams-input">Number of teams (2-10): </label>
                        <Input 
                            type="number"
                            id="number-teams-input"
                            name="number-teams"
                            min="2"
                            max="10"
                            step="2"
                            //value="2"
                        />
                    </div>

                    <div className="form-buttons">
                        <Button type="submit">Create Teams</Button>
                    </div>
                </Form>

                <ul className="named-list">
                    {teams.map((team, index) =>
                        <li key={index + 1}>
                            <p>Team {index + 1}: {team.toString()}</p>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Team;