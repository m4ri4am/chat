import swal from "sweetalert";
import axios from "../../axios";
// import swal from "sweetalert";

const state = {
    messeges: [],

};

const getters = {
 
};
const mutations = {

};
const actions = {
  register({ commit }, data) {
    let payload = new FormData;
    for (const property in data) {
      if (!data.hasOwnProperty(property) || data[property] === null) {
        continue;
      }

      if (Array.isArray(data[property])) {
        for (const iterator of data[property]) {
          payload.append(property + '[]', iterator);
        }
      }
      else {
        payload.append(property, data[property]);
      }
    }

    return axios
      .post(`posts`, payload)
        .then((response) => {
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
