import styled from "styled-components";
import { useState, useEffect } from "react";

import { getCharacters } from "service";
import useDebounce from "hooks/useDebounce";
import HeroWrapper from "components/hero/HeroWrapper";
import List from "components/list/List";
import ListWrapper from "components/list/ListWrapper";
import ListErrorWrapper from "components/list/ListErrorWrapper";
import Input from "components/input/Input";
import Button from "components/button/Button";
import ButtonWrapper from "components/buttonWrapper/ButtonWrapper";
import CharacterCard from "components/characters/CharacterCard";
import Filter from "components/filter/Filter";
import { Title } from "components/hero/Title";

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 240px;
  width: 100%;
`;

const CharacterInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  padding: 0 20px;
`;

const ErrorWrapper = styled.p`
  color: white;
  display: flex;
  justify-content: center;
  height: 507px;
`;

const Characters = () => {
  const [searchText, setSearchText] = useState("");
  const [limitPage, setLimitPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [status, updateStatus] = useState("");
  const [gender, updateGender] = useState("");
  const [species, updateSpecies] = useState("");
  const debouncedSearch = useDebounce(searchText, 500);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const characters = await getCharacters({
          limitPage,
          searchText: debouncedSearch,
          status,
          gender,
          species
        });
        setCharacters(characters.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [limitPage, debouncedSearch, status, gender, species]);

  const loadMore = () => {
    setLimitPage(limitPage + 1);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setLimitPage(1);
    setSearchText(e.currentTarget.value);
  };

  const filteredCharacters = characters?.filter((character) => {
    const text = searchText.toLowerCase();
    return character?.name.toLowerCase().includes(text);
  });

  return (
    <div>
      <HeroWrapper height="520px">
        <FilterSection>
          <Title>Characters</Title>
          <CharacterInputWrapper>
            <Input
              type="search"
              name="name"
              placeholder="Find all characters"
              onChange={handleSearch}
            />
          </CharacterInputWrapper>

          <FilterWrapper>
            <Filter
              limitPage={limitPage}
              setLimitPage={setLimitPage}
              status={status}
              updateStatus={updateStatus}
              updateGender={updateGender}
              updateSpecies={updateSpecies}
            />
          </FilterWrapper>
        </FilterSection>
      </HeroWrapper>

      {filteredCharacters ? (
        <ListWrapper>
          <List>
            {filteredCharacters?.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </List>
          <ButtonWrapper>
            <Button onClick={loadMore} minWidth="128px" loading={isLoading}>
              Cargar más
            </Button>
          </ButtonWrapper>
        </ListWrapper>
      ) : (
        <ListErrorWrapper>
          <ErrorWrapper>no characters found :/</ErrorWrapper>
        </ListErrorWrapper>
      )}
    </div>
  );
};

export default Characters;
