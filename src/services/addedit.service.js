import axios from 'axios';
import authHeader from './auth-header';

const USERAPI_URL = 'http://localhost:8088/api/user/';

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
