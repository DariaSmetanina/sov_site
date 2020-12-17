import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import News from "@/components/news/News";
import AllNews from "@/components/news/AllNews";
import CreateNews from "@/components/news/CreateNews";
import Login from "@/components/Login";
import Register from "@/components/Admin/Register";
import Settings from "@/components/personal/Settings";
import Notice from "@/components/personal/Notice";
import Cloud from "@/components/personal/Cloud";
import SendNotification from "@/components/personal/SendNotification";
import SendMessage from "@/components/SendMessage";
import Templates from "@/components/personal/Templates";
import PersonalArea from "@/components/personal/PersonalArea";
import DeleteOrg from "@/components/personal/DeleteOrg";
import Payment from "@/components/personal/Payment";
import ChooseOrg from "@/components/personal/ChooseOrg";
import AddOrganization from "@/components/Admin/AddOrganization";
import AddOrganizationToUser from "@/components/Admin/AddOrganizationToUser";

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
            path: '/addOrganization',
            component: AddOrganization
        }
        ,
        {
            path: '/addOrganizationToUser',
            component: AddOrganizationToUser
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
            path: '/createNotification',
            component: SendNotification
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
            path: '/cloud/:inn',
            component: Cloud
        }
        ,
        {
            path: '/delete/:inn',
            component: DeleteOrg
        }
        ,
        {
            path: '/choose/:goto',
            component: ChooseOrg
        }
        ,
        {
            path: '/payments',
            component: Payment
        }

    ]
});


