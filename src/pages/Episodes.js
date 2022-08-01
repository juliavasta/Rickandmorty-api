import React, { useEffect, useState } from "react";

import { getEpisodes, getEpisodeCharacters } from "service";
import HeroWrapper from "components/hero/HeroWrapper";
import {
  SubTitle,
  Title,
  SubTitleSecondary,
  SubTitleSecondaryWrapper
} from "components/hero/Title";
import List from "components/list/List";
import ListWrapper from "components/list/ListWrapper";
import CharacterCard from "components/characters/CharacterCard";
import Select from "../components/filter/category/Select";

const Episodes = () => {
  const [id, setId] = useState(1);
  const [episodes, setEpisodes] = useState([]);
  const [episodesCharacters, setEpisodesCharacters] = useState([]);
  const { air_date, name } = episodes;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const episodes = await getEpisodes(id);
        setEpisodes(episodes);
        const episodeCharacters = await getEpisodeCharacters({
          characters: episodes.characters
        });
        setEpisodesCharacters(episodeCharacters);
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
          Episode name: <span>{name === "" ? "Unknown" : name}</span>
        </Title>
        <SubTitle>Air date: {air_date === "" ? "Unknown" : air_date}</SubTitle>
        <SubTitleSecondaryWrapper>
          <SubTitleSecondary>Pick Episode</SubTitleSecondary>
          <Select name="Episode" changeId={setId} total={51} />
        </SubTitleSecondaryWrapper>
      </HeroWrapper>
      <div>
        <div>
          <ListWrapper>
            <List>
              {episodesCharacters?.map((character) => (
                <CharacterCard key={character.id} character={character} />
              ))}
            </List>
          </ListWrapper>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
