import Vue from 'vue';
import VueMDCAdapter from 'vue-mdc-adapter';
import HowThisBook from '@/pages/HowThisBook';

Vue.use(VueMDCAdapter);

describe('HowThisBook.vue', () => {
  const Constructor = Vue.extend(HowThisBook);
  const vm = new Constructor().$mount();

  it('vm.msg === Welcome to Your Vue.js App', () => {
    expect(vm.msg).to.equal('Welcome to Your Vue.js App');
  });

  it('main 元素裡面有包含 router-view 元素', () => {
    expect(vm.$el.querySelector('main').innerHTML)
      .to.include('router-view');
  });
});
