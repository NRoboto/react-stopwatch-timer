import React from "react";

type SetInterval = (
  handler: TimerHandler,
  timeout?: number | undefined
) => void;
export const useUniqueInterval = (): SetInterval => {
  const intervalID = React.useRef<undefined | number>();

  return (handler, timeout) => {
    window.clearInterval(intervalID.current);
    intervalID.current = window.setInterval(handler, timeout);
  };
};
