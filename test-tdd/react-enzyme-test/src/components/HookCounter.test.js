import React from "react";
import { mount } from "enzyme";
import HookCounter from "./HookCounter";

describe("<HookCounter /", () => {
  it("스냅샷 매칭", () => {
    const wrapper = mount(<HookCounter />);
    expect(wrapper).toMatchSnapshot();
  });
  it("증가", () => {
    const wrapper = mount(<HookCounter />);
    let plusButton = wrapper.findWhere(
      (node) => node.type() === "button" && node.text() === "+1"
    );
    plusButton.simulate("click");
    plusButton.simulate("click");

    const number = wrapper.find("h2");

    expect(number.text()).toBe("2");
  });
  it("감소", () => {
    const wrapper = mount(<HookCounter />);
    let decreaseButton = wrapper.findWhere(
      (node) => node.type() === "button" && node.text() === "-1"
    );
    decreaseButton.simulate("click");
    decreaseButton.simulate("click");

    const number = wrapper.find("h2");

    expect(number.text()).toBe("-2");
  });
});
