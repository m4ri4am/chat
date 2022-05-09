<template>
    
  <div class="container">
    <h1>Sign Up</h1>
    <hr>
     <label for="Name"><b>Name</b></label>
    <input type="text" v-model="form.name" placeholder="Enter Name" name="Name" required>

    <label for="email"><b>Email</b></label>
    <input type="text" v-model="form.email" placeholder="Enter Email" name="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" v-model="form.password" placeholder="Enter Password" name="password" required>

    <div class="signup-btn-div">
      <button @click="register(form)" class="signupbtn">Sign Up</button>
    </div>
  </div>
</template>

<script>
import {  mapActions } from "vuex";
export default {
  name: "signup",
  data() {
    return {
       form:{}
    };
  },
 methods: {
    ...mapActions("signup", ["register"]),
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

.cancelbtn, .signupbtn {
  float: left;
  width: 10%;
}

.container {
  padding: 16px;
}

@media screen and (max-width: 300px) {
  .cancelbtn, .signupbtn {
     width: 100%;
  }
}
</style>