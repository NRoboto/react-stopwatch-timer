import React from "react";

/**
 * Similar to React.useState except the previous state is retained.
 * @return A tuple containing the current state, previous state, state dispatcher, and previous state ref respectively.
 * The previous state ref can be used to directly modify the ref, generally the value of this ref should be handled by
 * the hook and this element of the tuple should be discarded.
 */
export const useStatePrev = <S = undefined>(
  initialState?: S | (() => S)
): [
  S | undefined,
  S | undefined,
  React.Dispatch<React.SetStateAction<S | undefined>>,
  React.MutableRefObject<S | undefined>
] => {
  const [state, useState] = React.useState(initialState);
  const ref = React.useRef<S | undefined>();

  React.useEffect(() => {
    ref.current = state;
  });

  return [state, ref.current, useState, ref];
};
