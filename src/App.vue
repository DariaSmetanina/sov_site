<template>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4" id="top">
            <a class="navbar-brand" href="/">Бухгалтерский кооператив</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#news"> Новости <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#about"> О нас <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#calc"> Тарифы <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#footer"> Контакты <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="/choose">Личный кабинет</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="/settings">Настройки</a>
                    </li>

                </ul>
            </div>
        </nav>
        <div>
            <router-view/>
        </div>
        <div class="scrollup" id="scrlbtn">
            <a class="scrollup" href="#top">
                <font-awesome-icon icon="chevron-up"/>
            </a>
        </div>
        <footer class="footer" style=" overflow-x: auto;">
        <table class="table" id="footer">
            <tr><td><font-awesome-icon icon="phone"/> +7(999)635-98-30
            <br> <font-awesome-icon icon="phone"/> +7(922)651-73-12</td>
                <td>За качество своей работы мы отвечаем в строгом соответствии с договором и законодательством Российской Федерации.</td>
                <td><font-awesome-icon icon="envelope"/> emailOrg@gmail.com
                <br><font-awesome-icon icon="envelope"/> emailOrg@mail.ru</td>
            </tr>
        </table>
        </footer>
    </div>
</template>

<script>
    export default {}
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 0;

    }

    table{

    }

    .container {
        max-width: 100%;
        margin: 0;
        padding: 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    .scrollup {
        position: fixed;
        background-color: #e9ecef;
        right: 5%;
        bottom: 0px;
        padding: 4px 10px;
        font-size: 20px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        cursor: pointer;
        text-align: center;
        color: #343a40;
    }

    .scrollup:hover {
        background-color: #343a40;
        color: white;
    }

    #top {
        margin-top: 0;
        padding-left: 15%;
        padding-right: 15%;
        padding-top: 1rem;
    }

    .ncard {
        margin-left: auto;
        margin-right: auto;
        max-width: 90%;
        min-width: 400px;
        text-align: left;
    }

    h1 {
        padding-left: 10%;
    }

    .alink, .alink:hover{
        text-decoration: none;
        color:#2c3e50;

    }

    .footer{
        padding: 1rem;
        max-width: 90%;
        margin: auto;
    }
    #footer td{
        min-width: 300px;
    }

    .flagClass-1{
        color: red;
    }
    .flagClass-2{
        color: yellow;
    }
    .flagClass-3{
        color: green;
    }

</style>
