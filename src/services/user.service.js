import axios from 'axios';
import authHeader from './auth-header';

const API_URL_TEST = 'http://localhost:8088/api/test/';

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

  getPublicContent() {
    return axios.get(API_URL_TEST + 'all');
  }

  getClientBoard() {
    return axios.get(API_URL_TEST + 'client', { headers: authHeader() });
  }

}

export default new UserService();
