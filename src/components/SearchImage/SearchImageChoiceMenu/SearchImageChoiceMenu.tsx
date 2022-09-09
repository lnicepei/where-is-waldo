import React from "react";
import searchImages from "../SearchImages";
import SearchImageChoiceCard from "./SearchImageChoiceCard";

interface SearchImageChoiceMenuProps {
  className?: string;
}

const SearchImageChoiceMenu: React.FC<SearchImageChoiceMenuProps> = () => {
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
    </>
  );
};

export default SearchImageChoiceMenu;
