import React from "react";

/**
 * Similar to React.useState except the previous state is retained.
 * @return A tuple containing the current state, previous state, and state dispatcher respectively.
 */
export const useStatePrev = <S = undefined>(
  initialState?: S | (() => S)
): [
  S | undefined,
  S | undefined,
  React.Dispatch<React.SetStateAction<S | undefined>>
] => {
  const [state, useState] = React.useState(initialState);
  const ref = React.useRef<S | undefined>();

  React.useEffect(() => {
    ref.current = state;
  });

  return [state, ref.current, useState];
};
