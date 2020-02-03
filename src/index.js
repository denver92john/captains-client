import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {ListProvider} from './contexts/ListContext';
import {ItemProvider} from './contexts/ItemContext';
import './index.css';
import App from './components/App/App';

ReactDOM.render(
    <BrowserRouter>
        <ListProvider>
            <ItemProvider>
                <App />
            </ItemProvider>
        </ListProvider>
    </BrowserRouter>, 
    document.getElementById('root')
);