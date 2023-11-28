import axios from 'axios';

export default class AuthController {

    async login(email, password){
        const response = await axios.post('http://34.101.122.152/login', { email, password})
        if(response.status === 200){
            return response.body;
        }
        else {
            throw new Error('Login failed with unexpected error')
        }
    }
}