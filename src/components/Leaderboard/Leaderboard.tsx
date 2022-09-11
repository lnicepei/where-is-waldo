import { format, millisecondsToMinutes } from "date-fns";
import { millisecondsToSeconds } from "date-fns/esm";
import React from "react";
import { useAppSelector } from "../../App/hooks";

export interface User {
  id?: string;
  name: string;
  time: Date;
}

const Leaderboard = () => {
  const leaderboardData = useAppSelector(
    (state) => state.currentSearchImage.leaderboardData
  );

  return (
    <div>
      {leaderboardData.map((user) => (
        <div>
          {user.name} : {format(user.time, "mm:ss:SS")}
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
