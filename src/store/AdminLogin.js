import axios from "../axios";
import swal from 'sweetalert';
export default {
    state() {
        return {
            token: null || localStorage.getItem("token"),
            didLogOut: false,
            error: null,
        };
    },
    mutations: {
        setAdmin(state, payload) {
            state.token = payload.idToken;
            state.didLogOut = false;
        },
        setError(state, payload) {
            state.error = payload;
        },
    },
    actions: {
        async login({ commit }, { email, password }) {
            let data = new FormData();
            data.append("Username", email);
            data.append("Password", password);
            const response = await axios.post("/api/v1/coop/auth/signin", data)
                .catch((error) => {
                    swal("Error ! ...", error.response.data.message, "error");
                });
            
            if(response.status === 401){
                alert("Invalid username or password");
            }
            if (response.status === 202) {
                let dataResponse = response.data.model;
                localStorage.setItem("token", dataResponse.token);
                commit("setAdmin", {
                    idToken: dataResponse.token,
                });

                commit("setError", null);
                // localStorage.setItem("token", response.data.idToken);
            } else {

                commit("setError", response.data.message);
            }
        },
        async autoLogin({ commit }) {
            let token = localStorage.getItem("token");
            if (!token) {
                return;
            } else {
                commit("setAdmin", {
                    idToken: token,
                    didLogOut: false,
                });
            }
        },

    },
    getters: {
        isAuthenticated(state) {
            return state.token !== null;
        },
        getErrorMessage(state) {
            return state.error;
        },
    },
};