<template>
    <div class="Notice">
        <main role="main" class="container">
            <div class="jumbotron ncard">
                <h1 class="h3 mb-3 font-weight-normal">Уведомления</h1>

                <table class="table table-hover table-sm">
                    <tbody>
                    <tr>
                        <td>20.10.2020</td>
                        <td>
                            <font-awesome-icon class="flag" icon="flag" style="color: yellow"/>
                        </td>
                        <td class="org">ООО "Аркуда"</td>
                        <td>Напоминаем о необходимости ДО 25 октября предоставить первичные документы за 2 квартал 2020
                            года
                        </td>
                        <td>
                            <div class="btn">
                                <font-awesome-icon icon="envelope"/>
                            </div>
                        </td>
                        <td>
                            <div class="btn">
                                <font-awesome-icon icon="trash-alt"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>14.10.2020</td>
                        <td>
                            <font-awesome-icon class="flag" icon="flag" style="color: red"/>
                        </td>
                        <td class="org">ООО "ФСО Аркуда"</td>
                        <td>У вас заканчивается срок действия электронной подписи. Для его продления обратитесь к Вашему
                            бухгалтеру
                        </td>
                        <td>
                            <div class="btn">
                                <font-awesome-icon icon="envelope"/>
                            </div>
                        </td>
                        <td>
                            <div class="btn">
                                <font-awesome-icon icon="trash-alt"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>14.10.2020</td>
                        <td>
                            <font-awesome-icon class="flag" icon="flag" style="color: red"/>
                        </td>
                        <td class="org">ООО "Аркуда"</td>
                        <td>У вас заканчивается срок действия электронной подписи. Для его продления обратитесь к Вашему
                            бухгалтеру
                        </td>
                        <td>
                            <div class="btn">
                                <font-awesome-icon icon="envelope"/>
                            </div>
                        </td>
                        <td>
                            <div class="btn">
                                <font-awesome-icon icon="trash-alt"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>10.10.2020</td>
                        <td>
                            <font-awesome-icon class="flag" icon="flag" style="color: green"/>
                        </td>
                        <td class="org">ООО "ФСО Аркуда"</td>
                        <td>Предлагаем Вам воспользоваться нашим новым сервисом, автоматически заполняющим все документы
                            необходмиые для принятия нового сотрудника. Если Вас интересует это предложение - свяжитесь
                            с Вашим бухгалтером.
                        </td>
                        <td>
                            <div class="btn">
                                <font-awesome-icon icon="envelope"/>
                            </div>
                        </td>
                        <td>
                            <div class="btn">
                                <font-awesome-icon icon="trash-alt"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>20.09.2020</td>
                        <td>
                            <font-awesome-icon class="flag" icon="flag" style="color: yellow"/>
                        </td>
                        <td class="org">ООО "Аркуда"</td>
                        <td>Напоминаем о необходимости предоставить информацию о новом директоре</td>
                        <td>
                            <div class="btn">
                                <font-awesome-icon icon="envelope"/>
                            </div>
                        </td>
                        <td>
                            <div class="btn">
                                <font-awesome-icon icon="trash-alt"/>
                            </div>
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
        name: 'Notice',
        props: {
            msg: String
        }
    }
</script>


<style scoped>

    h1 {
        padding-left: 10%;
    }

    h5 {
        padding-left: 1.5rem;
    }

    .ncard {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }

    .org {
        min-width: 150px;
    }
</style>
