import TokenService from './TokenService';
import config from '../config';

const ListApiService = {
    getUserLists() {
        return fetch(`${config.API_ENDPOINT}/list`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))    
                    : res.json()
            );
    },
    postList(newList) {
        return fetch(`${config.API_ENDPOINT}/list`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(newList)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))    
                    : res.json()
            );
    },
    getList(listId) {
        return fetch(`${config.API_ENDPOINT}/list/${listId}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            );
    },
    deleteList(listId) {
        return fetch(`${config.API_ENDPOINT}/list/${listId}`, {
            method: 'DELETE',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res
            );
    },
    patchList(patchedList, listId) {
        return fetch(`${config.API_ENDPOINT}/list/${listId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(patchedList)
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res
            );
    }
}

export default ListApiService;