import { useState } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import styled from "styled-components";

import FilterButton from "components/filter/FilterButton";

const AccordionBox = styled.div`
  border-bottom: ${(props) => props.borderBottomBox};
  display: flex;
  padding: 15px;

  > :first-child {
    margin-right: auto;
  }
`;

const AccordionButton = styled.div`
  border-top: ${(props) => props.borderTop};
  border-bottom: ${(props) => props.borderBottom};
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
`;

const Accordion = ({
  categories,
  name,
  updateCategory,
  setLimitPage,
  borderBottomBox,
  borderTop,
  borderBottom
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <AccordionBox
        borderBottomBox={borderBottomBox}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{name}</p>
        <div style={{ cursor: "pointer" }}>
          {isOpen ? <UpOutlined /> : <DownOutlined />}
        </div>
      </AccordionBox>
      {isOpen && (
        <AccordionButton borderTop={borderTop} borderBottom={borderBottom}>
          {categories.map((item, index) => (
            <FilterButton
              key={index}
              setLimitPage={setLimitPage}
              task={updateCategory}
              element={item}
            />
          ))}
        </AccordionButton>
      )}
    </div>
  );
};

export default Accordion;
