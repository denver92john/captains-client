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
            )
    },
}

export default ItemApiService;