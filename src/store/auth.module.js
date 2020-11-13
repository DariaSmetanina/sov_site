import AuthService from '../services/auth.service';
import UserService from '../services/user.service';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

//import User from '../models/user';

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then(
        user => {
          commit('loginSuccess', user);
          return Promise.resolve(user);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    register({ commit }, user) {
      return AuthService.register(user).then(
        response => {
          commit('registerSuccess');
          return Promise.resolve(response.data);
        },
        error => {
          commit('registerFailure');
          return Promise.reject(error);
        }
      );
    },

    updateUser({ commit }, [newName, newEmail]) {
      return UserService.updateUserInfo(this.state.auth.user.username, newName, newEmail).then(
          response => {
            commit('editInfoSuccess', [newName, newEmail]);
            return Promise.resolve(response);
          },
          error => {
            return Promise.reject(error);
          }
      );
    },
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    },
    editInfoSuccess(state, [newName, newEmail]) {
      newName = newName ? newName : state.user.name;
      newEmail = newEmail ? newEmail : state.user.email;
      localStorage.setItem('user',  JSON.stringify({
        token: state.user.token,
        type: state.user.type,
        id : state.user.id,
        username: state.user.username,
        roles: state.user.roles,
        name: newName,
        email: newEmail,
        rate: state.user.rate,
        status: state.user.status
      }));
      state.user.name = newName;
      state.user.email = newEmail;
    }



  }
};
