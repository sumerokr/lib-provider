<template>
  <button class="k24-button">K24 Button 3. {{ Object.entries($data).map(([key, val]) => `${key}: ${val}`).join('; ') }}</button>
</template>

<script>
export default {
  name: "K24Button3",

  data() {
    return {
      host: "calendar.google.com",
      hostname: "calendar.google.com",
      href: "https://calendar.google.com/calendar/u/0/r?tab=mc&pli=1",
      origin: "https://calendar.google.com",
      pathname: "/calendar/u/0/r",
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
