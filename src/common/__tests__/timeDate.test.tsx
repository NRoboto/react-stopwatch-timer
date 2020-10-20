import React from "react";
import { shallow } from "enzyme";
import { TimeDate } from "common/timeDate";
import MockDate from "mockdate";
import dayjs from "common/dayjs";

describe("Time Date Element", () => {
  const testTimeDate = "2018-04-23T16:52:13.564";
  const testDuration = "P1Y2M3DT4H5M6S";

  beforeEach(() => {
    MockDate.reset();
  });

  it("renders without error", () => {
    expect(shallow(<TimeDate />)).not.toBeUndefined();
  });

  it("renders correct time", () => {
    const wrapper = shallow(
      <TimeDate time={dayjs(testTimeDate)} timeFormat="hh:mm:ss:SSS a" />
    );
    const text = wrapper.render().text();

    expect(text).toMatch(/16|4/);
    expect(text).toMatch(/52/);
    expect(text).toMatch(/13/);
    expect(text).toMatch(/564/);
    expect(text).toMatch(/pm/i);
  });

  it("renders correct date", () => {
    const wrapper = shallow(
      <TimeDate
        time={dayjs(testTimeDate)}
        timeFormat=""
        dateFormat="DD MMMM MM YYYY"
      />
    );
    const text = wrapper.render().text();

    expect(text).toMatch(/23/);
    expect(text).toMatch(/April/i);
    expect(text).toMatch(/04/);
    expect(text).toMatch(/2018/);
  });

  it("renders duration correctly", () => {
    const wrapper = shallow(<TimeDate time={dayjs.duration(testDuration)} />);
    const text = wrapper.render().text();

    expect(wrapper.find(".time-output").length).toBe(1);
    expect(text).toMatch(/428 days/i);
    expect(text).toMatch(/4/i);
    expect(text).toMatch(/05/);
    expect(text).toMatch(/06/);
  });

  it("doesn't render date for duration", () => {
    const wrapper = shallow(<TimeDate time={dayjs.duration(testDuration)} />);
    expect(wrapper.find(".date-output").length).toBe(0);
  });

  it("renders current time by default", () => {
    MockDate.set("2020-08-24T15:16:05.189");
    const wrapper = shallow(<TimeDate />);

    expect(wrapper.find(".time-output").length).toBe(1);
    expect(wrapper.find(".date-output").length).toBe(0);

    const text = wrapper.render().text();

    expect(text).toMatch(/15|3/);
    expect(text).toMatch(/16/);
    expect(text).toMatch(/05/);
    expect(text).not.toMatch(/am/i);
  });

  it("doesn't render date when no date format is present", () => {
    const wrapper = shallow(<TimeDate dateFormat={undefined} />);
    expect(wrapper.find(".date-output").length).toBe(0);
  });

  it("updates on time change", () => {
    let timeDate = dayjs(testTimeDate);

    let wrapper = shallow(<TimeDate time={timeDate} timeFormat="hh:mm:ss a" />);

    const newTimeDate = timeDate
      .subtract(8, "hour")
      .add(3, "minute")
      .add(5, "second");
    wrapper.setProps({ time: newTimeDate });

    const text = wrapper.render().text();
    expect(text).toMatch(/8:/);
    expect(text).toMatch(/:55/);
    expect(text).toMatch(/:18/);
    expect(text).toMatch(/am/i);
  });
});
