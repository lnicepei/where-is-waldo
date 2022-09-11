import React, { useEffect } from "react";
import { setTime } from "./TimerSlice";
import { useAppDispatch, useAppSelector } from "../App/hooks";
import { addMilliseconds, differenceInMilliseconds, format } from "date-fns";

const Timer = () => {
  const time = useAppSelector((state) => state.time.time);

  const isCounting = useAppSelector((state) => state.time.isCounting);
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(setTime(addMilliseconds(time, 1))), 1);
  });

  return (
    <>
      {isCounting && (
        <div>
          {format(differenceInMilliseconds(new Date(), time), "mm:ss:SS")}
        </div>
      )}
    </>
  );
};

export default Timer;