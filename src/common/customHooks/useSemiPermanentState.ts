import React from "react";

export const useSemiPermanentState = <S = undefined>(
  key: string,
  defaultState: S | (() => S)
): [S, React.Dispatch<React.SetStateAction<S>>] => {
  const item = localStorage.getItem(key);
  const initialState = item ? (JSON.parse(item) as S) : defaultState;

  const [state, setState] = React.useState(initialState);

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};
