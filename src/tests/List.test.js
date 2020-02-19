import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import List from '../components/List/List';

describe('List component', () => {
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
    ]

    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <List items={itemsProp} />
            </BrowserRouter>,
            div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders UI as expected', () => {
        const tree = renderer
            .create(<BrowserRouter>
                    <List items={itemsProp} />
                </BrowserRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})