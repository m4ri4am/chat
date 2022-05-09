<template>
  <div id="holder">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "Enter",
  components: {  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  created() {
    this.$store.dispatch("autoLogin");
  },
  watch: {
    isAuthenticated(val) {
      if (val) {
        this.$router.replace("/");
      }
    },
  },
};
</script>

<style></style>
