import { renderHook, act } from "@testing-library/react-hooks";
import { useSemiPermanentState } from "common/customHooks";

const key1 = "test",
  key2 = "test2";
const initState = { propA: "test value" },
  newState = { propA: "new value" };
const newStateJSON = JSON.stringify(newState);

const resetLocalStorageMocks = () => {
  (localStorage.clear as jest.Mock).mockClear();
  (localStorage.getItem as jest.Mock).mockClear();
  (localStorage.key as jest.Mock).mockClear();
  (localStorage.removeItem as jest.Mock).mockClear();
  (localStorage.setItem as jest.Mock).mockClear();
};

let result: any;
beforeEach(() => {
  localStorage.clear();
  result = renderHook(() => useSemiPermanentState(key1, initState)).result;

  resetLocalStorageMocks();
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
  resetLocalStorageMocks();

  act(() => {
    setState(newState);
  });

  expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  expect(localStorage.setItem).toHaveBeenCalledWith(key1, newStateJSON);
  expect(localStorage.__STORE__[key1]).toBe(newStateJSON);
  expect(localStorage.length).toBe(1);
});

it("Gets state from localStorage", () => {
  localStorage.setItem(key2, newStateJSON);

  const { current } = renderHook(() => useSemiPermanentState(key2, {})).result;

  const [state] = current;
  expect(state).toMatchObject(newState);
});
