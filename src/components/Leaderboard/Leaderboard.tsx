// import React from "react";
import { format } from "date-fns";
import { useAppSelector } from "../../App/hooks";

export interface User {
  id: string;
  name?: string;
  time?: Date | number;
}

const Leaderboard = () => {
  const leaderboardData = useAppSelector(
    (state) => state.currentSearchImage.leaderboardData
  );

  return (
    <div>
      {leaderboardData.map((user) => (
        <div>
          {user.name} : {user.time ? format(user.time, "mm:ss:SS") : ""}
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
