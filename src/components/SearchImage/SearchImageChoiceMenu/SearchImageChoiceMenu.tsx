import React from "react";
import { useAppDispatch } from "../../../App/hooks";
import { setIsCounting, setTime } from "../../Timer/TimerSlice";
import { setHeroes } from "../../../App/AppSlice";
import searchImages from "../SearchImages";
import SearchImageChoiceCard from "./SearchImageChoiceCard";

interface SearchImageChoiceMenuProps {
  className?: string;
}

const SearchImageChoiceMenu: React.FC<SearchImageChoiceMenuProps> = () => {
  const dispatch = useAppDispatch();

  const handleChoiceClick = () => {
    dispatch(setIsCounting(true));
    dispatch(setTime(new Date()));
  };

  return (
    <>
      {searchImages.map((image) => {
        return (
          <SearchImageChoiceCard
            name={image.name}
            url={image.url}
            heroes={image.heroes}
            key={image.name}
          />
        );
      })}
      <button onClick={handleChoiceClick}>Play!</button>
    </>
  );
};

export default SearchImageChoiceMenu;
