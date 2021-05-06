import { API_URL_PREFIX } from '../constants';

const makeRequest = async (endpoint, method, additional) => {
    return fetch(
        `${API_URL_PREFIX}${endpoint}`,
        {
            method,
            mode: 'cors',
            ...(additional !== undefined && { ...additional }),
        }
    ).then(response => {
        if (response.ok) {
            return response.json().catch(error => {
                return {};
            });
        }
        if (typeof response.text === 'function') {
            return response.text().then(text => {
                return {
                    'error': text,
                    'statusCode': response.status,
                }
            });
        }
        return {
            'error': response.statusText,
            'statusCode': response.status,
        }
    }).then(response => {
        return response;
    }).catch(error => {
        console.log(error);
    });
}

export default makeRequest;
