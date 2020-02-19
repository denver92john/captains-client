import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import AltButton from '../components/AltButton/AltButton';

describe('AltButton component', () => {
    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <AltButton altTo={'/teams'} altWhat={'Pick List'} isList={true} />
            </BrowserRouter>,
            div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it('renders UI as expected', () => {
        const tree = renderer
            .create(<BrowserRouter>
                    <AltButton altTo={'/teams'} altWhat={'Pick List'} isList={true} />
                </BrowserRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})