<template>
    <div class="Login">
        <form name="form" class="form-signin jumbotron ncard" @submit.prevent="handleLogin">

            <h1 class="h3 mb-3 font-weight-normal">Необходим вход</h1>

            <input v-model="user.username" type="string" id="username" class="form-control" placeholder="Логин" required autofocus>
            <input v-model="user.password" type="password" id="inputPassword" class="form-control" placeholder="Пароль" required>
            <div class="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me"> Запомнить меня
                </label>
                <p style="color:red">{{message}}</p>
            </div>
            <button class="btn btn-lg btn-dark btn-block" type="submit">Войти</button>
        </form>

    </div>
</template>

<script>
    import User from '../models/user';
    import AuthService from '../services/auth.service'

    export default {
        name: 'Login',
        data() {
            return {
                user: new User('', ''),
                loading: false,
                message: ''
            };
        },
        computed: {
        loggedIn() {
                return this.$store.state.auth.status.loggedIn;
            }
        },
        created() {
            if (this.loggedIn) {
                this.$router.push('/choose/personal');
            }
        },
        methods: {
            handleLogin() {
                if (this.user.username && this.user.password) {
                AuthService.login(this.user).then(
                    response => {

                        // this.$router.push('/choose');
                        this.$router.go();
                        this.message = response.data.message;
                        this.successful = true;

                    },
                    error => {
                        this.message =
                            (error.response && error.response.data) ||
                            error.message ||
                            error.toString();
                        this.successful = false;
                    })}
                else{
                    this.message = "Не введен логин или пароль"
                }
                    //
                    //     this.$store.dispatch('auth/login', this.user).then(
                    //         () => {
                    //             this.$router.push('/personal');
                    //         },
                    //         error => {
                    //             this.loading = false;
                    //             this.message =
                    //                 (error.response && error.response.data) ||
                    //                 error.message ||
                    //                 error.toString();
                    //         }
                    //     );
                    // }
            }
        }
    };
</script>


<style scoped>

    h1 {
        padding-left: 10%;
    }

    /*#scrlbtn{*/
    /*разобраться как скрывать :с*/
    /*    display: none;*/
    /*    visibility: hidden;*/
    /*    background-color: red;*/
    /*}*/
    .ncard {
        padding-top: 2rem;
        padding-bottom: 2rem;
        max-width: 150px;
    }

    input {
        margin-bottom: 5px;
    }


</style>
