<template>
    <div class="SendMessage">
        <main role="main" class="container">
            <div class="jumbotron ncard">

                <form @submit.prevent="sendNotification">
                    <h1 class="h3 mb-3 font-weight-normal">Создать уведомление</h1>
                    <div class="form-row">
                        <div class="col">
                            <input v-model="mail.subject" type="text" class="form-control mb-3" placeholder="Тема уведомления" id="title">
                        </div>
                        <div class="col" id="urgent">
                            <div class="btn-group" data-toggle="buttons">
                                <label class="btn btn-success active">
                                    <input v-model="mail.importance" type="radio" value ="3" style="display: none;" name="urgency">
                                    <span><font-awesome-icon icon="flag"/></span>
                                </label>

                                <label class="btn btn-warning">
                                    <input v-model="mail.importance" type="radio" value ="2" style="display: none;" name="urgency" checked>
                                    <span><font-awesome-icon icon="flag"/></span>
                                </label>

                                <label class="btn btn-danger">
                                    <input v-model="mail.importance" type="radio" value ="1" style="display: none;" name="urgency">
                                    <span><font-awesome-icon icon="flag"/></span>
                                </label>

                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <textarea v-model="mail.text" class="form-control" id="LongPart" rows="3"
                                  placeholder="Текст уведомления"></textarea>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            Получатели:
                            <div v-for="organization in organizations" v-bind:key="organization">
                                <input v-model="mail.to" type="checkbox" name="orgChoose" :value="organization.inn"> {{organization.name}}
                            </div>
                        </div>
                        <div class="col">
                            <input type="submit" class="btn btn-dark" value="Отправить уведомления">
                            {{message}}
                        </div>
                    </div>

                </form>

            </div>

        </main>

    </div>
</template>

<script>
    import MailService from '../../services/mail.service.js';
    import MainService from '../../services/main.service.js';
    import Mail from "@/models/mail";
    export default {
        name: 'sendMail',
        data: function () {
            return {
                mail: new Mail('', [], '2', '', ''),
                submitted: false,
                message: '',
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
        },
        methods: {
            sendNotification(){
                this.submitted = true;
                MailService.sendNotification(this.mail).then(
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
        }};
</script>


<style scoped>

    .ncard {
        padding: 2rem;
    }

    .btn {
        width: 100%;
        font-size: 1.25rem;
    }

    .form-row {
        padding-bottom: 10px;
        max-width: 97%;
        margin-left: 1rem;
    }
    label{
        margin-left: 1.5rem;
    }
</style>
