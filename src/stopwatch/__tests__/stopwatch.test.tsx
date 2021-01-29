import { shallow, ShallowWrapper } from "enzyme";
import { act } from "react-test-renderer";
import { Button } from "reactstrap";
import { StopwatchElement } from "stopwatch/stopwatchElement";
import { Stopwatch } from "..";

let wrapper: ShallowWrapper;
beforeEach(() => {
  wrapper = shallow(<Stopwatch />);
});

afterEach(() => {
  wrapper.unmount();
});

describe("main functionality", () => {
  it("renders without error", () => {
    expect(wrapper).not.toBeUndefined();
  });

  it("initially has only one stopwatch element", () => {
    expect(wrapper.find(StopwatchElement).length).toBe(1);
  });

  it("time label and time value render", () => {
    const mainElementText = wrapper
      .find(StopwatchElement)
      .render()
      .text()
      .toLowerCase();

    expect(mainElementText).toContain<string>("time");
    expect(mainElementText).toContain<string>("000");
  });

  it("all buttons render correctly", () => {
    const buttons = wrapper.find(Button);
    const buttonText = buttons.map((button) =>
      button.render().text().toLowerCase()
    );

    expect(buttons.length).toBe(4);
    expect(buttonText).toContain("start");
    expect(buttonText).toContain("pause");
    expect(buttonText).toContain("reset");
    expect(buttonText).toContain("lap");
  });


  it.todo("time pauses after pause button clicked");
  it.todo("time resumes when start clicked after paused");
  it.todo("time resets when reset button is clicked");
  it.todo("time correctly starts after reset button clicked");
  it.todo("time pauses at zero when reset is clicked");
});

describe("laps", () => {
  it.todo("lap button creates a new lap element");
  it.todo("lap element renders correctly");
  it.todo("lap elements enumerate correctly");
  it.todo("display shows lap time and total time after lap button clicked");
  it.todo("correct time values show");
});
