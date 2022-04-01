import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PokemonsList from './components/PokemonsList';
import Header from './UI/Header';
import { pokemonsActions } from './store/pokemons-slice';
import { Loader } from '@mantine/core';
import styled from 'styled-components';

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&&limit=20`);
      const data = await response.json();
      data.results.forEach(async (pokemon) => {
        let url = pokemon.url;
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
          dispatch(pokemonsActions.appendPokemons(data));
          setIsLoading(false);
        }
        console.log(data);
      });
    };

    fetchPokemons();
  }, [offset]);

  return (
    <>
      <Header />
      {isLoading && (
        <LoaderWrapper>
          <Loader size="xl" />
        </LoaderWrapper>
      )}
      {!isLoading && <PokemonsList />}
      {!isLoading && (
        <LoadMoreButton onClick={() => setOffset((state) => state + 20)}>Load More</LoadMoreButton>
      )}
    </>
  );
}

const LoaderWrapper = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadMoreButton = styled.button`
  cursor: pointer;
  background: #3762f0;
  font-size: 1.2rem;
  color: #fad61f;
  border: none;
  height: 3rem;
  width: 8rem;
  border-radius: 7px;
  box-shadow: 0px 0px 13px -7px rgba(66, 68, 90, 1);
  display: block;
  margin: 1rem auto;
  &:hover,
  &:active {
    background: #0a42fc;
  }
`;

export default App;
