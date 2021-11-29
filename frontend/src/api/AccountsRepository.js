import axios from 'axios';
import { hostname } from './config';

export class AccountsRepository {



    getUsers() {
        return new Promise((resolve, reject) => {
            axios.get(hostname + '/users')
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    }

    
    getUser(userID) {
        return new Promise((resolve, reject) => {
            axios.get(hostname + '/users/' + userID)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    }

    register(account) {
        return new Promise((resolve, reject) => {
            axios.post(hostname + '/users', account )
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    }

    // look at SO tab to know how to check if data exists in axios response.
    //

    login(username, userPassword) {
        return new Promise((resolve, reject) => {
            axios.post(hostname + '/login',  username, userPassword )
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


}