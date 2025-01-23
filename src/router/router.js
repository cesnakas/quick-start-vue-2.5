import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../components/Main'
import TranslitPage from '../views/TranslitPage.vue'

Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/translit',
      name: 'Translit',
      component: TranslitPage,
    },
  ]
});

export default router;
