import axios from 'axios';
import authHeader from './auth-header';

const USERAPI_URL = 'http://localhost:8088/api/user/';
const NEWAPI_URL = 'http://localhost:8088/api/news/';

class AddEditService {

  setPersonal(userSettings) {
        return axios.post(USERAPI_URL + 'settings', {
          email: userSettings.email,
          oldPassword: userSettings.oldPassword,
          newPassword: userSettings.newPassword,
          newPasswordCopy: userSettings.newPasswordCopy},
            {headers: authHeader()});
  }


  addNews(news) {
    return axios.post(NEWAPI_URL + 'addNews', {
      title: news.title,
      importance: news.importance,
      mainPart: news.mainPart,
      text:news.text,
      files:news.files
        },
        {headers: authHeader()});
  }

}

export default new AddEditService();
