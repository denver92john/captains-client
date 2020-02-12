import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Team from '../components/Team/Team';

describe('Team component', () => {
    const teamProp = [
        {
            id: 5,
            item_name: "Cormac",
            list_id: 2
        },
        {
            id: 6,
            item_name: "Ken",
            list_id: 2
        }
    ];

    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <Team items={teamProp} />
            </BrowserRouter>,
            div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders UI as expected', () => {
        const tree = renderer
            .create(<BrowserRouter>
                <Team items={teamProp} />
            </BrowserRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})