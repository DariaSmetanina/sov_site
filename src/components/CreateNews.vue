<template>
    <div class="News">
        <main role="main" class="container">
            <div class="jumbotron ncard">
                <form>
                    <div class="form-row">
                        <div class="col">
                            <input type="text" class="form-control mb-3" placeholder="Название" id="title">
                        </div>
                        <div class="col" id="urgent">
                            <div class="btn-group" data-toggle="buttons">

                                <label class="btn btn-success active">
                                    <input type="radio" style="display: none;" name="urgency">
                                    <span><font-awesome-icon icon="flag"/></span>
                                </label>

                                <label class="btn btn-warning">
                                    <input type="radio" style="display: none;" name="urgency" checked>
                                    <span><font-awesome-icon icon="flag"/></span>
                                </label>

                                <label class="btn btn-danger">
                                    <input type="radio" style="display: none;" name="urgency">
                                    <span><font-awesome-icon icon="flag"/></span>
                                </label>

                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <textarea class="form-control" id="MainPart" rows="3"
                                  placeholder="Введите основную мысль текста"></textarea>
                        <textarea class="form-control" id="LongPart" rows="6"
                                  placeholder="Введите полный текст, со ссылками на источники"></textarea>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <div class="form-file">
                                <input type="file" class="form-file-input" id="customFile">
                                <label class="form-file-label" for="customFile">
                                </label>
                            </div>
                        </div>
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
    export default {
        name: 'News',
        props: {
            msg: String
        }
    }
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
