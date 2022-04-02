import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PokemonItem from './PokemonItem';

function PokemonsList() {
  const pokemons = useSelector((state) => state.pokemons.pokemons);

  return (
    <Wrapper>
      {pokemons.map((pokemon) => (
        <PokemonItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: 0 1rem;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
  @media (min-width: 75rem) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 100rem) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  margin-top: 1rem;
`;

export default PokemonsList;
