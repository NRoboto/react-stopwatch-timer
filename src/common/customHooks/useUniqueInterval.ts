import React from "react";

export type SetInterval = (
  handler?: TimerHandler,
  timeout?: number | undefined
) => void;

export const useUniqueInterval = (): SetInterval => {
  const intervalID = React.useRef<undefined | number>();

  return (handler, timeout) => {
    window.clearInterval(intervalID.current);
    if (handler) intervalID.current = window.setInterval(handler, timeout);
  };
};
