import axios from 'axios';
import authHeader from './auth-header';

const NEWAPI_URL = 'http://localhost:8088/api/news/';
const ACCAPI_URL = 'http://localhost:8088/api/acc/';

class MainService {
  getNews(id) {
    return axios.get(NEWAPI_URL+'all?ID='+id, { headers: authHeader() });
  }

  getAccontList(){
      return axios.get(ACCAPI_URL+'account', { headers: authHeader() });
  }

  getNotificationsList(){
    return axios.get(ACCAPI_URL+'notification', { headers: authHeader() });
  }


}

export default new MainService();
