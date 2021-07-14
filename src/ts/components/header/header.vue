<template>
  <div class="header"><div class="logo"></div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>
<style scoped>
.header {
  background-color: rgba(0, 0, 0, 0.15);
  min-height: 40px;
  max-height: 40px;
  overflow: hidden;
  line-height: 40px;
  text-align: center;
}
.logo {
  background-image: url("https://a.trellocdn.com/prgb/dist/images/header-logo-2x.01ef898811a879595cea.png");
  background-position: 100% 50%;
  background-repeat: no-repeat;
  background-size: 80px 30px;
  cursor: pointer;
  display: inline-block;
  height: 40px;
  width: 80px;
}
</style>
