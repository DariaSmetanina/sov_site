<template>
    <div class="Login">
        <form class="form-signin jumbotron ncard">

            <h1 class="h3 mb-3 font-weight-normal">Пожалуйста войдите</h1>

            <input type="email" id="inputEmail" class="form-control" placeholder="Логин" required autofocus>
            <input type="password" id="inputPassword" class="form-control" placeholder="Пароль" required>
            <div class="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me"> Запомнить меня
                </label>
            </div>
            <button class="btn btn-lg btn-dark btn-block" type="submit">Войти</button>
        </form>

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

    h1 {
        padding-left: 10%;
    }

    /*#scrlbtn{*/
    /*разобраться как скрывать :с*/
    /*    display: none;*/
    /*    visibility: hidden;*/
    /*    background-color: red;*/
    /*}*/
    .ncard {
        padding-top: 2rem;
        padding-bottom: 2rem;
        max-width: 150px;
    }

    input {
        margin-bottom: 5px;
    }


</style>
