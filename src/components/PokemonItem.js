import styled from 'styled-components';
import { Badge } from '@mantine/core';
import { useEffect } from 'react';
import { useState } from 'react';
import InfoModal from './InfoModal';

function PokemonItem({ pokemon }) {
  const [sprites, setSprites] = useState([]);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const spritesHelper = [];
    for (const sprite in pokemon.sprites) {
      if (typeof pokemon.sprites[sprite] === 'string') {
        spritesHelper.push(pokemon.sprites[sprite]);
      }
    }
    setSprites(spritesHelper);
  }, []);

  return (
    <>
      <InfoModal opened={opened} setOpened={setOpened} pokemon={pokemon} />
      <Wrapper onClick={() => setOpened(true)}>
        <Name>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Name>
        <StatsWrapper>
          <ImageWrapper>
            <Image src={pokemon.sprites.other['dream_world']['front_default']} />
          </ImageWrapper>
          <TypesWrapper>
            <p>Types: </p>
            {pokemon.types.map((typeData, i) => (
              <BadgeWrapper>
                <Badge key={i} radius="md">
                  {typeData.type.name}
                </Badge>
              </BadgeWrapper>
            ))}
          </TypesWrapper>
          <SpritesWrapper>
            <p>Sprites: </p>
            {sprites.map((img, i) => (
              <SpriteImageWrapper>
                <SpriteImage key={i} src={img} />
              </SpriteImageWrapper>
            ))}
          </SpritesWrapper>
        </StatsWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: 10rem;
  border: 1px solid #828282;
  max-width: 40rem;
  margin: 0 auto;
  border-radius: 6px;
  box-shadow: 0px 0px 39px -7px rgba(66, 68, 90, 1);
  cursor: pointer;
  transition: transform 150ms ease-out;
  &:hover,
  &:active {
    transform: scale(1.01);
  }
`;

const StatsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

const Name = styled.p`
  text-align: center;
  font-size: 1.5rem;
  margin-top: 0.3rem;
`;

const ImageWrapper = styled.div`
  grid-row: span 2;
  height: 6rem;
  width: 6rem;
  border: 1px solid #828282;
  border-radius: 9999px;
  padding: 1rem;
  margin: 0 1rem;

  overflow: hidden;
`;

const Image = styled.img`
  height: 100%;
`;

const TypesWrapper = styled.div`
  grid-column: 2/6;
  grid-row: 1/2;
  margin: auto 0;
  display: flex;
  column-gap: 0.2rem;
`;
const BadgeWrapper = styled.div`
  margin-right: 0.2rem;
  display: inline;
`;

const SpritesWrapper = styled.div`
  grid-column: 2/6;
  grid-row: 2/3;
  margin: auto 0;
  display: flex;
  column-gap: 0.2rem;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SpriteImageWrapper = styled.div`
  height: 3rem;
  flex-shrink: 0;
`;

const SpriteImage = styled.img`
  height: 100%;
  width: 100%;
`;

export default PokemonItem;
