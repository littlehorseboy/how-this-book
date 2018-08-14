const types = {
  UPDATE_STEP: 'step/UPDATE_STEP',
};

const state = {
  books: [
    {
      id: 1,
      ISBN: '9789864766826',
      bookName: '重構 JavaScript',
      imgSrc: 'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/078/94/0010789427.jpg&v=5b1522bd&w=150&h=150',
      author: 'Evan Burchard',
      translator: '蔡存哲',
      desc: '描述, 簡介',
      publishing_house: '歐萊禮',
      publish_date: '2018/06/14',
      create_at: '建立時間',
    },
    {
      id: 2,
      ISBN: '9789863796725',
      bookName: 'JavaScript再上一層樓：用新一代Node.js把後端也搞定',
      imgSrc: 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/079/19/0010791908.jpg&w=150&h=150',
      author: '李鍇',
      translator: '',
      desc: '描述, 簡介',
      publishing_house: '佳魁資訊',
      publish_date: '2018/07/05',
      create_at: '建立時間',
    },
  ],
};

const getters = {
  getBooks() {
    return state.books;
  },
  getBook: state => ISBN => state.books.find(book => book.ISBN === ISBN),
};

const actions = {
  updateStep({ commit }, step) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (step) {
          commit(types.UPDATE_STEP, step);
          resolve();
        } else {
          reject();
        }
      }, 0);
    });
  },
};

const mutations = {
  [types.UPDATE_STEP](state, step) {
    state.step = step;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
