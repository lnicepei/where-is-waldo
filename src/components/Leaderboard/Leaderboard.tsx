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
      {currentLeaderboardData && currentLeaderboardData.length ? (
        <ol>
          {currentLeaderboardData.map((user) => (
            // eslint-disable-next-line react/jsx-key
            <li>
              <div>{user.name}</div>
              <div>{user.time ? format(user.time, "mm:ss:SS") : ""}</div>
            </li>
          ))}
        </ol>
      ) : (
        <BarLoader />
      )}
    </div>
  );
};

export default Leaderboard;
