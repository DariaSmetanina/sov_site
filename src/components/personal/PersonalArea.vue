<template>
    <div class="PersonalArea">
        <main role="main" class="container">
            <div class="form-row">
                <div v-for="organization in organizations" v-bind:key="organization" class="col">
                    <a :href="'/personal/'+organization.inn" class="alink">
                        <div v-if="organization.inn==currentInn">
                            <div class="orgcard">
                            <div class="currorgcard">
                                <h3><b>{{ organization.name }}</b></h3>
                            </div>
                            </div>
                        </div>
                        <div v-else>
                            <div class="orgcard">
                                <h3>{{ organization.name }}</h3>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="form-row">
                <div class="col">
                    <router-link to="/payments" class="alink">
                        <div class="jumbotron ncard">
                            <h2>Счета и оплаты</h2>
                            <table class="table table-hover table-sm">
                                <thead>
                                <th>Дата</th>
                                <th>Статус</th>
                                <th>Счет</th>
                                <th>Сумма</th>
                                </thead>
                                <tbody id="list_account">
                                <tr v-for="account in accounts" v-bind:key="account">
                                    <td>{{ account.date }}</td>
                                    <td>
                                        <font-awesome-icon :class="'flagClass-'+account.status" icon="flag"/>
                                    </td>
                                    <td>{{ account.number }}</td>
                                    <td>{{ account.amount }}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </router-link>
                </div>
                <div class="col">
                    <router-link to="/notifications" class="alink">
                        <div class="jumbotron ncard">
                            <h2>Уведомления</h2>
                            <table class="table table-hover table-sm">
                                <tbody>
                                <tr v-for="notification in notifications" v-bind:key="notification">
                                    <td>{{ notification.date }}</td>
                                    <td>
                                        <font-awesome-icon :class="'flagClass-'+notification.importance" icon="flag"/>
                                    </td>
                                    <td>{{ notification.organization }}</td>
                                    <td>{{ notification.text }}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="form-row">
                <div class="col">
                    <router-link to="/templates" class="alink">
                        <div class="jumbotron ncard">
                            <h2>Шаблоны документов</h2>
                            <p>Здесь Вы можете найти шаблоны раличных документов: договоров, приказов, отчетов. Мы
                                следим чтобы все формы обновлялись в соответствии с изменениями в законодательстве. </p>
                        </div>
                    </router-link>
                </div>
                <div class="col">
                    <div class="jumbotron ncard">
                        <router-link :to="'/cloud/'+currentInn" class="alink">
                        <h2>Добавление документов</h2>
                        <p>Здесь Вы можете загрузить документы в облако.
                            <br>Ваш Бухгалтер в последствии обработает их и
                            учтет при составлении отчетности.
                            <br>Пожалуйста, добавляйте документы своевременно.
                            Предоставленные позже оговоренного срока документы <b>не будут</b> включены в отчетность.
                        </p>
                        </router-link>
                    </div>

                </div>
            </div>


        </main>

    </div>
</template>

<script>
    import MainService from '../../services/main.service';

    export default {
        name: 'list_account',
        data: function () {
            return {
                accounts: [],
                notifications: [],
                organizations: [],
                currentInn: this.$route.params.inn
            };
        },
        mounted() {
            MainService.getFourAcconts(this.$route.params.inn).then(
                response => {
                    this.accounts = response.data;
                },
                error => {
                    this.accounts =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString();
                }
            );
            MainService.getTwoNotifications(this.$route.params.inn).then(
                response => {
                    this.notifications = response.data;
                },
                error => {
                    this.accounts =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString();
                }
            );
            MainService.getOrganizations().then(
                response => {
                    this.organizations = response.data;
                },
                error => {
                    this.organizations =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString();
                }
            );
        }
    };
</script>


<style scoped>

    .ncard {
        padding: 2rem;
        max-width: 100%;
        height: 93%;
        margin: 0.5rem;
    }

    select {
        max-width: 98%;
        margin: .5rem;
        margin-left: .7rem;
    }

    .orgcard {
        background-color: #343a40;
        color: grey;
        margin: 0.5rem;
        border-radius: 0.5rem;
    }

    .currorgcard{
        margin: 0.5rem;
        margin-top: 0.5rem;
        border-radius: 0.5rem;
        background-color: white;
        color: #343a40;

    }

    .orgcard h3{
        padding-top: .5rem;
        padding-bottom: .5rem;
    }

</style>
