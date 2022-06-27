<template>
  <div>{{ message }}</div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Main",
  setup() {
    const message = ref("Main");
    return {
      message,
    };
  },
};
</script>

<style scoped></style>
