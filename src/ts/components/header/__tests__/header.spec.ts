// src/components/header/__tests__/list.spec.ts
import { mount } from "@vue/test-utils";
import Header from "../header.vue";

describe("header.vue", () => {
  test("renders", () => {
    const wrapper = mount(Header);
    expect(wrapper.html()).toBe(
      '<div class="header"><div class="logo"></div></div>'
    );
  });
});
