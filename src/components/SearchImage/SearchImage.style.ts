import styled from "styled-components";
import SearchImageChoiceMenu from "./SearchImageChoiceMenu/SearchImageChoiceMenu";

export const StyledSearchImage = styled.img`
  width: 100vw;
  max-width: 100%;
`;

export const StyledSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const StyledSearchImageChoiceMenu = styled(SearchImageChoiceMenu)`
  display: flex;
  /* flex-direction: row; */
  background-color: red;
`;

export const StyledSearchImageContainer = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
`;

export const StyledPlayButton = styled.button`
  height: 10px;
`;

export const StyledMenu = styled.div`
  display: flex;
`;

export const StyledChooseCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledChooseTitle = styled.h1`
  font-size: 1rem;
`;

export const StyledChooseImage = styled.img`
  width: 200px;
`;
