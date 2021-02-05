import React from "react";
import { mount } from "enzyme";
import Profile from "./Profile";

describe("<Profile />", () => {
  it("스냅샷 매칭", () => {
    const wrapper = mount(<Profile username="ssukim" name="김정수" />);
    expect(wrapper).toMatchSnapshot();
  });
  it("username & name 랜더링", () => {
    const wrapper = mount(<Profile username="ssukim" name="김정수" />);
    expect(wrapper.props().username).toBe("ssukim");
    expect(wrapper.props().name).toBe("김정수");

    const boldElement = wrapper.find('b');
    expect(boldElement.contains('ssukim')).toBe(true);
    const spanElement = wrapper.find('span');
    expect(spanElement.text()).toBe('(김정수)');
  });
});
