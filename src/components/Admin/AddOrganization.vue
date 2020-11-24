<template>
    <div class="Organization">
        <main role="main" class="container">
            <div class="jumbotron ncard">

                <h1>Добавить организацию</h1>
                <form @submit.prevent="addOrg">
                    <div class="form-row">
                        <div class="col">
                            <input v-model="organization.name" type="text" class="form-control mb-3" placeholder="Название организации" id="name" required>
                        </div>
                        <div class="col">
                            <input v-model="organization.inn" type="text" class="form-control mb-3" placeholder="ИНН" id="inn" required>
                        </div>
                    </div>
                    <div class="form-row">

                        <div class="col">
                            <input v-model="organization.director" type="text" class="form-control mb-3" placeholder="Руководитель" id="director" required>
                        </div>
                        <div class="col">
                            <input type="submit" class="btn btn-dark" value="Добавить организацию">
                        </div>
                    </div>
                    {{message}}
                </form>

            </div>

        </main>

    </div>
</template>

<script>
    import AddEditService from '../../services/addedit.service';
    import Organization from "@/models/organization";
    export default {
        name: 'Settings',
        data: function () {
            return {
                organization: new Organization('', '', '', ''),
                submitted: false,
                message: ''
            };
        },
        methods: {
            addOrg(){
                this.submitted = true;
                AddEditService.addOrgs(this.organization).then(
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
