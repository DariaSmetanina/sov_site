<template>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4" id="top">
            <a class="navbar-brand" href="/">Бухгалтерский кооператив</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse" >
                <ul class="navbar-nav mr-auto">
                    <div v-if="!currentUser">
                    <li class="nav-item active">
                        <a class="nav-link" href="/#news"> Новости <span class="sr-only">(current)</span></a>
                    </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/#about"> О нас <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/#calc"> Тарифы <span class="sr-only">(current)</span></a>
                        </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/#footer"> Контакты <span class="sr-only">(current)</span></a>
                    </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/message"> Связаться <span class="sr-only">(current)</span></a>
                        </li>
                    </div>
                    <li v-if="isRegistred" class="nav-item">
                        <a class="nav-link active" href="/choose/personal">Личный кабинет</a>
                    </li>
                    <li v-if="isRegistred" class="nav-item">
                        <a class="nav-link active" href="/settings">Настройки</a>
                    </li>
                    <li v-if="isAccounter" class="nav-item">
                        <a class="nav-link active" href="/createnews">Добавить новость</a>
                    </li>
                    <li v-if="isAccounter" class="nav-item">
                        <a class="nav-link active" href="/createNotification">Отправить уведомления</a>
                    </li>
                    <li v-if="isClient" class="nav-item">
                        <a class="nav-link active" href="/message">Отправить письмо</a>
                    </li>
                    <li v-if="isAdmin" class="nav-item">
                        <a class="nav-link active" href="/register">Зарегестрировать пользователя</a>
                    </li>
                    <li v-if="isAdmin" class="nav-item">
                        <a class="nav-link active" href="/addOrganization">Добавить организацию</a>
                    </li>
                    <li v-if="isAdmin" class="nav-item">
                        <a class="nav-link active" href="/addOrganizationToUser">Дать доступ</a>
                    </li>
                    <div v-if="!currentUser" class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link to="/login" class="nav-link">
                                <font-awesome-icon icon="sign-in-alt"/>
                                Вход
                            </router-link>
                        </li>
                    </div>

                    <div v-if="currentUser" class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link to="/choose" class="nav-link">
                                <font-awesome-icon icon="user"/>
                                {{ currentUser.username }}
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href @click.prevent="logOut">
                                <font-awesome-icon icon="sign-out-alt"/>
                                Выход
                            </a>
                        </li>
                    </div>
                </ul>
            </div>

        </nav>
        <div>
            <router-view/>
        </div>
        <div class="scrollup" id="scrlbtn">
            <a class="scrollup" href="#top">
                <font-awesome-icon icon="chevron-up"/>
            </a>
        </div>
        <footer class="footer" style=" overflow-x: auto;">
            <table class="table" id="footer">
                <tr>
                    <td>
                        <font-awesome-icon icon="phone"/>
                        +7(999)635-98-30
                        <br>
                        <font-awesome-icon icon="phone"/>
                        +7(922)651-73-12
                    </td>
                    <td>За качество своей работы мы отвечаем в строгом соответствии с договором и законодательством
                        Российской Федерации.
                    </td>
                    <td>
                        <font-awesome-icon icon="envelope"/>
                        emailOrg@gmail.com
                        <br>
                        <font-awesome-icon icon="envelope"/>
                        emailOrg@mail.ru
                    </td>
                </tr>
            </table>
        </footer>

    </div>
</template>

<script>
    export default {
        computed: {
            currentUser() {
                return this.$store.state.auth.user;
            },
            isRegistred() {
                if (this.currentUser && this.currentUser.roles) {
                    return this.currentUser.roles.includes('accountant')||this.currentUser.roles.includes('client');
                }
                return false;
            },
            isAccounter() {
                if (this.currentUser && this.currentUser.roles) {
                    return this.currentUser.roles.includes('accountant');
                }

                return false;
            },

            isClient() {
                if (this.currentUser && this.currentUser.roles) {
                    return this.currentUser.roles.includes('client');
                }

                return false;
            },
            isAdmin() {
                if (this.currentUser && this.currentUser.roles) {
                    return this.currentUser.roles.includes('admin');
                }

                return false;
            },
        },
        methods: {
            logOut() {
                this.$store.dispatch('auth/logout');
                this.$router.push('/login');
            }
        }
    };
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 0;

    }

    .container {
        max-width: 100%;
        margin: 0;
        padding: 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    .scrollup {
        position: fixed;
        background-color: #e9ecef;
        right: 5%;
        bottom: 0px;
        padding: 4px 10px;
        font-size: 20px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        cursor: pointer;
        text-align: center;
        color: #343a40;
    }

    .scrollup:hover {
        background-color: #343a40;
        color: white;
    }

    #top {
        margin-top: 0;
        padding-left: 15%;
        padding-right: 15%;
        padding-top: 1rem;
    }

    .ncard {
        margin-left: auto;
        margin-right: auto;
        max-width: 90%;
        min-width: 400px;
        text-align: left;
    }

    h1 {
        padding-left: 10%;
    }

    .alink, .alink:hover {
        text-decoration: none;
        color: #2c3e50;

    }

    .footer {
        padding: 1rem;
        max-width: 90%;
        margin: auto;
    }

    #footer td {
        min-width: 300px;
    }

    .flagClass-1 {
        color: red;
    }

    .flagClass-2 {
        color: yellow;
    }

    .flagClass-3 {
        color: green;
    }

</style>
