import axios from 'axios';
import  {message} from 'antd'
export const MethodType = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH:'PATCH'
};

/**
 * 模块说明:有api_token的请求
 */
export const request = (api, method = MethodType.GET, params = {}, config = {}) => {
    const apiToken = '';
    const data = (method === 'GET') ? 'params' : 'data';
    let headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiToken}`,
    };
    if (config.headers) {
        headers = {
            ...headers,
            ...config.headers
        }
    }
    return new Promise((resolve, reject) => {
        axios({
            url: api,
            method,
            [data]: params,
            headers,
        }).then(resolve)
            .catch(error => {
                console.dir(error);
                message.error(typeof error.response.data === 'string' ? error.response.data : JSON.stringify(error.response.data));
                reject(error);
            });
    });
};
//
// export function fetch(url,data={},type='GET'){
//     if(type === 'GET') {
//         return axios.get(url, {
//             params: data
//         })
//     }else {
//         return axios.post(url,data)
//     }
//     callback()
// }
