import styled from "styled-components";

export const SelectWrapper = styled.div`
  background-color: #25282e;
  border: 1px solid #05fa6799;
  border-radius: 8px;
  cursor: pointer;
  width: 315px;
  padding: 15px;
  display: flex;
  align-items: center;
  @media (max-width: 670px) {
    width: 100%;
  }

  > select {
    background: transparent;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 16px;
    outline: none;
  }
`;

const Select = ({ name, changeId, total }) => {
  return (
    <SelectWrapper>
      <select onChange={(e) => changeId(e.target.value)} id={name}>
        <option value="1">Choose options</option>
        {[...Array(total).keys()].map((x, index) => {
          return (
            <option value={x + 1} key={index}>
              {name} {x + 1}
            </option>
          );
        })}
      </select>
    </SelectWrapper>
  );
};

export default Select;
