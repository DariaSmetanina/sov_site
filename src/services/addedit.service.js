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

  deleteOrgFromUser(inn){
    return axios.delete(USERAPI_URL + 'settings/?inn='+inn,
        {headers: authHeader()});
  }

  addNews(news) {
    return axios.post(NEWAPI_URL , {
      title: news.title,
      importance: news.importance,
      mainPart: news.mainPart,
      text:news.text,
      files:news.files
        },
        {headers: authHeader()});
  }

  addOrgs(organization) {
    return axios.post(USERAPI_URL + 'addOrg', {
          name: organization.name,
          inn: organization.inn,
          director: organization.director
        },
        {headers: authHeader()});
  }
  addOrgToUser(addOrgToUser) {
    return axios.post(USERAPI_URL + 'addOrgToUser', {
          username: addOrgToUser.username,
          inn: addOrgToUser.inn
        },
        {headers: authHeader()});
  }


}

export default new AddEditService();
