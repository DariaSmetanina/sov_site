<template>
    <div class="Notice">
        <main role="main" class="container">
            <div class="form-row">
                <div v-for="organization in organizations" v-bind:key="organization" class="col">
                    <a :href="'/cloud/'+organization.inn" class="alink">
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


            <div class="jumbotron ncard">

                <div style=" overflow-x: auto;">
                    <div class="form-row">
                    <h1 class="h3 mb-3 font-weight-normal col">Документы {{kvart}} квартала {{year}} года</h1>
                        <div class="col">
                    <form method="POST" action="/api/user/addFile" enctype="multipart/form-data">
                                <input type="file" name="file">
                                <input :value=currentInn style="display: none;" name="inn">
                                <input type="submit" class="btn btn-dark" value="+">
                    </form>
                        </div>
                    </div>

                    <table class="table table-hover table-sm">
                        <thead class="thead-dark">
                        <th>Документ</th>
                        <th></th>
                        </thead>
                        <tbody id="list_account">
                        <tr v-for="file in files" v-bind:key="file">
                            <td>{{ file.name}}</td>
                            <td><button class="btn btn-dark" @click="dwnld(file.name)">Скачать</button></td>
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
                organizations: [],
                files: [],
                currentInn: this.$route.params.inn,
                year:'',
                kvart:''
            };
        },
        mounted() {
            var date = new Date();

            this.year=date.getFullYear();
            this.kvart=Math.floor(date.getMonth()/3)+1;
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
            MainService.getFileList(this.$route.params.inn).then(
                response => {
                    this.files = response.data;
                },
                error => {
                    this.accounts =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString();
                }
            );
        },
        methods:{
            dwnld(filename){
                MainService.getFile(filename,this.currentInn).then((response) => {

                    var contentDispositionHeader = JSON.stringify(response.headers);
                    console.log(contentDispositionHeader);
                    var result = contentDispositionHeader.split('filename=');
                    console.log(result[1]);
                    var res2=result[1].split('"')
                    var filename=res2[1].substr(0, (res2[1].length-1));

                    var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                    var fileLink = document.createElement('a');

                    fileLink.href = fileURL;
                    fileLink.setAttribute('download', filename);
                    document.body.appendChild(fileLink);

                    fileLink.click();
                });
            }
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
        padding: 1rem 4rem 2rem 4rem;
    }

    select{
        font-weight: bold;
        color: white;
        background-color: #343a40;
        border-color: #343a40;
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

    .form-row{
        margin: 2.5rem;
    }

    #drop_zone {
        border: 5px solid blue;
        width:  200px;
        height: 100px;
    }

</style>
