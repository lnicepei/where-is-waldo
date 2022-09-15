import styled from "styled-components";

export const StyledTable = styled.table`
  width: 50%;
  table-layout: fixed;
  height: 300px;
  overflow-x: auto;
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-family: "Orbitron", serif;
  backdrop-filter: blur(5px);
  padding: 15px;
  margin: 15px;
  box-sizing: border-box;
  text-align: center;

  th:nth-child(1) {
    width: 50px;
  }

  th:nth-child(3) {
    width: 100px;
  }

  th {
    text-align: center;
    padding: 20px 15px;
    font-weight: 500;
    font-size: 12px;
    color: #fff;
    text-transform: uppercase;
  }

  td {
    padding: 15px;
    text-align: left;
    vertical-align: middle;
    font-weight: 300;
    font-size: 12px;
    color: #fff;
    border-bottom: solid 1px rgba(255, 255, 255, 0.1);
    text-align: center;
  }

  @media screen and (max-width: 780px) {
    width: 80%;
  }
`;
