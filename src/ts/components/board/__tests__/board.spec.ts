// src/components/list/__tests__/list.spec.ts
import { mount } from "@vue/test-utils";
import Board from "../board.vue";
// store
import store from "../../../store/board";

describe("board.vue", () => {
  test("renders", () => {
    const wrapper = mount(Board, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.html()).toBe(
      '<div><div class="header"><div class="logo"></div></div><div class="container"><div class="board"><div class="list-wrapper"><div class="list"><div class="list-header">To Do</div><div class="list-cards"><div class="list-card">Hacer la cama <i class="fa fa-pencil-alt"></i></div></div><span><i class="fa fa-plus"></i> Add another card</span></div></div><div class="list-wrapper"><div class="list"><div class="list-header">Doing</div><div class="list-cards"></div><span><i class="fa fa-plus"></i> Add another card</span></div></div><div class="list-wrapper"><div class="list"><div class="list-header">Done</div><div class="list-cards"></div><span><i class="fa fa-plus"></i> Add another card</span></div></div></div></div></div>'
    );
  });
});
