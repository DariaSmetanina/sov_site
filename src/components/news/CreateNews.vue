<template>
    <div class="News">
        <main role="main" class="container">
            <div class="jumbotron ncard">
                <form @submit.prevent="addNews">
                    <div class="form-row">
                        <div class="col">
                            <input v-model="news.title" type="text" class="form-control mb-3" placeholder="Название" id="title" required>
                        </div>
                        <div class="col" id="urgent">
                            <div class="btn-group" data-toggle="buttons">
                                <label class="btn btn-success active">
                                    <input v-model="news.importance" type="radio" value ="3" style="display: none;" name="urgency">
                                    <span><font-awesome-icon icon="flag"/></span>
                                </label>

                                <label class="btn btn-warning">
                                    <input v-model="news.importance" type="radio" value ="2" style="display: none;" name="urgency" checked>
                                    <span><font-awesome-icon icon="flag"/></span>
                                </label>

                                <label class="btn btn-danger">
                                    <input v-model="news.importance" type="radio" value ="1" style="display: none;" name="urgency">
                                    <span><font-awesome-icon icon="flag"/></span>
                                </label>

                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <textarea v-model="news.mainPart" class="form-control" id="MainPart" rows="3"
                                  placeholder="Введите основную мысль текста" required></textarea>
                        <textarea v-model="news.text" class="form-control" id="LongPart" rows="6"
                                  placeholder="Введите полный текст, со ссылками на источники" required></textarea>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <div class="form-file">
                                <input type="file" class="form-file-input" id="customFile">
                                <label class="form-file-label" for="customFile">
                                </label>
                            </div>
                        </div>
                        <h3>{{message}}</h3>
                        <div class="col">
                            <input type="submit" class="btn btn-dark" value="Отправить новость">
                        </div>
                    </div>

                </form>

            </div>

        </main>

    </div>
</template>

<script>
    import AddEditService from '../../services/addedit.service';
    import News from "@/models/news";
    export default {
        name: 'Settings',
        data: function () {
            return {
                news: new News('', '', '2', '', '', '', ''),
                submitted: false,
                message: ''
            };
        },
        methods: {
            addNews(){
                this.submitted = true;
                AddEditService.addNews(this.news).then(
                    response => {
                        this.$router.push('/');
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
    #title {
        font-size: 2.5rem;
        min-width: 210px;
    }

    #urgent {
        padding: auto;
        font-size: 2rem;
    }

    #MainPart {
        font-weight: bold;
    }

    textarea {
        margin-bottom: 10px;
    }

    .btn span {
        opacity: 0;
    }

    .btn.active span {
        opacity: 1;
    }

    .ncard {
        padding-top: 2rem;
        padding-bottom: 0;
    }

    .btn {
        width: 100%;
        font-size: 1.25rem;
    }

    .form-row {
        padding-bottom: 2rem;
    }
</style>
