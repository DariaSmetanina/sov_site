import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import News from "@/components/news/News";
import AllNews from "@/components/news/AllNews";
import CreateNews from "@/components/news/CreateNews";
import Login from "@/components/Login";
import Register from "@/components/Register";
import Settings from "@/components/personal/Settings";
import Notice from "@/components/personal/Notice";
import SendMessage from "@/components/SendMessage";
import Templates from "@/components/personal/Templates";
import PersonalArea from "@/components/personal/PersonalArea";
import Payment from "@/components/personal/Payment";
import ChooseOrg from "@/components/personal/ChooseOrg";

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
            path: '/news/:id',
            component: News
        },
        {
            path: '/allnews',
            component: AllNews
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
            path: '/register',
            component: Register
        }
        ,
        {
            path: '/settings',
            component: Settings
        }
        ,
        {
            path: '/notifications',
            component: Notice
        }
        ,
        {
            path: '/message',
            component: SendMessage
        }
        ,
        {
            path: '/templates',
            component: Templates
        }
        ,
        {
            path: '/personal/:inn',
            component: PersonalArea
        }
        ,
        {
            path: '/choose',
            component: ChooseOrg
        }
        ,
        {
            path: '/payments',
            component: Payment
        }

    ]
});


