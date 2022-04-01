import { useState } from 'react';
import { Modal } from '@mantine/core';
import styled from 'styled-components';

function InfoModal({ opened, setOpened, pokemon }) {
  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} title="">
        <Wrapper>
          <ImageWrapper>
            <PokeImg src={pokemon.sprites.other['dream_world']['front_default']} />
          </ImageWrapper>
          <Name>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Name>
          <Stat>Height: {pokemon.height}</Stat>
          <Stat>Weight: {pokemon.weight}</Stat>
        </Wrapper>
      </Modal>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
`;

const ImageWrapper = styled.div`
  height: 15rem;
  width: 15rem;
  border: 1px solid #828282;
  border-radius: 9999px;
  padding: 2rem;
  box-shadow: 0px 0px 13px -7px rgba(66, 68, 90, 1);
`;

const PokeImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Name = styled.p`
  font-size: 2rem;
`;

const Stat = styled.p``;

export default InfoModal;
