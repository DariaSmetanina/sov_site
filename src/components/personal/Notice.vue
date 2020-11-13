<template>
    <div class="Notice">
        <main role="main" class="container">
            <div class="jumbotron ncard">
                <div style=" overflow-x: auto;">
                    <h1 class="h3 mb-3 font-weight-normal">Уведомления</h1>
                    <select v-model="organization" >
                        <option value="">Организации</option>
                        <option v-for="(organization) in uniqOrganization" v-bind:key="organization">{{organization}}</option>
                    </select>
                    <table class="table table-hover table-sm">
                        <tbody id="list_notification">
                        <tr v-for="notification in filteredList" v-bind:key="notification">
                            <td>{{ notification.date }}</td>
                            <td>
                                <font-awesome-icon :class="'flagClass-'+notification.importance" icon="flag"/>
                            </td>
                            <td>{{ notification.organization }}</td>
                            <td>{{ notification.text }}</td>
                            <td>
                            <td>
                                <div class="btn">
                                    <font-awesome-icon icon="envelope"/>
                                </div>
                            </td>
                            <td>
                                <div class="btn">
                                    <font-awesome-icon icon="trash-alt"/>
                                </div>
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
        name: 'list_notification',
        data: function () {
            return {
                organization:'',
                notifications: []
            };
        },computed:{
            uniqOrganization: function(){
                return this.notifications
                    .map((x) => x.organization)
                    .reduce((r, с) => [...new Set(r.concat(с))], [])
            },
            filteredList: function(){
                var org = this.organization;
                return this.notifications.filter(function (elem) {
                    if(org=='') return true;
                    else return (elem.organization.indexOf(org) > -1);
                })
            }},
        mounted() {
            MainService.getNotificationsList().then(
                response => {
                    this.notifications = response.data;
                },
                error => {
                    this.notifications =
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
        background-color: #e9ecef;
        border-color: #e9ecef;
        padding-left: 6rem;
    }


</style>
