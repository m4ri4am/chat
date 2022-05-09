import axios from "../../axios";
// import swal from "sweetalert";

const state = {
    messeges: [],

};

const getters = {
  getMessagesList: (state) => state.messeges,

};
const mutations = {
  setMessagesList(state, payload) {
    state.messeges = payload;
  },
};
const actions = {
  fetchMessagesList({ commit }) {
    return axios
      .get('posts')
      .then((response) => {
        commit("setMessagesList", response.data);
        console.log(response.data);
        return response;
      });
  },

};

export default {
  namespaced: true,
  name: "messages",
  state,
  getters,
  actions,
  mutations,
};
