import styled from "styled-components";

export const Title = styled.h1`
  color: #05fa67;
  font-size: 50px;
  margin: 30px 0;
  line-height: 1.5;
  text-align: center;
  min-width: 300px;
  max-width: 600px;

  @media (max-width: 793px) {
    font-size: 40px;
    padding: 20px;
    margin-bottom: 20px;
  }
  @media (max-width: 500px) {
    font-size: 30px;
    padding: 20px;
    margin-bottom: 20px;
  }
`;

export const SubTitle = styled.p`
  color: #fa6905;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 50px;
  text-align: center;
`;

export const SubTitleSecondary = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
`;

export const SubTitleSecondaryWrapper = styled.div`
  margin-bottom: 30px;
`;
