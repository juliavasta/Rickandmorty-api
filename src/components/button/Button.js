import styled from "styled-components";

import Loader from "components/loader/Loader";

const StyledButton = styled.button`
  background-color: #05fa67;
  border-radius: 8px;
  border: 0;
  color: #25282e;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  font-weight: 800;
  font-size: 14px;
  height: 40px;
  min-width: ${(props) => props.minWidth};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.2s ease;
  :hover {
    background-color: #05cc55;
  }
`;

const Button = ({
  onClick,
  loading,
  children,
  minWidth,
  marginRight,
  marginBottom
}) => (
  <StyledButton
    disabled={loading}
    onClick={onClick}
    minWidth={minWidth}
    marginRight={marginRight}
    marginBottom={marginBottom}
  >
    {loading ? <Loader /> : children}
  </StyledButton>
);

export default Button;
