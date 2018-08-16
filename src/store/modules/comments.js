const types = {
  UPDATE_STEP: 'step/UPDATE_STEP',
};

const state = {
  comments: [
    {
      id: 1,
      book_id: 1,
      ISBN: '9789864766826',
      name: '匿名',
      comment: `評論在此
      評論在此
      評論在此`,
      create_at: '建立時間',
    },
    {
      id: 2,
      book_id: 1,
      ISBN: '9789864766826',
      name: '匿名',
      comment: `評論在此
      評論在此
      評論在此`,
      create_at: '建立時間',
    },
    {
      id: 3,
      book_id: 2,
      ISBN: '9789863796725',
      name: '匿名',
      comment: `評論在此
      評論在此
      評論在此`,
      create_at: '建立時間',
    },
  ],
};

const getters = {
  getComments: state => ISBN => state.comments.filter(comment => comment.ISBN === ISBN),
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
