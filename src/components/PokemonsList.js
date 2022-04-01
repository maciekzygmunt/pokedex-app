import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PokemonItem from './PokemonItem';

function PokemonsList() {
  const pokemons = useSelector((state) => state.pokemons.pokemons);

  return (
    <div>
      {pokemons.map((pokemon) => (
        <PokemonItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
export default PokemonsList;
