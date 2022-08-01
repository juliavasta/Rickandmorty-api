import styled from "styled-components";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";

const CharacterCSS = css`
  margin: 0;
  padding: 0;
  display: flex;
`;

const CharacterCardWrapper = styled.div`
  background-color: #3c3e43;
  border-radius: 8px;
  color: white;
  width: 600px;
  height: 220px;
  margin: 13.5px;
  display: flex;
  overflow: hidden;

  @media (max-width: 670px) {
    width: 100%;
    height: initial;
    flex-direction: column;
  }
`;

const CharacterCardImage = styled.div`
  flex: 2 1 0%;
  width: 100%;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  overflow: hidden;
  padding: 0;
  margin: 0;
  display: block;
  @media (max-width: 670px) {
    height: 300px;
  }
`;

const CharacterCardText = styled.div`
  font-family: system-ui;
  flex: 3 1 0%;
  position: relative;
  padding: 13.5px;
  display: flex;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextTitle = styled.h2`
  font-size: 27px;
  font-weight: 800px;
  width: 273px;
  @media (max-width: 670px) {
    width: 100%;
  }
`;

const TextStatusWrapper = styled.div`
  font-size: 16px;
  font-weight: 500px;
  padding-top: 7px;
  display: flex;
  align-items: center;
`;

const TextStatusIcon = styled.span`
  background-color: ${({ status }) =>
    status === "Alive" ? "#05fa67" : status === "Dead" ? "red" : "orange"};
  border-radius: 50%;
  height: 8px;
  width: 8px;
  margin-right: 6px;
`;

const TextSubtitle = styled.p`
  color: rgb(158, 158, 158);
  font-size: 16px;
  font-weight: 500px;
  padding-top: 7px;
`;

const TextDescription = styled.p`
  font-size: 16px;
  font-weight: 500px;
  padding-top: 7px;
`;

const CharacterCard = ({ character }) => {
  const { id, image, name, status, species, origin, location } = character;
  return (
    <Link
      key={id}
      to={`/character/${id}`}
      style={{ textDecoration: "none" }}
      className={CharacterCSS}
    >
      <CharacterCardWrapper key={id}>
        <CharacterCardImage>
          <CardImage src={image} alt={`${name} Thumbnail`} />
        </CharacterCardImage>
        <CharacterCardText>
          <TextWrapper>
            <TextTitle>{name}</TextTitle>
            <TextStatusWrapper>
              <TextStatusIcon status={status}></TextStatusIcon>
              {status} - {species}
            </TextStatusWrapper>
          </TextWrapper>
          <TextWrapper>
            <TextSubtitle>Last known location:</TextSubtitle>
            <TextDescription>{location?.name}</TextDescription>
          </TextWrapper>

          <TextWrapper>
            <TextSubtitle>First seen in:</TextSubtitle>
            <TextDescription>{origin?.name}</TextDescription>
          </TextWrapper>
        </CharacterCardText>
      </CharacterCardWrapper>
    </Link>
  );
};

export default CharacterCard;
