import axios from 'axios';
import { hostname } from './config';

export class AccountsRepository {



    getUsers() {
        return new Promise((resolve, reject) => {
            axios.get(hostname + '/api/users')
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    }

    
    getUser(userID) {
        return new Promise((resolve, reject) => {
            axios.get(hostname + '/api/users/' + userID)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    }

    register(account) {
        return new Promise((resolve, reject) => {
            axios.post(hostname + '/api/users', account )
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    }

    login(username, userPassword) {
        return new Promise((resolve, reject) => {
            axios.post(hostname + '/api/login',  username, userPassword )
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    }

    getOrders() {
        return new Promise((resolve, reject) => {
            axios.get(hostname + '/api/getOrders')
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject(x);
            })
        });
    }

    // updateUser(id, profile) {}
    updateUser(userID, account) {
        return new Promise((resolve, reject) => {
            axios.put(hostname + '/api/users/' + userID, { ...account })
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    }


}