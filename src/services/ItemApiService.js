import TokenService from './TokenService';
import config from '../config';

const ItemApiService = {
    getListItems(listId) {
        return fetch(`${config.API_ENDPOINT}/item/list/${listId}`, {
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
    postItem(newItem) {
        return fetch(`${config.API_ENDPOINT}/item`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(newItem)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            );
    },
    deleteItem(itemId) {
        return fetch(`${config.API_ENDPOINT}/item/${itemId}`, {
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
    patchItem(patchedItem, itemId) {
        return fetch(`${config.API_ENDPOINT}/item/${itemId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(patchedItem)
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res
            );
    }
}

export default ItemApiService;