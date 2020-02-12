import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import ListItem from '../components/ListItem/ListItem';

describe('Listitem component', () => {
    const listProp = {
        id: 2,
        list_name: "Turkey Bowl",
        user_id: 1
    }
    const itemProp = {
        id: 1,
        item_name: "Joe",
        list_id: 2
    }
    const link = "/list/2/list-items"

    it('renders list without errors', () => {
        const ul = document.createElement('ul');
        ReactDOM.render(
            <BrowserRouter>
                <ListItem item={listProp} link={link} />
            </BrowserRouter>,
            ul);
        ReactDOM.unmountComponentAtNode(ul);
    });

    it('renders item without errors', () => {
        const ul = document.createElement('ul');
        ReactDOM.render(
            <BrowserRouter>
                <ListItem item={itemProp} />
            </BrowserRouter>,
            ul);
        ReactDOM.unmountComponentAtNode(ul);
    });

    it('renders UI as expected', () => {
        const tree = renderer
            .create(
                <BrowserRouter>
                    <ListItem item={itemProp} />
                </BrowserRouter>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})