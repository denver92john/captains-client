import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import FormAuth from '../components/FormAuth/FormAuth';

describe('FormAuth component', () => {
    it('renders without error', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <FormAuth />
            </BrowserRouter>,
            div);
        ReactDOM.unmountComponentAtNode(div);
    })
})