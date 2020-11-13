<template>
    <div class="Notice">
        <main role="main" class="container">
            <div class="form-row">
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
        </main>
    </div>
</template>

<script>
    import MainService from '../../services/main.service';

    export default {
        name: 'news_list',
        data: function () {
            return {
                news_list: []
            };
        },
        mounted() {
            MainService.getAllNews().then(
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
    };
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
        height: 90%;
        min-width: 300px;
        max-width: 350px;
    }

</style>
