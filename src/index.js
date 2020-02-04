import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faTrashAlt, faPlus, faEdit, faList, faUserFriends} from '@fortawesome/free-solid-svg-icons';
import {ListProvider} from './contexts/ListContext';
import {ItemProvider} from './contexts/ItemContext';
import './index.css';
import App from './components/App/App';

library.add(
    fab,
    faTrashAlt,
    faPlus,
    faEdit,
    faList,
    faUserFriends
)

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