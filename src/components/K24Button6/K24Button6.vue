<template>
  <button class="k24-button">K24 Button 2. {{ Object.entries($data).map(([key, val]) => `${key}: ${val}`).join('; ') }}</button>
</template>

<script>
export default {
  name: "K24Button6",

  data() {
    return {
      hash: "#library",
      host: "cli.vuejs.org",
      hostname: "cli.vuejs.org",
      href: "https://cli.vuejs.org/guide/build-targets.html#library",
      origin: "https://cli.vuejs.org",
      pathname: "/guide/build-targets.html",
      port: "",
      protocol: "https:",
    };
  },
};
</script>

<style scoped>
.k24-button {
  border: 2px solid red;
}
</style>
