<template>
    <div class="PersonalArea">
        <main role="main" class="container">
            <select class="form-control">
                <option>ООО "Аркуда"</option>
                >
                <option>ООО "ФСО Аркуда"</option>
                >
            </select>

            <div class="form-row">
                <div class="col">
                    <a href="/payments" class="alink">
                        <div class="jumbotron ncard">
                            <h2>Счета и оплаты</h2>
                            <table class="table table-hover table-sm">
                                <thead>
                                <th>Дата</th>
                                <th>Статус</th>
                                <th>Счет</th>
                                <th>Сумма</th>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>20.10.2020</td>
                                    <td><font-awesome-icon class="flag" icon="flag" style="color: yellow"/></td>
                                    <td>№18/3 от 15.10.2020</td>
                                    <td>5 000,00</td>
                                  </tr>
                                <tr>
                                    <td>10.09.2020</td>
                                    <td><font-awesome-icon class="flag" icon="flag" style="color: green"/></td>
                                    <td>№11/3 от 08.09.2020</td>
                                    <td>3 000,00</td>
                                  </tr>                    </tbody>
                            </table>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="notifications" class="alink">
                        <div class="jumbotron ncard">
                            <h2>Уведомления</h2>
                            <table class="table table-hover table-sm">
                                <tbody>
                                <tr>
                                    <td>20.10.2020</td>
                                    <td>
                                        <font-awesome-icon class="flag" icon="flag" style="color: yellow"/>
                                    </td>
                                    <td>Напоминаем о необходимости ДО 25 октября предоставить первичные документы за 2
                                        квартал 2020
                                        года
                                    </td>
                                </tr>
                                <tr>
                                    <td>14.10.2020</td>
                                    <td>
                                        <font-awesome-icon class="flag" icon="flag" style="color: red"/>
                                    </td>
                                    <td>У вас заканчивается срок действия электронной подписи. Для его продления
                                        обратитесь к Вашему
                                        бухгалтеру
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </a>
                </div>
            </div>
            <div class="form-row">
                <div class="col">
                    <a href="/templates" class="alink">
                        <div class="jumbotron ncard">
                            <h2>Шаблоны документов</h2>
                            <p>Здесь Вы можете найти шаблоны раличных документов: договоров, приказов, отчетов. Мы
                                следим чтобы все формы обновлялись в соответствии с изменениями в законодательстве. </p>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <div class="jumbotron ncard">
                        <h2>Добавление документов</h2>
                        <p>Здесь Вы можете загрузить документы в облако.
                            <br>Ваш Бухгалтер в последствии обработает их и
                            учтет при составлении отчетности.
                            <br>Пожалуйста, добавляйте документы своевременно.
                            Предоставленные позже оговоренного срока документы <b>не будут</b> включены в отчетность.
                        </p>
                    </div>

                </div>
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
        max-width: 100%;
        height: 93%;
        margin: 0.5rem;
    }

    select {
        max-width: 98%;
        margin: .5rem;
        margin-left: .7rem;
    }

</style>
