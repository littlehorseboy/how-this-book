import Vue from 'vue';
import VueMDCAdapter from 'vue-mdc-adapter';
import HelloWorld from '@/components/HelloWorld';

Vue.use(VueMDCAdapter);

describe('HelloWorld.vue', () => {
  const Constructor = Vue.extend(HelloWorld);
  const vm = new Constructor().$mount();
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('.hello h1').textContent)
    .to.equal('Welcome to Your Vue.js App');
  });

  it('vm.msg === Welcome to Your Vue.js App', () => {
    expect(vm.msg).to.equal('Welcome to Your Vue.js App');
  });
});
