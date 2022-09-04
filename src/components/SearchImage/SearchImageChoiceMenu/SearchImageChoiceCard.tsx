import React, { useContext } from "react";
import { AppContext } from "../../Game/Game";

interface SearchImageChoiceCardProps {
  url: string;
  name: string;
}

const SearchImageChoiceCard: React.FC<SearchImageChoiceCardProps> = (props) => {
  const { setWasImageChosen } = useContext(AppContext);

  const handleChoiceClick = () => {
    
    setWasImageChosen((prevWasImageChosen) => !prevWasImageChosen);
  };

  return (
    <div className="card">
      <h1>{props.name}</h1>
      <img src={props.url} alt={props.name} />
      <button onClick={handleChoiceClick}>Chose</button>
    </div>
  );
};

export default SearchImageChoiceCard;
