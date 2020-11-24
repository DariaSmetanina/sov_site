<template>
    <div class="News">
        <main role="main" class="container">
            <div class="jumbotron ncard">
                <h1>Вы действительно хотите удалить <b>{{organization.name}}</b> из своих организаций?
                </h1>
                <h4>ИНН: {{organization.inn}}</h4>
                <h4>Руководитель: {{organization.director}}</h4>
                <h6 style="color: red;">Отменить это действие будет невозможно</h6>

                <router-link to="/settings" class="alink">
                    <div class="btn btn-lg btn-dark btn-block">Нет, вернуться назад</div>
                </router-link>
                <button class="btn btn-lg btn-light btn-block" v-on:click="deleteOrg">Да, удалить</button>
            </div>

        </main>

    </div>
</template>

<script>
import MainService from '../../services/main.service';
import AddEditService from '../../services/addedit.service';
import Organization from '../../models/organization.js'

    export default {
        name: 'DeleteOrg',
        data() {
            return {
                organization: new Organization()
            };
        },

        mounted() {
            MainService.getOrganizationn(this.$route.params.inn).then(
                response => {
                    this.organization = response.data;
                },
                error => {
                    this.request =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString();
                }
            );
        },
        methods: {
            deleteOrg(){
                AddEditService.deleteOrgFromUser(this.$route.params.inn).then(
                    response => {
                        this.message = response.data;
                    },
                    error => {
                        this.organizations =
                            (error.response && error.response.data) ||
                            error.message ||
                            error.toString();
                    }
                );
            }
        }
     };
</script>


<style scoped>

    h1 {
        padding-left: 10%;
        padding-right: 10%;
    }

    h6 {
        padding-bottom: 1.5rem;
        padding-left: 0;
    }

    img {
        max-width: 100%;
        border-radius: .3rem;
    }

    .ncard {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }

    button{
        margin-top: 1rem;
    }

</style>
