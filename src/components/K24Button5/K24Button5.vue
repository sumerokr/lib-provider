<template>
  <button class="k24-button">K24 Button 5. {{ Object.entries($data).map(([key, val]) => `${key}: ${val}`).join('; ') }}</button>
</template>

<script>
export default {
  name: "K24Button5",

  data() {
    return {
      host: "dev.to",
      hostname: "dev.to",
      href: "https://dev.to/siegerts",
      origin: "https://dev.to",
      pathname: "/siegerts",
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
