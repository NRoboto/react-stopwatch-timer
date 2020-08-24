import React from "react";
import Renderer from "react-test-renderer";
import { Clock } from "./";
import MockDate from "mockdate";
import { GetTestChildText } from "../common/test";

describe("Clock Element", () => {
  let clockEle: Renderer.ReactTestRenderer;

  beforeEach(() => {
    MockDate.reset();
    MockDate.set("2018-04-23T16:52:13.564");
    clockEle = Renderer.create(<Clock />);
  });

  it("renders without error", () => {
    expect(clockEle).not.toBeUndefined();
  });

  it("renders correct time", () => {
    const timeRow = clockEle.root.findByProps({ className: "time-output" });
    const text = GetTestChildText(timeRow);

    expect(text).toMatch(/4|16/);
    expect(text).toMatch(/:52/);
    expect(text).toMatch(/:13/);
    expect(text).not.toMatch(/\.564/);
    expect(text).toMatch(/pm/);
    expect(text).not.toMatch(/am/);
  });

  it("renders correct date", () => {
    const dateRow = clockEle.root.findByProps({ className: "date-output" });
    const text = GetTestChildText(dateRow);

    expect(text).toMatch(/Monday/);
    expect(text).toMatch(/23/);
    expect(text).toMatch(/Apr/);
    expect(text).toMatch(/2018/);
  });
});
