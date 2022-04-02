import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import FilterSelect from './FilterSelect';
import PokemonItem from './PokemonItem';
import { pokemonsActions } from '../store/pokemons-slice';

function PokemonsList() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons.pokemons);
  const sortingValue = useSelector((state) => state.pokemons.sorting);

  useEffect(() => {
    const ascending = (a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    };
    const descending = (a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    };
    const copy = [...pokemons];
    if (sortingValue === 'Ascending') {
      copy.sort(ascending);
    } else if (sortingValue === 'Descending') {
      copy.sort(descending);
    }
    dispatch(pokemonsActions.setPokemons(copy));
  }, [sortingValue]);

  return (
    <>
      <SelectWrapper>
        <FilterSelect />
      </SelectWrapper>
      <Wrapper>
        {pokemons.map((pokemon) => (
          <PokemonItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </Wrapper>
    </>
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

const SelectWrapper = styled.div`
  max-width: 42rem;
  margin: 0 auto;
`;

export default PokemonsList;
