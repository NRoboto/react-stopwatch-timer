import { renderHook, act, RenderResult } from "@testing-library/react-hooks";
import { useSemiPermanentState } from "common/customHooks";
import { Dispatch, SetStateAction } from "react";

const key1 = "test",
  key2 = "test2";
const initState = { propA: "test value" },
  newState = { propA: "new value" };
const newStateJSON = JSON.stringify(newState);

const setItemSpy = jest.spyOn(Storage.prototype, "setItem");

let result: RenderResult<
  [typeof initState, Dispatch<SetStateAction<typeof initState>>]
>;
beforeEach(() => {
  localStorage.clear();
  result = renderHook(() => useSemiPermanentState(key1, initState)).result;
});

it("Uses default state if no key is present in localStorage", () => {
  const [state] = result.current;
  expect(state.propA).toBe(initState.propA);
});

it("Handles state updates correctly", () => {
  const [, setState] = result.current;

  act(() => {
    setState(newState);
  });

  // `state` doesn't mutate with `result.current[0]`
  expect(result.current[0].propA).toBe(newState.propA);
});

it("Correctly saves state change to localStorage using JSON", () => {
  const [, setState] = result.current;

  act(() => {
    setState(newState);
  });

  expect(setItemSpy).toHaveBeenCalledTimes(2);
  expect(setItemSpy).toHaveBeenCalledWith(key1, newStateJSON);
  expect(localStorage[key1]).toBe(newStateJSON);
  expect(localStorage.length).toBe(1);
});

it("Gets state from localStorage", () => {
  localStorage.setItem(key2, newStateJSON);

  const { current } = renderHook(() => useSemiPermanentState(key2, {})).result;

  const [state] = current;
  expect(state).toMatchObject(newState);
});
