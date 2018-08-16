import Vue from 'vue';
import { mount, createLocalVue } from '@vue/test-utils';
import VueMDCAdapter from 'vue-mdc-adapter';
import Vuex from 'vuex';
import _ from 'lodash';
import store, { books } from '@/store';
import Home from '@/components/HowThisBook/Home';

Vue.use(VueMDCAdapter);
Vue.use(Vuex);

const localVue = createLocalVue();
localVue.use(VueMDCAdapter);
localVue.use(Vuex);
const wrapper = mount(Home, {
  localVue,
  store,
});

describe('Home.vue', () => {
  // 要好好研究這個文章 想用 vuex 整個失敗阿
  // https://medium.com/tyrone-tudehope/vue-js-vuex-and-testing-an-introduction-7a9df587d6ed
  let testOptions;
  beforeEach(() => {
    testOptions = _.cloneDeep(books);
  });

  // const Constructor = Vue.extend({ ...Home,
  //   store: new Vuex.Store({
  //     modules: {
  //       books,
  //     },
  //     strict: true,
  //   }),
  // });

  // const vm = new Constructor().$mount();

  // it('vm', () => {
  //   expect(vm).to.equal('Welcome to Your Vue.js App');
  // });

  it('done', (done) => {
    function assertions() {
      this.items.length.to.equal(1); // We know one item should exist
      this.$el.querySelectorAll('ul > li').length.to.equal(1);
      done();
    }

    const updated = function updated() {
      assertions.bind(this);
      Vue.nextTick()
        .then(assertions.bind(this))
        .catch(done);
    };
    const Component = Vue.extend({ ...Home,
      store: new Vuex.Store(testOptions),
      updated,
    });
    new Component().$mount();
  });

  it('首頁最上面 .home__search-container 的 backgroundImage 是 book-863418_1920', () => {
    expect(wrapper.find('.home__search-container').element.style.backgroundImage)
      .to.include('book-863418_1920');
  });

  it('重構 JavaScript', () => {
    expect(wrapper.find('.home__book-container__messages-component__card').element).toContain('重構 JavaScript');
  });

  // it('vm', () => {
  //   expect(wrapper.vm).toBe(true);
  // });

  // it('button', () => {
  //   expect(wrapper.contains('button')).toBe(true);
  // });

  // it('books 有抓到 vuex 回來的資料?', () => {
  //   expect(wrapper.props()).to.equal('Object');
  // });
});
