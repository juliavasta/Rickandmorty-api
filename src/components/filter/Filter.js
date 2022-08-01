import styled from "styled-components";

import Accordion from "components/filter/category/Accordion";

const AccordionContainer = styled.div`
  position: relative;
`;

const AccordionWrapper = styled.div`
  cursor: pointer;
  color: white;
  background-color: #25282e;
  border: 1px solid #05fa6799;
  border-radius: 8px;
  width: 315px;
  position: absolute;
  z-index: 1000;
  @media (max-width: 670px) {
    width: 100%;
  }
`;

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 315px;
  @media (max-width: 670px) {
    width: 100%;
  }

  > :first-child {
    text-align: center;
    margin-bottom: 15px;
  }
`;

const ClearFilterButton = styled.button`
  border: none;
  background: none;
  color: #42f584;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 15px;
  text-decoration: underline;
`;

const Filter = ({
  setLimitPage,
  updateStatus,
  updateGender,
  updateSpecies
}) => {
  const clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    setLimitPage(1);
  };
  const genders = ["female", "male", "genderless", "unknown"];
  const status = ["Alive", "Dead", "Unknown"];
  const species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet"
  ];

  return (
    <FilterWrapper>
      <ClearFilterButton onClick={clear}>Clear Filters </ClearFilterButton>
      <AccordionContainer>
        <AccordionWrapper>
          <Accordion
            borderBottom="1px solid #05fa6799"
            borderBottomBox="1px solid #05fa6799"
            setLimitPage={setLimitPage}
            name="Species"
            categories={species}
            updateCategory={updateSpecies}
          />
          <Accordion
            borderBottomBox="1px solid #05fa6799"
            borderBottom="1px solid #05fa6799"
            setLimitPage={setLimitPage}
            name="Status"
            categories={status}
            updateCategory={updateStatus}
          />
          <Accordion
            borderTop="1px solid #05fa6799"
            setLimitPage={setLimitPage}
            name="Gender"
            categories={genders}
            updateCategory={updateGender}
          />
        </AccordionWrapper>
      </AccordionContainer>
    </FilterWrapper>
  );
};

export default Filter;
