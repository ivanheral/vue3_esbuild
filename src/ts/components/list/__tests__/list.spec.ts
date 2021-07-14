// src/components/list/__tests__/list.spec.ts
import { mount } from "@vue/test-utils";
import List from "../list.vue";
// store
import store from "../../../store/board";

describe("list.vue", () => {
  test("renders", () => {
    const wrapper = mount(List, {
      global: {
        plugins: [store],
      },
      props: {
        list: { title: "To Do", cards: ["Hacer la cama"] },
      },
    });
    expect(wrapper.html()).toBe(
      '<div class="list-wrapper"><div class="list"><div class="list-header">To Do</div><div class="list-cards"><div class="list-card">Hacer la cama <i class="fa fa-pencil-alt"></i></div></div><span><i class="fa fa-plus"></i> Add another card</span></div></div>'
    );
  });
});
