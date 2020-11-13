<template>
    <div class="Notice">
        <main role="main" class="container">
            <div class="jumbotron ncard">
                <div style=" overflow-x: auto;">
                    <h1 class="h3 mb-3 font-weight-normal">Счета и оплаты</h1>
                    <table class="table table-hover table-sm">
                        <thead class="thead-dark">
                        <th>Дата</th>
                        <th>Статус</th>
                        <th><select v-model="organization" >
                            <option value="">Организации</option>
                            <option v-for="(organization) in uniqOrganization" v-bind:key="organization">{{organization}}</option>
                        </select></th>
                        <th>Счет</th>
                        <th>Сумма</th>
                        <th>Комментарий</th>
                        <th></th>
                        </thead>
                        <tbody id="list_account">
                        <tr v-for="account in filteredList" v-bind:key="account">
                            <td>{{ account.date }}</td>
                            <td>
                                <font-awesome-icon :class="'flagClass-'+account.status" icon="flag"/>
                            </td>
                            <td>{{ account.organization }}</td>
                            <td>{{ account.number }}</td>
                            <td>{{ account.amount }}</td>
                            <td>{{ account.comment }}</td>
                            <td>
                                <router-link to="/" class="btn btn-sm">
                                    <font-awesome-icon icon="envelope"/>
                                </router-link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
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
                organization:'',
                accounts: []
            };
        },
        computed:{
            uniqOrganization: function(){
                return this.accounts
                    .map((x) => x.organization)
                    .reduce((r, с) => [...new Set(r.concat(с))], [])
            },
            filteredList: function(){
                var org = this.organization;
                return this.accounts.filter(function (elem) {
                    if(org=='') return true;
                    else return (elem.organization.indexOf(org) > -1);
                })
            }},
        mounted() {
            MainService.getAccontList().then(
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
        }
    };
</script>


<style scoped>

    h1 {
        padding-left: 10%;
    }

    h5 {
        padding-left: 1.5rem;
    }

    .ncard {
        padding-top: 2rem;
        padding-bottom: 2rem;

    }

    select{
        font-weight: bold;
        color: white;
        background-color: #343a40;
        border-color: #343a40;
    }

</style>
