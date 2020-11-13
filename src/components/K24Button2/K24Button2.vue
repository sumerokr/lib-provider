<template>
  <button class="k24-button">K24 Button 2. {{ Object.entries($data).map(([key, val]) => `${key}: ${val}`).join('; ') }}</button>
</template>

<script>
export default {
  name: "K24Button2",

  data() {
    return {
      host: "www.google.com",
      hostname: "www.google.com",
      href: "https://www.google.com/search?q=npm+run-script&oq=npm+run-s&aqs=chrome",
      origin: "https://www.google.com",
      pathname: "/search",
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
