import Button from "components/button/Button";

const FilterButton = ({ element, task, setLimitPage }) => {
  return (
    <Button
      minWidth="125px"
      marginRight="15px"
      marginBottom="15px;"
      onClick={(item) => {
        task(element);
        setLimitPage(1);
      }}
    >
      {element}
    </Button>
  );
};

export default FilterButton;
