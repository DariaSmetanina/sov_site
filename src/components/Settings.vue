<template>
    <div class="Settings">
        <main role="main" class="container">
            <form class="form-signin jumbotron ncard">
                <div class="form-row">
                    <h1 class="h3 mb-3 font-weight-normal">Персональные настройки</h1>
                </div>
                <div class="form-row">
                    <h5>Изменить электронный адрес</h5>
                </div>
                <div class="form-row">
                    <div class="col">
                        <input type="email" id="inputEmail" class="form-control" placeholder="Новый email" required
                               autofocus>
                    </div>
                    <div class="col"></div>
                </div>
                <div class="form-row">
                    <h5>Изменить пароль</h5>
                </div>
                <div class="form-row">
                    <div class="col"><input type="password" id="origPassword" class="form-control"
                                            placeholder="Старый пароль" required autofocus></div>
                    <div class="col"><input type="password" id="newPassword" class="form-control"
                                            placeholder="Новый пароль" required autofocus></div>
                    <div class="col"><input type="password" id="newPassword2" class="form-control"
                                            placeholder="Повторите новый пароль" required autofocus></div>
                </div>

                <button class="btn btn-lg btn-dark btn-block" type="submit">Сохранить изменения</button>

            </form>
            <div class="jumbotron ncard">
                <h1 class="h3 mb-3 font-weight-normal">Мои организации</h1>

                <table class="table table-hover table-sm">
                    <thead class="thead-dark">
                    <th>Организация</th>
                    <th>ИНН-КПП</th>
                    <th>Руководитель</th>
                    <th></th>
                    </thead>
                    <tbody id="list_organizations">

                    <tr>
                        <td>ООО "АРКУДА"</td>
                        <td>15834975781 - 1547778</td>
                        <td>Зубов Вадим Александрович</td>
                        <td>
                            <div class="btn btn-sm">
                                <font-awesome-icon icon="trash-alt"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>ФСО "АРКУДА"</td>
                        <td>18884975781 - 1543338</td>
                        <td>Зубов Вадим Александрович</td>
                        <td>
                            <div class="btn btn-sm">
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
        name: 'Settings',
        props: {
            msg: String
        }
    }
</script>


<style scoped>


    h5 {
        padding-left: 1.5rem;
    }

    .ncard {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }

    input {
        margin-left: 1rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
        max-width: 90%;
    }

    button {
        margin-left: 1rem;
        margin-right: 1rem;
        max-width: 97%;
    }

    .table {
        margin-left: 1rem;
        max-width: 97%;
    }

</style>
