import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";

const InputWrapper = styled.div`
  background-color: white;
  box-shadow: rgb(88 102 126 / 8%) 0px 4px 24px,
    rgb(88 102 126 / 12%) 0px 1px 2px;
  border: 1px solid #cfd9de;
  border-radius: 50px;
  margin-bottom: 50px;
  padding: 20px;
  display: flex;
  align-items: center;

  :focus {
    outline: none;
    border: 1px solid #cfd9de;
    box-shadow: 0 0 3px #cfd9de;
  }
`;

const InputCSS = styled.input`
  background-color: none;
  border: 0;
  border-radius: 50px;
  color: black;
  padding: 0;
  width: 100%;
  outline: none;
  margin-left: 10px;
`;

const Input = ({ theme, onChange, type, name, placeholder, props }) => (
  <InputWrapper>
    <SearchOutlined style={{ color: "#505359" }} />
    <InputCSS
      theme={theme}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      {...props}
    />
  </InputWrapper>
);

export default Input;
