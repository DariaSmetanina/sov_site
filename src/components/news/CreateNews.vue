<template>
    <div class="News">
        <main role="main" class="container">
            <div class="jumbotron ncard">
                <form method="POST" action="/api/news/addNews" enctype="multipart/form-data">
                    <div class="form-row">
                        <div class="col">
                            <input type="text" class="form-control mb-3" placeholder="Название" id="title"  name="title" required>
                        </div>
                        <div class="col" id="urgent">
                            <div class="btn-group" data-toggle="buttons">
                                <label class="btn btn-success active">
                                    <input type="radio" value ="3" style="display: none;" name="urgency">
                                    <span><font-awesome-icon icon="flag"/></span>
                                </label>

                                <label class="btn btn-warning">
                                    <input type="radio" value ="2" style="display: none;" name="urgency" checked>
                                    <span><font-awesome-icon icon="flag"/></span>
                                </label>

                                <label class="btn btn-danger">
                                    <input type="radio" value ="1" style="display: none;" name="urgency">
                                    <span><font-awesome-icon icon="flag"/></span>
                                </label>

                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <textarea class="form-control" id="MainPart" rows="3" name="mainPart"
                                  placeholder="Введите основную мысль текста" required></textarea>
                        <textarea class="form-control" id="LongPart" rows="6" name="longPart"
                                  placeholder="Введите полный текст, со ссылками на источники" required></textarea>
                    </div>
                    <div class="form-row">
                        <div class="col">
                    <input type="file" name="file">
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
