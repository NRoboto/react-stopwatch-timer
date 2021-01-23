import { shallow, ShallowWrapper } from "enzyme";
import { Timer } from "..";

it.todo("renders without error")

describe("countdown", () => {
    it.todo("setting initial time correctly sets timer value");
    it.todo("seconds is clamped from 0 to 59");
    it.todo("minutes is clamped from 0 to 59");
    it.todo("hours is clamped from 0 to 99");
    it.todo(">24 hours shows days text");
    it.todo("clicking start correctly countsdown time");
    it.todo("reset button resets time correctly");
    it.todo("alert displays after timer ends");
    it.todo("progress bar shrinks with timer");
    it.todo("progress bar has zero size at timer end");
});

describe("alert", () => {
    it.todo("shows when time reamining is zero");
    it.todo("plays alert sound on show");
});
