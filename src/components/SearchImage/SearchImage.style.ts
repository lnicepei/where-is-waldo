import styled from "styled-components";
import Leaderboard from "../Leaderboard/Leaderboard";

interface StyledChooseCardProps {
  isThisImage: boolean;
}

export const StyledSearchImageContainer = styled.div`
  display: flex;
  /* position: relative; */
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #292d4a;
  background-position: center;
  min-height: 100vh;
`;

export const StyledSearchImage = styled.img`
  width: 100vw;
  max-width: 100%;
`;

export const StyledChooseCard = styled.div<StyledChooseCardProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: ${(props) =>
    props.isThisImage ? `4px 4px 8px 0px rgba(138, 228, 16, 0.2)` : ``};
  transform: ${(props) => (props.isThisImage ? `scale(1.1)` : ``)};
  margin: 0 40px;
  transition: all ease-in-out 0.1s;

  &:hover {
    transform: ${(props) => (!props.isThisImage ? `scale(1.05)` : ``)};
  }

  &:active {
    transform: scale(1.15);
  }
`;

export const StyledPlayButton = styled.button`
  width: 10%;
  cursor: pointer;
`;

export const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  flex-direction: column;
  transition: all ease-in-out 0.3s;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  padding: 20px;
  border-radius: 15px;
`;

export const StyledMenuImagesContainer = styled.div`
  display: flex;
  margin: 40px;
`;

export const StyledChooseImageTitle = styled.h1`
  font-size: 1rem;
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;

export const StyledChooseImage = styled.img<StyledChooseCardProps>`
  width: 200px;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: ${(props) => (props.isThisImage ? `4px 4px 8px 0px white` : ``)};
`;

export const StyledLeaderboard = styled(Leaderboard)``;
