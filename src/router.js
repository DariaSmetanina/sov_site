import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import News from "@/components/News";
import CreateNews from "@/components/CreateNews";
import Login from "@/components/Login";
import Settings from "@/components/Settings";

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/createnews',
      component: CreateNews
    }
    ,
    {
      path: '/login',
      component: Login
    }
    ,
    {
      path: '/settings',
      component: Settings
    }

  ]
});


