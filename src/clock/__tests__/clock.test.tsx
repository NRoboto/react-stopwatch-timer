import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Clock } from "clock";
import MockDate from "mockdate";

describe("Clock Element", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    MockDate.reset();
    MockDate.set("2018-04-23T16:52:13.564");
    wrapper = shallow(<Clock />);
  });

  it("renders without error", () => {
    expect(wrapper).not.toBeUndefined();
  });

  it("renders correct time", () => {
    const text = wrapper.render().text();

    expect(text).toMatch(/(4|16):/);
    expect(text).toMatch(/:52/);
    expect(text).toMatch(/:13/);
    expect(text).not.toMatch(/\.564/);
    expect(text).toMatch(/pm/);
    expect(text).not.toMatch(/am/);
  });

  it("renders correct date", () => {
    const text = wrapper.render().text();

    expect(text).toMatch(/Monday/);
    expect(text).toMatch(/23/);
    expect(text).toMatch(/Apr/);
    expect(text).toMatch(/2018/);
  });
});
