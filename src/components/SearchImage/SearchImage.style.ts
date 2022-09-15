import styled from "styled-components";

interface StyledChooseCardProps {
  isThisImage: boolean;
}

export const StyledSearchImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),
    fixed no-repeat url("./src/components/SearchImage/SearchImages/wii.jpg"),
    fixed url("./src/components/SearchImage/SearchImages/ps2.jpg"),
    fixed
      url("./src/components/SearchImage/SearchImages/pierre-roussel-snes-phone2-pal.jpg");
  background-position: center;
  min-height: 100vh;
  @media screen and (max-width: 500px) {
    overflow-x: scroll;
    align-items: flex-start;
  }
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
  padding: 2px;
  box-shadow: ${(props) =>
    props.isThisImage ? `4px 4px 8px 0px #ffe54c` : ``};
  transform: ${(props) => (props.isThisImage ? `scale(1.1)` : ``)};
  margin: 0 40px;
  transition: all ease-in-out 0.1s;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #399953;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(black, black),
      linear-gradient(#ffe54c, #ffe54c), linear-gradient(black, black),
      linear-gradient(#ffe54c, #ffe54c);
    animation: rotate 4s linear infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  @keyframes opacityChange {
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: black;
    border-radius: 5px;
    animation: opacityChange 3s infinite alternate;
  }

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
  font-family: "Orbitron", serif;

  & {
    font-size: 16px;
    font-weight: 200;
    letter-spacing: 1px;
    padding: 13px 20px 13px;
    outline: 0;
    border: 1px solid black;
    cursor: pointer;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  &:after {
    content: "";
    background-color: #ffe54c;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }

  &:hover:after {
    top: 0px;
    left: 0px;
  }
`;

export const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  flex-direction: column;
  transition: all ease-in-out 0.3s;
  padding: 20px;
  border-radius: 15px;
  backdrop-filter: blur(5px);

  @media screen and (max-width: 500px) {
    overflow-x: scroll;
    align-items: flex-start;
  }
`;

export const StyledMenuImagesContainer = styled.div`
  display: flex;
  margin: 40px;
`;

export const StyledChooseImageTitle = styled.h1`
  font-size: 1.4rem;
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-family: "Orbitron", cursive;
`;

export const StyledChooseImage = styled.img<StyledChooseCardProps>`
  width: 200px;
  border-radius: 15px;
  cursor: pointer;
`;
