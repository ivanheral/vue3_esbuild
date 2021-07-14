<template>
  <Container>
    <div class="board">
      <List
        class="list-wrapper"
        v-for="(item, i) in list"
        v-bind:key="i"
        :list="item"
      />
    </div>
  </Container>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import Container from "../container/container.vue";
import List from "../list/list.vue";

export default defineComponent({
  name: "Board",
  components: { Container, List },
  setup() {
    const store = useStore();
    const list = ref<number>(store.state.list);
    return { list };
  },
});
</script>
<style lang="scss">
.board {
  overflow: auto;
  white-space: nowrap;
  height: calc(100% - 4px);
  padding-top: 4px;
}
</style>
