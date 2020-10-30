<template>
    <div class="Notice">
        <main role="main" class="container">
            <div class="jumbotron ncard">
                <div style=" overflow-x: auto;">
                    <h1 class="h3 mb-3 font-weight-normal">Уведомления</h1>

                    <table class="table table-hover table-sm">
                        <tbody id="list_notification">
                        <tr v-for="notification in notifications" v-bind:key="notification">
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
    import MainService from '../services/main.service';

    export default {
        name: 'list_notification',
        data: function () {
            return {
                notifications: []
            };
        },
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

</style>
