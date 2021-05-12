<template>
  <div class="wrapper">
    <div>
      <h1 class="title">Wasateam Simple Test</h1>
      <div>
        <h3>Description</h3>
        <p>This is Eide's simple tech test for Wasateam.</p>
      </div>
      <FetchAPI></FetchAPI>
    </div>
  </div>
</template>
<script>
import FetchAPI from "@/components/FetchAPI.vue";

export default {
  name: "Interviewees",
  components: {
    FetchAPI,
  },
};
</script>
<style lang="scss" scoped>
.title {
  color: var(--text-color-primary);
}
</style>
