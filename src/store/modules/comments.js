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
            "ISBN": "9789864766826",
            "name": "匿名",
            "advantage": "我覺得可以",
            "disadvantage": "我覺得不行",
            "evaluation": "好",
            "anonymous": "好",
            "create_at": "2018/08/19, 01:51:17",
            "id": 1
          },
          {
            "ISBN": "9789864766826",
            "name": "匿名",
            "advantage": "我覺得可以",
            "disadvantage": "我覺得不行",
            "evaluation": "普",
            "anonymous": "普",
            "create_at": "2018/08/19, 01:51:41",
            "id": 2
          },
          {
            "ISBN": "9789864766826",
            "name": "匿名",
            "advantage": "我覺得可以",
            "disadvantage": "我覺得不行",
            "evaluation": "好",
            "anonymous": "好",
            "create_at": "2018/08/19, 01:53:07",
            "id": 3
          },
          {
            "ISBN": "9789864766826",
            "name": "匿名",
            "advantage": "我覺得可以\\n我覺得可以",
            "disadvantage": "我覺得不行",
            "evaluation": "普",
            "anonymous": "普",
            "create_at": "2018/08/19, 01:58:31",
            "id": 4
          },
          {
            "ISBN": "9789864766826",
            "name": "匿名",
            "advantage": "ㄎ",
            "disadvantage": "我覺得不行\\n我覺得不行\\n我覺得不行",
            "evaluation": null,
            "anonymous": null,
            "create_at": "2018/08/19, 02:02:23",
            "id": 5
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
