<template>
    
  <div class="container">
    <h1>Login</h1>
    <hr>
    <div ref="form">
    <label for="email"><b>Email</b></label>
    <input type="text" v-model="credentials.email" placeholder="Enter Email" name="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" v-model="credentials.password" placeholder="Enter Password" name="password" required>

    <div class="signup-btn-div">
      <button @click="login(credentials)" class="signInBtn">Sign Up</button>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  name: "login",
  data() {
    return {
      credentials: {
      email: "",
      password: "",
    },

    };
  },
 methods: {
   
    async login(credentials) {
   
        try {
          await this.$store.dispatch("login", credentials);
          this.$router.push({
            path: "/chat",
          });
          history.pushState(null, null, null);
          window.addEventListener("popstate", function () {
            history.pushState(null, null, null);
          });
          setTimeout("location.reload(true)", 100);
        } catch (e) {
        return e;
        }
      }
    },
};
</script>

<style scoped>
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

button {
  background-color: #0454aa;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 20%;
  opacity: 0.9;
  border-radius: 20px ;
}

button:hover {
  opacity:1;
}

.cancelbtn, .signInBtn {
  float: left;
  width: 10%;
}

.container {
  padding: 16px;
}

@media screen and (max-width: 300px) {
  .cancelbtn, .signInBtn {
     width: 100%;
  }
}
</style>