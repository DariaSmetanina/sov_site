<template>
  <div class="col-md-12">
    <div class="card card-container">
      <form name="form" @submit.prevent="handleRegister">
        <div v-if="!successful">

          <div class="form-group">
            <label for="username">Логин</label>
            <input
              v-model="user.username"
              type="text"
              class="form-control"
              name="username"
            /></div>

          <div class="form-group">
            <label for="name">Имя и фамилия</label>
            <input
              v-model="user.name"
              type="text"
              class="form-control"
              name="name"
            /></div>

          <div class="form-group">
            <label for="role">Роль</label>
            <input
              v-model="user.role"
              type="text"
              class="form-control"
              name="role"
            /></div>

          <div class="form-group">
            <label for="email">Электронный адрес</label>
            <input
              v-model="user.email"
              type="text"
              class="form-control"
              name="email"
            /></div>

          <div class="form-group">
            <label for="password">Пароль</label>
            <input
              v-model="user.password"
              type="password"
              class="form-control"
              name="password"
            /></div>

          <div class="form-group">
            <button class="btn btn-secondary btn-block">Зарегистрировать нового пользователя</button>
          </div>
        </div>
      </form>

      <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >{{message}}</div>
    </div>
  </div>
</template>

<script>
import User from '../models/user';

export default {
  name: 'Register',
  data() {
    return {
      user: new User('', '', '', '', ''),
      submitted: false,
      successful: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  methods: {
    handleRegister() {
      this.message = '';
      this.submitted = true;

          this.$store.dispatch('auth/register', this.user).then(
            data => {
              this.message = data.message;
              this.successful = true;
            },
            error => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
              this.successful = false;
            }
          );
    }
  }
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
}

</style>
