import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/HelloWorld'
import Autor from '../pages/autor';
import OtraPagina from '../pages/otrapagina';
import NotFound from '../pages/notfFound';

Vue.use(VueRouter);

const routes = [
    {path:'/autor',name:'autor',component:Autor},
    {path:'/otrapagina',name:'otrapag',component:OtraPagina},
    {path:'/',name:'home',component:Home},
    {path:'*',component:NotFound}
]
const router = new VueRouter({
    mode:'history',
    routes:routes,
    base:process.env.BASE_URL
});

export default router;