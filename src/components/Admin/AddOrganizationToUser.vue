<template>
    <div class="Organization">
        <main role="main" class="container">
            <div class="jumbotron ncard">

                <h1>Дать пользователю доступ</h1>
                <form @submit.prevent="addOrg">
                    <div class="form-row">
                        <div class="col">
                            <input v-model="addOrgToUser.username" type="text" class="form-control mb-3" placeholder="логин пользователя" id="name" required>
                        </div>
                        <div class="col">
                            <input v-model="addOrgToUser.inn" type="text" class="form-control mb-3" placeholder="ИНН организации" id="inn" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <input type="submit" class="btn btn-dark" value="Дать доступ пользователю">
                            {{message}}
                        </div>
                    </div>

                </form>

            </div>

        </main>

    </div>
</template>

<script>
    import AddEditService from '../../services/addedit.service';
    import AddOrgToUser from "@/models/addOrgToUser";
    export default {
        name: 'Settings',
        data: function () {
            return {
                addOrgToUser: new AddOrgToUser('', ''),
                submitted: false,
                message: ''
            };
        },
        methods: {
            addOrg(){
                this.submitted = true;
                AddEditService.addOrgToUser(this.addOrgToUser).then(
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
        padding-top: 2rem;
        padding-bottom: 2rem;

    }

    .btn {
        width: 100%;
        font-size: 1rem;
    }

    .form-row {
        padding-top: 1rem;
    }

</style>
