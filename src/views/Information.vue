<template>
  <div class="wrapper">
    <h1 class="title">Hello, this is Eide's information</h1>
    <p>Type "Pet" or "Vtuber" to see more...</p>
    <input v-model="inputText" type="text" />
    <p class="result">{{ content }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputText: "",
    };
  },
  computed: {
    content() {
      if (this.inputText === "Vtuber") {
        return "Usada Pekora";
      } else if (this.inputText === "Pet") {
        return "hamster";
      } else {
        return "Please check your word :(";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  color: var(--text-color-primary);
  margin-bottom: 50px;
}
.result {
  margin: 50px 0;
  font-size: 2rem;
}
</style>
