import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import FormList from '../components/FormList/FormList';

describe('FormList component', () => {
    it('renders without error', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <FormList />
            </BrowserRouter>,
            div);
        ReactDOM.unmountComponentAtNode(div);
    })
})