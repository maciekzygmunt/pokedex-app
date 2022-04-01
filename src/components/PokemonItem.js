import styled from 'styled-components';

function PokemonItem({ pokemon }) {
  return (
    <Wrapper>
      <Name>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Name>
      <ImageWrapper>
        <Image src={pokemon.sprites.other['dream_world']['front_default']} />
      </ImageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 10rem;
  margin: 1rem 1rem 1rem 1rem;
  border: 1px solid #828282;
  border-radius: 6px;
  box-shadow: 0px 0px 39px -7px rgba(66, 68, 90, 1);
  cursor: pointer;
  transition: transform 150ms ease-out;
  &:hover {
    transform: scale(1.01);
  }
`;

const Name = styled.p`
  text-align: center;
  font-size: 1.5rem;
`;

const ImageWrapper = styled.div`
  height: 6rem;
  width: 6rem;
  border: 1px solid #828282;
  border-radius: 9999px;
  padding: 1rem;
  margin-left: 1rem;
`;

const Image = styled.img`
  height: 100%;
`;
export default PokemonItem;
