import React from "react";
import Renderer from "react-test-renderer";
import { Clock } from "./";
import MockDate from "mockdate";

const isString = (val: any): val is string =>
  val.toString && val.toString() === val;

const getChildText = (element: Renderer.ReactTestInstance) =>
  element
    .findAll((ele) => ele.children.some((child) => isString(child)))
    .map((ele) => ele.children)
    .join("");

describe("Clock", () => {
  MockDate.set("2018-04-23T16:52:13.564");
  const clockEle = Renderer.create(<Clock />);

  it("renders without error", () => {
    Renderer.create(<Clock />);
  });

  it("renders correct time", () => {
    const timeRow = clockEle.root.findByProps({ className: "time-output" });
    const text = getChildText(timeRow);

    expect(text).toMatch(/4|16/);
    expect(text).toMatch(/:52/);
    expect(text).toMatch(/:13/);
    expect(text).not.toMatch(/\.564/);
    expect(text).toMatch(/pm/);
    expect(text).not.toMatch(/am/);
  });

  it("renders correct date", () => {
    const dateRow = clockEle.root.findByProps({ className: "date-output" });
    const text = getChildText(dateRow);

    expect(text).toMatch(/Monday/);
    expect(text).toMatch(/23/);
    expect(text).toMatch(/Apr/);
    expect(text).toMatch(/2018/);
  });
});
