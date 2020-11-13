<template>
    <div class="Settings" id="Settings">
        <main role="main" class="container">
            <form class="form-signin jumbotron ncard" @submit.prevent="editPersonal">
                <div class="form-row">
                    <h1 class="h3 mb-3 font-weight-normal">Персональные настройки</h1>
                </div>
                <div class="form-row">
                    <h5>Изменить электронный адрес</h5>
                </div>
                <div class="form-row">
                    <div class="col">
                        <input v-model="person.email" type="email" id="inputEmail" class="form-control" placeholder="Новый email">
                    </div>
                    <div class="col"></div>
                </div>
                <div class="form-row">
                    <h5>Изменить пароль</h5>
                </div>
                <div class="form-row">
                    <div class="col"><input v-model="person.oldPassword" type="password" id="origPassword" class="form-control"
                                            placeholder="Старый пароль" required></div>
                    <div class="col"><input v-model="person.newPassword" type="password" id="newPassword" class="form-control"
                                            placeholder="Новый пароль"></div>
                    <div class="col"><input v-model="person.newPasswordCopy" type="password" id="newPassword2" class="form-control"
                                            placeholder="Повторите новый пароль"></div>
                </div>
                <h5>{{message}}</h5>
                <button class="btn btn-lg btn-dark btn-block" type="submit">Сохранить изменения</button>

            </form>
            <div class="jumbotron ncard">
                <h1 class="h3 mb-3 font-weight-normal">Мои организации</h1>

                <table class="table table-hover table-sm">
                    <thead class="thead-dark">
                    <th>Организация</th>
                    <th>ИНН</th>
                    <th>Руководитель</th>
                    <th></th>
                    </thead>
                    <tbody id="list_organization">
                    <tr v-for="organization in organizations" v-bind:key="organization">
                        <td>{{ organization.name }}</td>
                        <td>{{ organization.inn }}</td>
                        <td>{{ organization.director }}</td>
                        <td>
                            <div class="btn btn-sm">
                                <font-awesome-icon icon="trash-alt"/>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </main>
    </div>
</template>

<script>
    import AddEditService from '../../services/addedit.service';
    import MainService from '../../services/main.service';
    import UserSettings from "@/models/userSettings";
    export default {
        name: 'Settings',
        data: function () {
            return {
                organizations: [],
                person: new UserSettings('', '', '', ''),
                submitted: false,
                message: ''
            };
        },
        mounted() {
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
    },
    methods: {
    editPersonal(){
        if (this.person.email ||(this.person.newPassword && this.person.newPasswordCopy)) {
        this.submitted = true;
        AddEditService.setPersonal(this.person).then(
                    response => {
                        this.message = response.data.message;
                        this.successful = true;
                        this.showRoute(this.startObjectFromGeocoder, this.finishObjectFromGeocoder)
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
            else{
                this.message = "Что именно Вы хотите изменить?"
            }}
        }};
</script>


<style scoped>


    h5 {
        padding-left: 1.5rem;
    }

    .ncard {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }

    input {
        margin-left: 1rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
        max-width: 90%;
    }

    button {
        margin-left: 1rem;
        margin-right: 1rem;
        max-width: 97%;
    }

    .table {
        margin-left: 1rem;
        max-width: 97%;
    }

</style>
