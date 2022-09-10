import React from "react";
import { useAppSelector } from "../../App/hooks";

export interface User {
  id?: string;
  name?: string;
  time?: string;
}

const Leaderboard = () => {
  const leaderboardData = useAppSelector(
    (state) => state.currentSearchImage.leaderboardData
  );

  return (
    <div>
      {leaderboardData.map((user) => (
        <div>
          {user.name} : {user.time}
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
