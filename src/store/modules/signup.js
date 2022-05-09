import swal from "sweetalert";
import axios from "../../axios";
// import swal from "sweetalert";

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
    payload.append("name", data.name);
    payload.append("email", data.email);
    payload.append("password", data.password);
    // for (const property in data) {
    //   if (!data.hasOwnProperty(property) || data[property] === null) {
    //     continue;
    //   }

    //   if (Array.isArray(data[property])) {
    //     for (const iterator of data[property]) {
    //       payload.append(property + '[]', iterator);
    //     }
    //   }
    //   else {
    //     payload.append(property, data[property]);
    //   }
    // }

    return axios
      .post(`jsonplaceholder.typicode.com/posts`, payload)
        .then((response) => {
            commit("personalData", response.data);
            swal("Added!", `Data Saved`, "success");
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
