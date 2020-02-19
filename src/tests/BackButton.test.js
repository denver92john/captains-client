import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import BackButton from '../components/BackButton/BackButton';

describe('BackButton component', () => {
    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <BackButton backTo={'/dashboard'} backWhat={'Dashboard'} />
            </BrowserRouter>,
            div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders UI as expected', () => {
        const tree = renderer
            .create(<BrowserRouter>
                    <BackButton backTo={'/dashboard'} backWhat={'Dashboard'} />
                </BrowserRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})