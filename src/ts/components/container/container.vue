<template>
  <div>
    <Header />
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "../header/header.vue";

export default defineComponent({
  name: "Container",
  components: { Header },
});
</script>
<style scoped>
.container {
  position: absolute;
  top: 40px;
  bottom: 0px;
  right: 0px;
  left: 0px;
}
</style>
