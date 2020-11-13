<template>
  <button class="k24-button">K24 Button. {{ Object.entries($data).map(([key, val]) => `${key}: ${val}`).join('; ') }}</button>
</template>

<script>
export default {
  name: 'K24Button',

  data() {
    return {
      host: "localhost:8080",
      hostname: "localhost",
      href: "http://localhost:8080/",
      origin: "http://localhost:8080",
      pathname: "/",
      port: "8080",
      protocol: "http:",
    };
  }
}
</script>

<style scoped>
.k24-button {
  border: 2px solid red;
}
</style>
