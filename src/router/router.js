import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../components/Main'
import TranslitPage from '../views/TranslitPage.vue'
import ToDo from '../components/ToDo.vue'
import LoginForm from '../components/LoginForm.vue'
import ParentApp from '../components/ParentApp.vue'
import ModalApp from '../components/ModalApp.vue'

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
    {
      path: '/todo',
      name: 'ToDo',
      component: ToDo,
    },
    {
      path: '/login',
      name: 'LoginForm',
      component: LoginForm,
    },
    {
      path: '/parent',
      name: 'Parent',
      component: ParentApp
    },
    {
      path: '/modal',
      name: 'Modal',
      component: ModalApp
    }
  ]
});

export default router;
