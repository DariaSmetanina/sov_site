<template>
    <div class="News">
        <main role="main" class="container">
            <div class="jumbotron ncard">
                <h1 class="h3 mb-3 font-weight-normal">Написать письмо</h1>
                <form>
                    <div class="form-row">
                        <label for="email">Ваш электронный адрес</label>
                        <input type="text" class="form-control mb-3" placeholder="Ваш электронный адрес, чтобы мы могли ответить Вам" id="email">
                    </div>

                    <div class="form-row">
                        <label for="title">Тема письма</label>
                            <input type="text" class="form-control mb-3" placeholder="Тема письма, чтобы мы могли быстрее обработать ваше письмо" id="title">
                    </div>
                    <div class="form-row">
                        <textarea class="form-control" id="LongPart" rows="6"
                                  placeholder="Что Вы хотите нам сказать?"></textarea>
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
