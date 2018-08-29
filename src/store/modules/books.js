import axios from 'axios';

const types = {
  GET_BOOKS_INAXIOS: 'books/GET_BOOKS_INAXIOS',
};

const state = {
  books: [],
};

const getters = {
  getBooks() {
    return state.books;
  },
  getBook: state => ISBN => state.books.find(book => book.ISBN === ISBN),
  getKeywordBooks: state => keyword => state.books.filter((book) => {
    const bookName = book.bookName.toLocaleLowerCase();
    return bookName.indexOf(keyword.toLocaleLowerCase()) !== -1;
  }),
};

const actions = {
  getBooksInAxios({ commit }) {
    axios({
      method: 'get',
      url: 'http://localhost:3000/books',
    })
      .then((response) => {
        commit(types.GET_BOOKS_INAXIOS, response.data);
      })
      .catch((error) => {
        commit(types.GET_BOOKS_INAXIOS, JSON.parse(`[
          {
            "id": 1,
            "ISBN": "9789864766826",
            "bookName": "重構 JavaScript",
            "imgSrc": "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/078/94/0010789427.jpg&v=5b1522bd&w=150&h=150",
            "author": "Evan Burchard",
            "translator": "蔡存哲",
            "desc": "描述, 簡介",
            "publishing_house": "歐萊禮",
            "publish_date": "2018/06/14",
            "create_at": "建立時間"
          },
          {
            "id": 2,
            "ISBN": "9789863796725",
            "bookName": "JavaScript再上一層樓：用新一代Node.js把後端也搞定",
            "imgSrc": "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/079/19/0010791908.jpg&w=150&h=150",
            "author": "李鍇",
            "translator": "",
            "desc": "描述, 簡介",
            "publishing_house": "佳魁資訊",
            "publish_date": "2018/07/05",
            "create_at": "建立時間"
          }
        ]`));
        throw error;
      });
  },
};

const mutations = {
  [types.GET_BOOKS_INAXIOS](state, books) {
    state.books = books;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
