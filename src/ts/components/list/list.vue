<template>
  <div class="list-wrapper">
    <div class="list">
      <div class="list-header">{{ list.title }}</div>
      <div class="list-cards">
        <div class="list-card" v-for="(card, i) in list.cards" v-bind:key="i">
          {{ card }}
          <i class="fa fa-pencil-alt" @click="removeCard(list.title, card)" />
        </div>
      </div>
      <span v-if="show" @click="show = !show"
        ><i class="fa fa-plus" /> Add another card</span
      >
      <div v-else class="list-footer">
        <div class="textarea-container">
          <textarea
            v-model="name_card"
            placeholder="Enter a title for this card..."
          ></textarea>
        </div>
        <button @click="addCard(list.title, name_card)">Add Card</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "List",
  methods: {
    addCard: function (title: string, name: string) {
      if (name !== "") {
        this.show_options();
        this.$store.commit("addcard", { title: title, name: name });
      }
    },
    removeCard: function (title: string, name: string) {
      this.$store.commit("removecard", { title: title, name: name });
    },
  },
  props: {
    list: {
      required: false,
    },
  },
  components: {},
  setup() {
    const name_card = ref<string>("");
    const show = ref<boolean>(true);

    function show_options() {
      show.value = !show.value;
    }
    return { name_card, show, show_options };
  },
});
</script>
<style lang="scss" scoped>
button {
  background-color: #5aac44;
  border: none;
  font-size: 14px;
  border-radius: 3px;
  padding: 6px 12px;
  color: #fff;
  cursor: pointer;
}

.textarea-container {
  min-height: 54px;
  width: 100%;
  overflow: hidden;
  border-radius: 3px;
  background: #fff;
  border: none;
  margin-bottom: 8px;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  textarea {
    width: 100%;
    border: none;
    padding: 6px;
  }
}
.list-cards {
  overflow: auto;
  height: calc(100% - 220px);
  .list-card {
    background-color: #fff;
    * {
      display: none;
      float: right;
      line-height: 32px;
      height: 32px;
    }
    &:hover {
      background: none;
      * {
        display: block;
      }
    }
    border-radius: 3px;
    box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
    margin-bottom: 8px;
    height: 32px;
    padding: 0px 8px;
    line-height: 32px;
    cursor: pointer;
  }
}
.list-wrapper {
  &:first-child {
    margin-left: 8px;
  }
  & > * {
    padding: 10px 8px;
    padding-bottom: 0px;
  }
  width: 272px;
  margin: 0 4px;
  display: inline-block;
}

.list {
  background-color: #ebecf0;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  white-space: normal;
  .list-footer,
  .list-header {
    margin-bottom: 10px;
  }
  span {
    border-radius: 3px;
    color: #5e6c84;
    display: block;
    flex: 1 0 auto;
    margin: 2px 0 8px 0px;
    padding: 4px 8px;
    position: relative;
    text-decoration: none;
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
    &:hover {
      background-color: rgba(9, 30, 66, 0.08);
      color: #172b4d;
    }
  }
}
</style>
