<template>
    <div class="News">
        <main role="main" class="container">
            <div class="jumbotron ncard">

                <h1>{{request.title}}
                    <font-awesome-icon :class="'flagClass-'+request.importance"  icon="flag"/>
                </h1>
                <h6>{{request.date}}</h6>
                <p>
                <p><b>{{request.mainPart}}</b></p>
                <p>{{request.text}}</p>
                 <img src="">
            </div>

        </main>

    </div>
</template>

<script>
import MainService from '../services/main.service';
import News from '../models/news.js'

    export default {
        name: 'News',
        data() {
            return {
                request: new News()
            };
        },
        mounted() {
            MainService.getNews(this.$route.params.id).then(
                response => {
                    this.request = response.data;
                },
                error => {
                    this.request =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString();
                }
            );
        }
     };
</script>


<style scoped>

    h1 {
        padding-left: 10%;
    }

    h6 {
        padding-bottom: 1.5rem;
        padding-left: 10%;
    }

    img {
        max-width: 100%;
        border-radius: .3rem;
    }

    .ncard {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }

</style>
