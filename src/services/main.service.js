import axios from 'axios';
import authHeader from './auth-header';

const USERAPI_URL = 'http://localhost:8088/api/user/';
const NEWAPI_URL = 'http://localhost:8088/api/news/';
const ACCAPI_URL = 'http://localhost:8088/api/accounts/';
const NOTAPI_URL = 'http://localhost:8088/api/notifications/';

class MainService {
  getNews(id) {
    return axios.get(NEWAPI_URL+'one/?ID='+id, { headers: authHeader() });
  }

  getThreeNews() {
    return axios.get(NEWAPI_URL+'three', { headers: authHeader() });
  }

  getAllNews() {
    return axios.get(NEWAPI_URL, { headers: authHeader() });
  }


  getAccontList(){
      return axios.get(ACCAPI_URL+'account', { headers: authHeader() });
  }

  getFourAcconts(inn){
      return axios.get(ACCAPI_URL+'personal?inn='+inn, { headers: authHeader() });
  }

  getNotificationsList(){
    return axios.get(NOTAPI_URL, { headers: authHeader() });
  }

  getTwoNotifications(inn){
    return axios.get(NOTAPI_URL+'personal?inn='+inn, { headers: authHeader() });
  }

  getOrganizations(){
    return axios.get(ACCAPI_URL+'organizations', { headers: authHeader() });
  }

  getOrganizationn(inn){
    return axios.get(USERAPI_URL+'organization?inn='+inn, { headers: authHeader() });
  }





}

export default new MainService();
