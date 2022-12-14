import React, { useEffect } from "react";
import { format } from "date-fns";
import { BarLoader } from "react-spinners";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import {
  setAllLeaderboardData,
  setCurrentLeaderboardData,
} from "./LeaderboardSlice";
import { db } from "../../store/config";
import { setCurrentSearchImageURL } from "../SearchImage/SearchImageSlice";
import searchImages from "../SearchImage/SearchImages";
import { StyledTable } from "./Leaderboard.style";

export interface User {
  /** id from firebase */
  id: string;
  /** name from firebase */
  name?: string;
  /** time from firebase */
  time?: number;
}

const Leaderboard: React.FC = () => {
  const dispatch = useAppDispatch();

  const currentLeaderboardData: User[] = useAppSelector(
    (state) => state.leaderboard.currentLeaderboardData
  );

  const currentSearchImage: string = useAppSelector(
    (state) => state.currentSearchImage.searchImage
  );

  const allLeaderboardData: User[][] = useAppSelector(
    (state) => state.leaderboard.allLeaderboardData
  );

  useEffect(() => {
    (async () => {
      try {
        const wiiPlayersResults = collection(db, `results/wii/players`);

        // order results
        const wiiResultsQuery = query(wiiPlayersResults, orderBy("time"));

        // async get data:
        const wiiLeaderboardData = await getDocs(wiiResultsQuery);

        const wiiDataArray = wiiLeaderboardData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        const snesPlayersResults = collection(db, `results/snes/players`);

        // order results
        const snesResultsQuery = query(snesPlayersResults, orderBy("time"));

        // async get data:
        const snesLeaderboardData = await getDocs(snesResultsQuery);

        const snesDataArray = snesLeaderboardData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        const ps2PlayersResults = collection(db, `results/ps2/players`);

        // order results
        const ps2ResultsQuery = query(ps2PlayersResults, orderBy("time"));

        // async get data:
        const ps2LeaderboardData = await getDocs(ps2ResultsQuery);

        const ps2DataArray = ps2LeaderboardData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        dispatch(
          setAllLeaderboardData([snesDataArray, wiiDataArray, ps2DataArray])
        );
      } catch (error) {
        console.log(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const index: number = searchImages.findIndex(
      (image) => image.name == currentSearchImage
    );

    dispatch(setCurrentLeaderboardData(allLeaderboardData[index]));
    dispatch(setCurrentSearchImageURL(searchImages[index].url));
  });

  return (
    <>
      {currentLeaderboardData?.length ? (
        <StyledTable>
          <thead>
            <tr>
              <th scope="col">Place</th>
              <th scope="col">Name</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          {currentLeaderboardData.map((user, index) => (
            // eslint-disable-next-line react/jsx-key
            <tbody>
              <tr>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user?.time && format(user.time, "mm:ss:SS")}</td>
              </tr>
            </tbody>
          ))}
        </StyledTable>
      ) : <BarLoader color="#ffe54c" />}
    </>
  );
};

export default Leaderboard;
