import React, { useEffect } from "react";
import { setTime } from "./TimerSlice";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { addMilliseconds, differenceInMilliseconds, format } from "date-fns";
import { StyledTimer } from "./Timer.style";

const Timer: React.FC = () => {
  const time: string = useAppSelector((state) => state.time.time);

  const timeObject: Date = new Date(time);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(
      () => dispatch(setTime(addMilliseconds(timeObject, 1).toISOString())),
      1
    );
  });

  return (
    <StyledTimer>
      {format(differenceInMilliseconds(new Date(), timeObject), "mm:ss:SS")}
    </StyledTimer>
  );
};

export default Timer;
