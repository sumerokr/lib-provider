<template>
  <button class="k24-button">{{ camelCased }} K24 Button. {{ Object.entries($data).map(([key, val]) => `${key}: ${val}`).join('; ') }}</button>
</template>

<script>
import camelCase from "lodash/camelCase";

export default {
  name: 'K24Button',

  data() {
    return {
      camelSource: "some tExt to be camel cased",
      host: "localhost:8080",
      hostname: "localhost",
      href: "http://localhost:8080/",
      origin: "http://localhost:8080",
      pathname: "/",
      port: "8080",
      protocol: "http:",
    };
  },

  computed: {
    camelCased() {
      return camelCase(this.camelSource);
    }
  }
}
</script>

<style scoped>
.k24-button {
  border: 2px solid red;
}
</style>
