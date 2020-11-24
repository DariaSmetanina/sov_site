import axios from 'axios';
import authHeader from './auth-header';

const API_UPL = 'http://localhost:8088/users/';

class UserService {

  updateUserInfo(username, name, email) {

    return axios.patch(API_UPL + 'editprofile/' + username,
        {
            name : name,
            email : email
        },
        { headers: authHeader() })
        .then(response => {
            return response;
        });
  }







}

export default new UserService();
