
import axios from "../../axios";


const state = {
    data: {},

};

const getters = {
 
};
const mutations = {
  personalData(state, payload) {
    state.data = payload;
  },

};
const actions = {
  register({commit}, data) {
    let payload = new FormData;
    payload.append("title", data.name);
    payload.append("body", data.email);
    payload.append("userId", data.password);

    return axios
      .post(`jsonplaceholder.typicode.com/posts`, payload)
        .then((response) => {
            commit("personalData", response.data);
            alert("Added!", `Data Saved`, "success");
            return response;
        })
    },
};

export default {
  namespaced: true,
  name: "signup",
  state,
  getters,
  actions,
  mutations,
};
