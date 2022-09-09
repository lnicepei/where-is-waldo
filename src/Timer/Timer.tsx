import React, { useEffect } from "react";
import { setTime } from "./TimerSlice";
import { useAppDispatch, useAppSelector } from "../App/hooks";

const Timer = () => {
  const time = useAppSelector((state) => state.time.time);
  const isCounting = useAppSelector((state) => state.time.isCounting);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isCounting) {
      setTimeout(() => {
        dispatch(setTime(time + 15));
      }, 10);
    }
  });

  return (
    <>
      {isCounting && (
        <div>
          <span className="digits">
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
          </span>
          <span className="digits">
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
          </span>
          <span className="digits mili-sec">
            {("0" + ((time / 15) % 100)).slice(-2)}
          </span>
        </div>
      )}
    </>
  );
};

export default Timer;
