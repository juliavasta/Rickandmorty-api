import apiBaseUrl from "config";

export async function getCharacters({
  limitPage,
  searchText,
  status,
  gender,
  species
}) {
  const response = await fetch(
    `${apiBaseUrl}character/?page=${limitPage}&name=${searchText}&status=${status}&gender=${gender}&species=${species}`
  );
  const json = await response.json();
  return json;
}

export async function getCharacter(id) {
  const response = await fetch(`${apiBaseUrl}character/${id}`);
  const json = await response.json();
  return json;
}

export async function getEpisodes(id) {
  const response = await fetch(`${apiBaseUrl}episode/${id}`);
  const json = await response.json();
  return json;
}

export async function getEpisodeCharacters({ characters }) {
  const characterEpisodes = await Promise.all(
    characters.map((x) => {
      return fetch(x).then((res) => res.json());
    })
  );
  return characterEpisodes;
}

export async function getLocations(id) {
  const response = await fetch(`${apiBaseUrl}location/${id}`);
  const json = await response.json();
  return json;
}

export async function getLocationResidents({ residents }) {
  const locationResidents = await Promise.all(
    residents.map((x) => {
      return fetch(x).then((res) => res.json());
    })
  );
  return locationResidents;
}
