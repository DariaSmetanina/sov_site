<template>
    <div class="ChooseOrg">
        <main role="main" class="container">
            <div v-for="organization in organizations" v-bind:key="organization">
            <router-link :to="'/personal/'+organization.inn" class="alink">
            <div class="jumbotron ncard" >
                <h1 class="h3 mb-3 font-weight-normal">{{ organization.name }}</h1>
                <h5>ИНН:{{ organization.inn }}</h5><h5>Руководитель:{{ organization.director }}</h5>
            </div>
            </router-link>
            </div>
        </main>
    </div>
</template>

<script>

import MainService from '../../services/main.service';

export default {
    name: 'ChooseOrg',
    data: function () {
        return {
            organizations: []
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
    }}
</script>


<style scoped>

    .ncard {
        padding: 2rem;
    }

    img {
        height: 90px;
        border-radius: .3rem;
    }

    button {
        padding: 0;
        border-radius: .3rem;
        box-shadow: 1px 1px 1px 1px #2c3e50;
    }

    #list li{
        display: block;
        font-size: 1.25rem;
    }
</style>
