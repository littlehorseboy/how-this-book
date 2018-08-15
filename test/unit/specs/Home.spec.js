import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueMDCAdapter from 'vue-mdc-adapter';
import Vuex from 'vuex';
import store from '@/store';
import Home from '@/components/HowThisBook/Home';

const localVue = createLocalVue();
localVue.use(VueMDCAdapter);
localVue.use(Vuex);
const wrapper = shallowMount(Home, { store, localVue });

describe('Home.vue', () => {
  it('首頁最上面 .home__search-container 的 backgroundImage 是 book-863418_1920', () => {
    expect(wrapper.find('.home__search-container').element.style.backgroundImage)
      .to.include('book-863418_1920');
  });
});
