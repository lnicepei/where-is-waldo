import styled from "styled-components";
import Menu from "./SearchImageChoiceMenu/SearchImageChoiceMenu";

export const StyledSearchImage = styled.img`
  width: 100vw;
  max-width: 100%;
`;

export const StyledSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* align-items: center; */
`;

export const StyledSearchImageChoiceMenu = styled(Menu)`
display: flex;
/* flex-direction: row; */
background-color: red;
width: 80vw;
`;

export const StyledSearchImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledPlayButton = styled.button`
  width: 10%;
`;

export const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5vh 0;
  flex-direction: column;
  transition: all ease-in-out .3s;
  /* width: 80vw; */
`;

export const StyledMenuImagesContainer = styled.div`
  display: flex;
  margin: 40px;
`

export const StyledChooseTitle = styled.h1`
  font-size: 1rem;
`;

export const StyledChooseImage = styled.img`
  width: 200px;
`;
