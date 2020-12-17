<template>
    <div class="Home" id="Home">


        <div id="carousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="img-fluid" src="../assets/people_037.png">
                </div>
                <div class="carousel-item">
                    <img class="img-fluid" src="../assets/log2.png">
                </div>
            </div>
        </div>



        <div class="form-row" id="news">
            <div class="col" v-for="news in news_list" v-bind:key="news">
                <router-link :to="'/news/'+news.id" class="alink">
                    <div class="jumbotron ncard">
                        <h4>{{news.title}}
                            <font-awesome-icon :class="'flagClass-'+news.importance" icon="flag"/>
                        </h4>
                        <h6>{{news.date}}</h6>
                        <p>{{news.mainPart}}</p>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="form-row" id="about">
            <div class="col">
                <br>
                <h3>Наша команда занимается бухгалтерским обслуживанием с 2000 года. Мы сочетаем опыт
                    специалистов, работающих многие годы и свежие взгляды сотрудников, только недавно ступивших на этот
                    путь</h3>
                <h4>Сшит колпак, да не по-колпаковски. Вылит колокол, да не по-колоколовски. Надо колпак
                    переколпаковать, перевыколпаковать. Надо колокол переколоколовать, перевыколоколовать.</h4></div>
            <div class="col"><img class="img-fluid" src="../assets/group.jpg" alt="..."></div>
        </div>

        <div id="calc" class="form-row jumbotron ncard">

            <h3><b>Уже сейчас вы можете оценить примерную стоить наших услуг</b></h3>

            <table class="table table-hover table-sm">
                <thead>
                <th>Услуга</th>
                <th>Стоимость</th>
                <th>Количество</th>
                </thead>
                <tbody>
                <tr v-for="n in items" v-bind:key="n">
                    <td>{{n.name}}</td>
                    <td>{{n.value}}</td>
                    <td><input v-model="n.number" type="number"></td>
                </tr>
                <tr>
                    <td></td>
                    <td><b>Итого</b></td>
                    <td><b>{{ total }}</b></td>
                </tr>
                </tbody>
            </table>
        </div>

        <div class="form-row" id="callback">
            <div class="col">
                <input type="text" class="form-control mb-3" placeholder="+7(900)000 00 00">
                <button class="btn btnHome">Заказать обратный звонок</button>
            </div>
            <div class="col">
                <h3>Оставьте заявку и с Вами свяжется наш специалист</h3>
            </div>
            <div class="col">
                <input type="text" class="form-control mb-3" placeholder="Ваш email">
                <button class="btn btnHome">Написать электронное письмо</button>
            </div>

        </div>

    </div>
</template>

<script>
    import MainService from '../services/main.service';

    export default {
        name: 'Home',
        data: function () {
            return {
                news_list: [],
                document: [],
                items: [
                    {name: "Организация на ОСН", value: 5000, number: 0},
                    {name: "Организация на УСН", value: 3000, number: 0},
                    {name: "Обработка входящих документов", value: 50, number: 0},
                ]
            };
        },
        mounted() {
            MainService.getThreeNews().then(
                response => {
                    this.news_list = response.data;
                },
                error => {
                    this.notifications =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString();
                }
            );
        },
        computed: {
            total() {
                return this.items.reduce((acc, n) => acc + n.value * n.number, 0);
            },
        }
    };
</script>

<style scoped>

    #calc h3 {
        padding-left: 2rem;
        padding-top: 1.5rem;
    }

    .carousel-item {
        height: 350px;
    }

    .ncard {
        padding-top: 2rem;
        padding-bottom: 2rem;
        margin-right: .5rem;
        margin-left: .5rem;
        height: 90%;
        min-width: 250px;
    }

    .form-row {
        margin-top: 1rem;
        margin-left: auto;
        margin-right: auto;
        max-width: 90%;
        text-align: left;
    }

    #about, #calc {
        padding: 1rem;
    }

    #calc {
        margin-top: 2rem;
        margin-bottom: 3rem;
    }

    #calc table {
        margin: 2rem;
    }

    #callback {
        max-width: 90%;
        padding-left: 2rem;
    }

    #callback input {
        width: 320px;
        margin: .5rem;

    }

    #callback button {
        background-color: #e9ecef;
        font-size: 1.25rem;
        margin: 0.5rem;
        width: 320px;
    }
</style>
