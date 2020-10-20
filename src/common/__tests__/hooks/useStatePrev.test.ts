import { renderHook, act } from "@testing-library/react-hooks";
import { useStatePrev } from "common/customHooks/useStatePrev";

let result: any;
beforeEach(() => {
  result = renderHook(() => useStatePrev({ propA: "test" })).result;
});

it("Correctly handles states", () => {
  const [state, , setState] = result.current;

  expect(state).toMatchObject({ propA: "test" });

  act(() => {
    setState({ propA: "new value" });
  });

  // `state` doesn't mutate with `result.current[0]`
  expect(result.current[0]).toMatchObject({ propA: "new value" });
});

it.only("Initially sets previous state to undefined", () => {
  const [, prevState] = result.current;
  expect(prevState).toBeUndefined();
});

it("Retains previous state", () => {
  const [, , setState] = result.current;

  act(() => {
    setState({ propA: "new value" });
  });

  const [, prevState] = result.current;
  expect(prevState).toMatchObject({ propA: "test" });
});
