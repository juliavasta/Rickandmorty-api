import styled from "styled-components";

const HeroWrapper = styled.div`
  background: #1b1f24;
  padding: 0 20px 50px 20px;
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 670px) {
    height: auto;
  }
`;

export default HeroWrapper;
