<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content}` : `Wasateam Interview`
    }}</template>
  </metainfo>
  <div id="nav">
    <router-link to="/">Interviewees Information</router-link> |
    <router-link to="/information">More About Eide</router-link>
  </div>
  <router-view />
</template>
<script>
import { useMeta } from "vue-meta";

export default {
  setup() {
    useMeta({
      title: "Wasateam Interview",
      htmlAttrs: { lang: "en", amp: true },
      description: "Simple APP for Wasateam interview test",
    });
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
