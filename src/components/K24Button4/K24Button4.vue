<template>
  <button class="k24-button">K24 Button 4. {{ Object.entries($data).map(([key, val]) => `${key}: ${val}`).join('; ') }}</button>
</template>

<script>
export default {
  name: "K24Button4",

  data() {
    return {
      host: "github.com",
      hostname: "github.com",
      href: "https://github.com/sumerokr/lib-provider",
      origin: "https://github.com",
      pathname: "/sumerokr/lib-provider",
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
