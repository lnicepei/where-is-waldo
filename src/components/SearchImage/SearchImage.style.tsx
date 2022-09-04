import styled from "styled-components";
import SearchImageChoiceMenu from "./SearchImageChoiceMenu/SearchImageChoiceMenu";

export const StyledSearchImage = styled.img`
  width: 100vw;
  height: 100vh;
`;

export const StyledSearchContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledSearchImageChoiceMenu = styled(SearchImageChoiceMenu)`
  display: flex;
  flex-direction: column;
  background-color: red;
  width: 50px;
  height: 50px;
  margin-top: 200px;
`;

export const StyledSearchImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// export const StyledSearchImageChoiceMenu = styled.div`
//   display: flex;
//   background-color: red;
// `