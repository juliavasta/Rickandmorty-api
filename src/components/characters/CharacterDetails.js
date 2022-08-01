import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getCharacter } from "service";
import List from "components/list/List";
import CharacterCard from "components/characters/CharacterCard";

const ListWrapper = styled.div`
  background: #25282e;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 72px 0px;
`;

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const character = await getCharacter(id);
        setCharacter(character);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <ListWrapper>
      <List>
        <CharacterCard key={character.id} character={character} />
      </List>
    </ListWrapper>
  );
};

export default CharacterDetails;
