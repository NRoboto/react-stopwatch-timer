import { renderHook } from "@testing-library/react-hooks";
import {
  useUniqueInterval,
  SetInterval,
} from "common/customHooks/useUniqueInterval";

let setInterval: SetInterval;
beforeEach(() => {
  setInterval = renderHook(() => useUniqueInterval()).result.current;
  jest.useFakeTimers();
});

it("Can correctly create a timer", () => {
  const mock = jest.fn();
  setInterval(mock, 1000);

  expect(window.setInterval).toHaveBeenCalledTimes(1);
  expect(window.setInterval).toHaveBeenCalledWith(mock, 1000);
  expect(mock).not.toHaveBeenCalled();

  jest.runOnlyPendingTimers();

  expect(mock).toHaveBeenCalledTimes(1);
});

it("Can create a second timer", () => {
  // First timer
  setInterval(() => {}, 500);
  jest.runOnlyPendingTimers();

  // Second timer
  const mock = jest.fn();
  setInterval(mock, 1000);

  expect(window.setInterval).toHaveBeenCalledTimes(2);
  expect(window.setInterval).toHaveBeenCalledWith(mock, 1000);
});

it.only("Stops previously running timer", () => {
  const firstMock = jest.fn();
  const secondMock = jest.fn();

  setInterval(firstMock, 500);
  setInterval(secondMock, 1000);

  jest.runOnlyPendingTimers();

  expect(firstMock).not.toHaveBeenCalled();
  expect(secondMock).toHaveBeenCalledTimes(1);
});
