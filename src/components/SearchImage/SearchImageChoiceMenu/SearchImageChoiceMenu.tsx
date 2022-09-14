import React from "react";
import { useAppDispatch } from "../../../App/hooks";
import { setIsCounting, setTime } from "../../Timer/TimerSlice";
import { StyledMenu, StyledPlayButton } from "../SearchImage.style";
import searchImages from "../SearchImages";
import SearchImageChoiceCard from "./SearchImageChoiceCard";

interface SearchImageChoiceMenuProps {
  /** allows working with styled components */
  className?: string;
}

const SearchImageChoiceMenu: React.FC<SearchImageChoiceMenuProps> = () => {
  const dispatch = useAppDispatch();

  const handleChoiceClick = () => {
    dispatch(setIsCounting(true));
    dispatch(setTime(new Date().toISOString()));
  };

  return (
    <StyledMenu>
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
      <StyledPlayButton onClick={handleChoiceClick}>Play!</StyledPlayButton>
    </StyledMenu>
  );
};

export default SearchImageChoiceMenu;
