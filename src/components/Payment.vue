<template>
    <div class="Notice">
        <main role="main" class="container">
            <div class="jumbotron ncard">
                <h1 class="h3 mb-3 font-weight-normal">Счета и оплаты</h1>

                <table class="table table-hover table-sm">
                    <thead class="thead-dark">
                    <th>Дата</th>
                    <th>Статус</th>
                    <th>Организация</th>
                    <th>Счет</th>
                    <th>Сумма</th>
                    <th>Комментарий</th>
                    <th></th>
                    </thead>
                    <tbody>
                    <tr>
                        <td>20.10.2020</td>
                        <td><font-awesome-icon class="flag" icon="flag" style="color: yellow"/></td>
                        <td>ООО "Аркуда"</td>
                        <td>№18/3 от 15.10.2020</td>
                        <td>5 000,00</td>
                        <td>Отсрочка на месяц (до 15.11.2020)</td>
                        <td>
                            <div class="btn">
                                <font-awesome-icon icon="envelope"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>01.10.2020</td>
                        <td><font-awesome-icon class="flag" icon="flag" style="color: red"/></td>
                        <td>ООО "ФСО Аркуда"</td>
                        <td>№15/3 от 30.09.2020</td>
                        <td>2 000,00</td>
                        <td></td>
                        <td>
                            <div class="btn">
                                <font-awesome-icon icon="envelope"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>10.09.2020</td>
                        <td><font-awesome-icon class="flag" icon="flag" style="color: green"/></td>
                        <td>ООО "Аркуда"</td>
                        <td>№11/3 от 08.09.2020</td>
                        <td>3 000,00</td>
                        <td></td>
                        <td>
                            <div class="btn">
                                <font-awesome-icon icon="envelope"/>
                            </div>
                        </td>
                    </tr>                    </tbody>
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

</style>
