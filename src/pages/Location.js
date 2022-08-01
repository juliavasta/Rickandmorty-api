import React, { useEffect, useState } from "react";

import { getLocations, getLocationResidents } from "service";
import HeroWrapper from "components/hero/HeroWrapper";
import { SubTitle, Title, SubTitleSecondary } from "components/hero/Title";
import List from "components/list/List";
import ListWrapper from "components/list/ListWrapper";
import CharacterCard from "components/characters/CharacterCard";
import Select from "../components/filter/category/Select";

const Location = () => {
  const [id, setId] = useState(1);
  const [locations, setLocations] = useState([]);
  const [episodesResidents, setEpisodesResidents] = useState([]);
  const { name, dimension, type } = locations;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locations = await getLocations(id);
        setLocations(locations);
        const locationResidents = await getLocationResidents({
          residents: locations.residents
        });
        setEpisodesResidents(locationResidents);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <HeroWrapper height="520px">
        <Title>
          Location:
          <span>{name === "" ? "Unknown" : name}</span>
        </Title>
        <SubTitle>
          Dimension: {dimension === "" ? "Unknown" : dimension}
        </SubTitle>
        <SubTitle>Type: {type === "" ? "Unknown" : type}</SubTitle>
        <div>
          <SubTitleSecondary>Pick Location</SubTitleSecondary>
          <Select name="Location" changeId={setId} total={51} />
        </div>
      </HeroWrapper>
      <div>
        <div>
          <ListWrapper>
            <List>
              {episodesResidents?.map((character) => (
                <CharacterCard key={character.id} character={character} />
              ))}
            </List>
          </ListWrapper>
        </div>
      </div>
    </div>
  );
};

export default Location;
