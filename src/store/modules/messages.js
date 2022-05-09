import swal from "sweetalert";
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
  deleteMessage(state, payload) {
    state.messeges.splice(payload, 1);

  }
};
const actions = {
  fetchMessagesList({ commit }) {
    return axios
      .get('jsonplaceholder.typicode.com/posts')
      .then((response) => {
        commit("setMessagesList", response.data);
        console.log(response.data);
        return response;
      });
  },

  removeMessage({ commit }, id) {
    return axios
      .delete(`jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
            commit("deleteMessage", response.data);
            swal("Deleted!", `Your message has been with id ${id} deleted.`, "success");
            return response;
        })
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
