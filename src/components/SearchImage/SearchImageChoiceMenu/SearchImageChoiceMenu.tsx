import React from "react";
import searchImages from "../SearchImages";
import SearchImageChoiceCard from "./SearchImageChoiceCard";

interface SearchImageChoiceMenuProps {
  className?: string;
}

const SearchImageChoiceMenu: React.FC<SearchImageChoiceMenuProps> = (props) => {
  return (
    <>
      {searchImages.map((image) => {
        return (
          <SearchImageChoiceCard
            name={image.name}
            url={image.url}
            heroes={image.heroes}
          />
        );
      })}
    </>
  );
};

export default SearchImageChoiceMenu;
