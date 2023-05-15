import Vue from 'vue';
import VueRouter from 'vue-router';
import Activities from '../components/Activities';
import {resTypesToActivities} from '../util/parse.util';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'activities',
    component: Activities,
    props: {apiVer: 1}
  },
  {
    path: '/alt',
    name: 'activities-alt',
    component: Activities,
    props: {apiVer: 2, transformer: resTypesToActivities}
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
