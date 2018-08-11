import Vue from 'vue';
import Router from 'vue-router';
import HowThisBook from '@/pages/HowThisBook';
import Home from '@/components/HowThisBook/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HowThisBook',
      component: HowThisBook,
      children: [
        {
          path: '/',
          component: Home,
        },
      ],
    },
  ],
});
