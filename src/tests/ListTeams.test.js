import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import ListTeams from '../components/ListTeams/ListTeams';

describe('ListTeams component', () => {
    const itemsProp = [
        {
            id: 1,
            list_name: 'Joe',
            user_id: 1
        },
        {
            id: 2,
            list_name: 'Green',
            user_id: 1
        }
    ];

    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <ListTeams items={itemsProp} />
            </BrowserRouter>,
            div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders UI as expected', () => {
        const tree = renderer
            .create(<BrowserRouter>
                    <ListTeams items={itemsProp} />
                </BrowserRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})