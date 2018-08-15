import Vue from 'vue';
import VueMDCAdapter from 'vue-mdc-adapter';
import Vuex from 'vuex';
import Home from '@/components/HowThisBook/Home';

Vue.use(VueMDCAdapter);

describe('Home.vue', () => {
  const Constructor = Vue.extend(Home);
  const vm = new Constructor().$mount();
  vm.use(Vuex);

  it('vm === undefined', () => {
    expect(vm).to.equal(undefined);
  });

  it('首頁最上面 .home__search-container 的 backgroundImage 是 book-863418_1920.jpg', () => {
    expect(vm.$el.querySelector('.home > .home__search-container').style.backgroundImage)
      .to.include('book-863418_1920.jpg');
  });
});
