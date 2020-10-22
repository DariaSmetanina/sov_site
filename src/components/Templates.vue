<template>
    <div class="Templates">
        <main role="main" class="container">
            <div class="jumbotron ncard">
                <h1 class="h3 mb-3 font-weight-normal">Шаблоны документов</h1>

                <ul id="list">
                    <li><a href="#podr" class="alink">Договор подряда</a></li>
                    <li><a href="#pac" class="alink">Пакет документов для приема сотрудников</a></li>
                </ul>

            </div>
            <div class="jumbotron ncard" id="podr">
                <h1 class="h3 mb-3 font-weight-normal">Договор подряда</h1>
                <table class="table table-sm">
                    <tbody>
                    <tr>
                        <td>
                            Договор подряда — соглашение, в соответствии с которым одна сторона обязуется выполнить по
                            заданию другой стороны определённую работу и сдать её результат заказчику, а последний
                            обязуется принять результат работы и оплатить его.
                        </td>
                        <td>
                            <button class="btn">
                                <img src="../assets/word-doc-icon.png">
                            </button>
                        </td>
                        <td>
                            <button class="btn">
                                <img src="../assets/pdf-icon.png">
                            </button>
                        </td>
                    </tr>

                    </tbody>
                </table>

            </div>

            <div class="jumbotron ncard" id="pac">
                <h1 class="h3 mb-3 font-weight-normal">Пакет документов для приема сотрудника на работу</h1>
                <table class="table table-sm">
                    <tbody>
                    <tr>
                        <td>
                            В zip-папке находятся все необходимые документы для принятия на работу нового сотрудника:
                            договор, приказ, сзв-тд, информационный лист с подробной инструкцией
                        </td>
                        <td>
                            <button class="btn">
                                <img src="../assets/zip-icon.png">
                            </button>
                        </td>
                    </tr>

                    </tbody>
                </table>

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

    img {
        height: 90px;
        border-radius: .3rem;
    }

    button {
        padding: 0;
        border-radius: .3rem;
        box-shadow: 1px 1px 1px 1px #2c3e50;
    }

    #list li{
        display: block;
        font-size: 1.25rem;
    }
</style>
