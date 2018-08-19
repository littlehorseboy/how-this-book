import axios from 'axios';

const types = {
  GET_COMMENTS_INAXIOS: 'comments/GET_COMMENTS_INAXIOS',

  POST_COMMENT_INAXIOS: 'comments/POST_COMMENT_INAXIOS',
};

const state = {
  comments: [],
};

const getters = {
  getComments: state => ISBN => state.comments.filter(comment => comment.ISBN === ISBN),
};

const actions = {
  getCommentsInAxios({ commit }) {
    axios({
      method: 'get',
      url: 'http://localhost:3000/comments',
    })
      .then((response) => {
        commit(types.GET_COMMENTS_INAXIOS, response.data);
      })
      .catch((error) => {
        commit(types.GET_COMMENTS_INAXIOS, JSON.parse(`[
          {
            "id": 1,
            "book_id": 1,
            "ISBN": "9789864766826",
            "name": "匿名",
            "advantage": "aaa",
            "disadvantage": "bbb",
            "evaluation": null,
            "anonymous": "匿名",
            "create_at": "建立時間"
          },
          {
            "id": 2,
            "book_id": 1,
            "ISBN": "9789864766826",
            "name": "匿名",
            "advantage": "ccc",
            "disadvantage": "ddd",
            "evaluation": null,
            "anonymous": "匿名",
            "create_at": "建立時間"
          }
        ]`));
        throw error;
      });
  },
  postCommentInAxios({ commit }, comment) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: 'http://localhost:3000/comments',
        data: comment,
      })
        .then((response) => {
          commit(types.POST_COMMENT_INAXIOS, response.data);
          resolve();
        })
        .catch((error) => {
          commit(types.POST_COMMENT_INAXIOS, comment);
          reject(error);
          // throw error;
        });
    });
  },
};

const mutations = {
  [types.GET_COMMENTS_INAXIOS](state, comments) {
    state.comments = comments;
  },
  [types.POST_COMMENT_INAXIOS](state, comment) {
    state.comments.push(comment);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
