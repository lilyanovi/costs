import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoriesList: [],
    showForm: false,
    maxVisibleButtons: 3,
    perPage: 4,
    currentPage: 1,
    isPopupActive: false
  },
  getters: {
    getFullPaymentValue: state => {
      return state.paymentsList.reduce((res, cur) => res+cur.amount, 0)
    },
    getPaymentsList: state => state.paymentsList,
    getCategoryList: state => state.categoriesList,
    getCurrentPage: state => state.currentPage,
    getMaxVisibleButtons: state => state.maxVisibleButtons,
    getShowForm: state => state.showForm,
    getTotalPages: state => {
      let l = state.paymentsList.length,
      s = state.perPage;
      return Math.ceil(l / s);
    },
    getPaginatedData: state => {
      const start = (state.currentPage - 1) * state.perPage,
        end = start + state.perPage;
      return state.paymentsList.slice(start, end);
    },
    getId: state =>
      state.paymentsList.map(({ id }) => id).sort((a, b) => a - b)[
        state.paymentsList.length - 1
      ],

  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    },
    addDataToPaymentsList(state, payload) {
      state.paymentsList.push(payload)
    },
    setCurrentPage: (state, payload) => (state.currentPage = payload),
    setIsPopupActive: (state, payload) => (state.isPopupActive = payload),
    setShowForm: (state, payload) => (state.showForm = payload),
    setCategoriesListData: (state,payload) => {
      state.categoriesList = payload
    }
  },
  actions: {
    async fetchData({ commit }) {
      const list = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            {
              id: 1,
              date:'22.10.2022',
              type: 'Food',
              amount: 170
            },
            {
              id: 2,
              date:'23.10.2022',
              type: 'Transport',
              amount: 200
            },
            {
              id: 3,
              date:'24.10.2022',
              type: 'Food',
              amount: 700
            },
            {
              id: 4,
              date:'24.10.2022',
              type: 'Food',
              amount: 670
            },
            {
              id: 5,
              date:'25.10.2022',
              type: 'Health',
              amount: 2000
            },
            {
              id: 6,
              date:'25.10.2022',
              type: 'Sport',
              amount: 30
            },
            {
              id: 7,
              date:'26.10.2022',
              type: 'Food',
              amount: 1700
            },
            {
              id: 8,
              date:'27.10.2022',
              type: 'Health',
              amount: 5000
            },
            { id: 9,
              date:'28.10.2022',
              type: 'Food',
              amount: 120
            }
          ]);
        }, 1000);
      });
      return commit("setPaymentsListData", list);
    },
    async fetchCaterory({ commit }) {
      const list = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(['Food','Health','Sport','Transport','Clothing','Saving','Credit','Housing','Education','Technique','Household products','Hobby']);
        }, 1000);
      });
      return commit("setCategoriesListData", list);
    }
  },
  modules: {
  }
})
