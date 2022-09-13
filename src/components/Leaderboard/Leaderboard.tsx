import React from "react";
import { format } from "date-fns";
import { BarLoader } from "react-spinners";
import { useAppSelector } from "../../App/hooks";

export interface User {
  id?: string;
  name?: string;
  time?: Date | number;
}

const Leaderboard = () => {
  const currentLeaderboardData = useAppSelector(
    (state) => state.leaderboard.currentLeaderboardData
  );

  console.log(currentLeaderboardData);

  return (
    <div>
      {currentLeaderboardData.length ? (
        currentLeaderboardData.map((user) => (
          <div>
            {user.name} : {user.time ? format(user.time, "mm:ss:SS") : ""}
          </div>
        ))
      ) : (
        <BarLoader />
      )}
    </div>
  );
};

export default Leaderboard;
