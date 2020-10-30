import axios from 'axios';
import authHeader from './auth-header';

const NEWAPI_URL = 'http://localhost:8088/api/news/';
const ACCAPI_URL = 'http://localhost:8088/api/acc/';

class MainService {
  getNews(id) {
    return axios.get(NEWAPI_URL+'all?ID='+id, { headers: authHeader() });
  }

  getThreeNews() {
    return axios.get(NEWAPI_URL+'three', { headers: authHeader() });
  }

  getAccontList(){
      return axios.get(ACCAPI_URL+'account', { headers: authHeader() });
  }

  getFourAcconts(inn){
      return axios.get(ACCAPI_URL+'personalA?inn='+inn, { headers: authHeader() });
  }

  getNotificationsList(){
    return axios.get(ACCAPI_URL+'notification', { headers: authHeader() });
  }

  getTwoNotifications(inn){
    return axios.get(ACCAPI_URL+'personalN?inn='+inn, { headers: authHeader() });
  }

  getOrganizations(){
    return axios.get(ACCAPI_URL+'organizations', { headers: authHeader() });
  }



}

export default new MainService();
