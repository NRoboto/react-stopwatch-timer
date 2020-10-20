import React from "react";
import Renderer from "react-test-renderer";
import { TimeDate } from "./";
import MockDate from "mockdate";
import { GetTestChildText } from "../test";
import dayjs, { Duration } from "../dayjs";

describe("Time Date Element", () => {
  const testTimeDate = "2018-04-23T16:52:13.564";
  const testDuration = "P1Y2M3DT4H5M6S";

  beforeEach(() => {
    MockDate.reset();
  });

  it("renders without error", () => {
    expect(Renderer.create(<TimeDate />)).not.toBeUndefined();
  });

  it("renders correct time", () => {
    const timeDateEle = Renderer.create(
      <TimeDate time={dayjs(testTimeDate)} timeFormat="hh:mm:ss:SSS a" />
    );
    const text = GetTestChildText(timeDateEle.root);

    expect(text).toMatch(/16|4/);
    expect(text).toMatch(/52/);
    expect(text).toMatch(/13/);
    expect(text).toMatch(/564/);
    expect(text).toMatch(/pm/i);
  });

  it("renders correct date", () => {
    const timeDateEle = Renderer.create(
      <TimeDate
        time={dayjs(testTimeDate)}
        timeFormat=""
        dateFormat="DD MMMM MM YYYY"
      />
    );
    const text = GetTestChildText(timeDateEle.root);

    expect(text).toMatch(/23/);
    expect(text).toMatch(/April/i);
    expect(text).toMatch(/04/);
    expect(text).toMatch(/2018/);
  });

  it("renders duration correctly", () => {
    const timeDateEle = Renderer.create(
      <TimeDate time={dayjs.duration(testDuration)} />
    );
    const text = GetTestChildText(timeDateEle.root);

    expect(() =>
      timeDateEle.root.findByProps({ className: "time-output" })
    ).not.toThrow();

    expect(text).toMatch(/428 days/i);
    expect(text).toMatch(/4/i);
    expect(text).toMatch(/05/);
    expect(text).toMatch(/06/);
  });

  it("doesn't render date for duration", () => {
    const timeDateEle = Renderer.create(
      <TimeDate time={dayjs.duration(testDuration)} />
    );

    expect(() =>
      timeDateEle.root.findByProps({ className: "date-output" })
    ).toThrow();
  });

  it("renders current time by default", () => {
    MockDate.set("2020-08-24T15:16:05.189");
    const timeDateEle = Renderer.create(<TimeDate />);

    expect(() =>
      timeDateEle.root.findByProps({ className: "time-output" })
    ).not.toThrow();

    expect(() =>
      timeDateEle.root.findByProps({ className: "date-output" })
    ).toThrow();

    const text = GetTestChildText(timeDateEle.root);

    expect(text).toMatch(/15|3/);
    expect(text).toMatch(/16/);
    expect(text).toMatch(/05/);
    expect(text).not.toMatch(/am/i);
  });

  it("doesn't render date when no date format is present", () => {
    const timeDateEle = Renderer.create(<TimeDate dateFormat={undefined} />);

    expect(() =>
      timeDateEle.root.findByProps({ className: "date-output" })
    ).toThrow();
  });

  it("updates on time change", () => {
    let timeDate = dayjs(testTimeDate);

    let timeDateEle = Renderer.create(
      <TimeDate time={dayjs(timeDate)} timeFormat="hh:mm:ss a" />
    );

    Renderer.act(() => {
      timeDate = timeDate.subtract(8, "hour");
      timeDate = timeDate.add(3, "minute");
      timeDate = timeDate.add(5, "second");
      timeDateEle.update(
        <TimeDate time={dayjs(timeDate)} timeFormat="hh:mm:ss a" />
      );
    });

    const text = GetTestChildText(timeDateEle.root);

    expect(text).toMatch(/8/);
    expect(text).toMatch(/55/);
    expect(text).toMatch(/18/);
    expect(text).toMatch(/am/i);
  });
});
