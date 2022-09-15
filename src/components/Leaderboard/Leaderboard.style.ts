import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border: #ffe97c;

  table,th,td {
    border-collapse: separate;
    border-spacing:2px;
    border-style: solid;
    border-width:thin;
  }

  background-color: #ffe97c;

  tr {
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    text-align: center;
  }
`;
