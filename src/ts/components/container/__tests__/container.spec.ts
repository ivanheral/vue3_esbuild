// src/components/container/__tests__/container.spec.ts
import { mount } from "@vue/test-utils";
import Container from "../container.vue";

describe("container.vue", () => {
  test("renders", () => {
    const wrapper = mount(Container);
    expect(wrapper.html()).toBe(
      '<div><div class="header"><div class="logo"></div></div><div class="container"></div></div>'
    );
  });
});
