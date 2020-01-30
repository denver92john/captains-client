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
            )
    }
}

export default ListApiService;