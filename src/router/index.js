import Vue from 'vue';
import Router from 'vue-router';
import HowThisBook from '@/pages/HowThisBook';
import Home from '@/components/HowThisBook/Home';
import Book from '@/components/HowThisBook/Book';

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
          name: 'Home',
        },
        {
          path: '/book/:ISBN',
          component: Book,
          name: 'Book',
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});
