<template>
  <main role="main" class="container">

  <div class="jumbotron ncard">
      <form name="form" @submit.prevent="handleRegister">
        <div v-if="!successful">
          <h1>Зарегестрировать нового пользователя</h1>

          <div class="form-row">
          <div class="form-group form-col">
            <label for="username">Логин</label>
            <input
              v-model="user.username"
              type="text"
              class="form-control"
              name="username"
            /></div>

            <div class="form-group form-col">
              <label for="password">Пароль</label>
              <input
                      v-model="user.password"
                      type="password"
                      class="form-control"
                      name="password"
              /></div>

          </div>



          <div class="form-row">
          <div class="form-group form-col">
            <label for="role">Роль</label>
            <select v-model="user.role" name="role">
              <option selected value="client">Клиент</option>
              <option value="accountant">Бухгалтер</option>
              <option value="admin">Администратор</option>
            </select>
          </div>

          <div class="form-group form-col">
            <label for="email">Электронный адрес</label>
            <input
              v-model="user.email"
              type="text"
              class="form-control"
              name="email"
            /></div>
          </div>

          <div class="form-group">
            <label for="name">Имя и фамилия</label>
            <input
                    v-model="user.name"
                    type="text"
                    class="form-control"
                    name="name"
            /></div>

          <div class="form-group">
            <button class="btn btn-block btn-dark">Зарегистрировать нового пользователя</button>
          </div>
        </div>
      </form>

      <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >{{message}}</div>
    </div>
  </main>
</template>

<script>
import User from '../../models/user';

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

.ncard {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

  select{
    width: 100%;
    height: 36px;
    border: 1px solid #ced4da;
    border-radius: .25rem;
  }

  .form-col{
    width: 50%;
    padding: .5rem;
  }

  button{
    margin-top: 2rem;
  }


</style>
