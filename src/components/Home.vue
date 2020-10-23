<template>
    <div class="Home">
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
            <div class="col">
                <a class="alink" href="/news">
                    <div class="jumbotron ncard">
                        <h4>СЗВ-ТД
                            <font-awesome-icon class="flag" icon="flag" style="color: red"/>
                        </h4>
                        <h6>20.10.2020</h6>
                        <p>Публикация от 22.04.2020 на портале Санкт-Петербургского Отделения ПФР “Новые сроки
                            отчетности о
                            приеме на работу и увольнении“</p>
                    </div>
                </a>
            </div>
            <div class="col">
                <a class="alink" href="/news">
                    <div class="jumbotron ncard">
                        <h4>Еще одна новость
                            <font-awesome-icon class="flag" icon="flag" style="color: green"/>
                        </h4>
                        <h6>20.10.2020</h6>
                        <p>В недрах тундры выдры в гетрах тырят в ведра ядра кедров. Выдрав с выдры в тундре гетры,
                            вытру выдрой ядра кедра, вытру гетрой выдре морду — ядра в вёдра, выдру в тундру.“</p>
                    </div>
                </a>
            </div>
            <div class="col">
                <a class="alink" href="/news">
                    <div class="jumbotron ncard">
                        <h4>И еще одна
                            <font-awesome-icon class="flag" icon="flag" style="color: yellow"/>
                        </h4>
                        <h6>20.10.2020</h6>
                        <p>На мели мы налима лениво ловили, меняли налима вы мне на линя. О любви не меня ли вы мило
                            молили, и в туманы лимана манили меня</p>
                    </div>
                </a>
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
                <th>Итого</th>
                </thead>
                <tbody>
                <tr>
                    <td>Квартальная отчетность для ООО</td>
                    <td>5 000,00</td>
                    <td>
                        <button class="btn">-</button>
                        1
                        <button class="btn">+</button>
                    </td>
                    <td>5 000,00</td>
                </tr>
                <tr>
                    <td>Количество первичных документов</td>
                    <td>50,00</td>
                    <td>
                        <button class="btn">-</button>
                        10
                        <button class="btn">+</button>
                    </td>
                    <td>500,00</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td><b>Итого</b></td>
                    <td><b>5 500,0</b></td>
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
    export default {
        name: 'Home',
        props: {
            msg: String
        }
    }
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

    #calc{
        margin-top: 2rem;
        margin-bottom: 3rem;
    }

    #calc table {
        margin: 2rem;
    }

    #callback{
        max-width: 90%;
        padding-left: 2rem;
    }
    #callback input{
        width: 320px;
        margin: .5rem;

}

    #callback button{
        background-color: #e9ecef;
        font-size: 1.25rem;
        margin: 0.5rem;
        width: 320px;
    }
</style>
