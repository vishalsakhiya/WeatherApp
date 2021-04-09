import axios from 'axios';
import { showTokenExpireError } from '../helper/appHelper';

export function makeRequest(url, type = 'get', data = {}, header = {}) {
    let reqHeader;
    // if (header.Accept && header.ContentType) {
    //     reqHeader = Object.assign({}, {"Accept": header.Accept, "Content-Type": header.ContentType});
    // } else {
    //     reqHeader = Object.assign(header, {"Accept": "application/json", "Content-Type": "application/json"});
    // }
    if (type === 'get') {
        return axios.get(url, { headers: reqHeader, withCredentials: true })
            .then((response) => {
                return Promise.resolve(response)
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    } else if (type === 'post') {
        return axios.post(url, data, { headers: header ,  withCredentials: true})
            .then((response) => {
                if (response.data.status === '105') {
                    return showTokenExpireError({ message: response.data.Message });
                }
                return Promise.resolve(response)
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    } else if (type === 'delete') {
        return axios.delete(url, { headers: header ,  withCredentials: true})
            .then((response) => {
                return Promise.resolve(response);
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    } else if (type === 'patch') {
        return axios.patch(url, data, { headers: header ,  withCredentials: true})
            .then((response) => {
                return Promise.resolve(response)
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    } else if (type === 'profile') {
        return fetch(url,{method: 'post',headers: header,body: data,
        }).then((responsed) => responsed.json())
        .then((response) => {
            return Promise.resolve(response)
        })
        .catch((err) => {
            return Promise.reject(err);
        })
    }
}