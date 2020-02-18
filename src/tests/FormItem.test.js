import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import FormItem from '../components/FormItem/FormItem';

describe('FormItem component', () => {
    it('renders without error', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <FormItem />
            </BrowserRouter>,
            div);
        ReactDOM.unmountComponentAtNode(div);
    });
})