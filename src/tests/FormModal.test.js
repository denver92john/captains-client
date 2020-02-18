import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import FormModal from '../components/FormModal/FormModal';

describe('FormModal component', () => {
    it('renders without error', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <FormModal />
            </BrowserRouter>,
            div);
        ReactDOM.unmountComponentAtNode(div);
    })
})