import styled from "styled-components";

const List = styled.div`
  max-width: 1920px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 670px) {
    flex-direction: column;
    width: 100%;
  }
`;

export default List;
