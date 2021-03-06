import Vue from 'vue';
import Router from 'vue-router';
import HowThisBook from '@/pages/HowThisBook';
import Home from '@/components/HowThisBook/Home';
import Search from '@/components/HowThisBook/Search';
import Book from '@/components/HowThisBook/Book';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HowThisBook',
      component: HowThisBook,
      children: [
        {
          path: '/',
          component: Home,
          name: 'Home',
        },
        {
          path: '/search',
          component: Search,
          name: 'Search',
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
