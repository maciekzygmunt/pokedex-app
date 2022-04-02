import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonsList from './components/PokemonsList';
import Header from './UI/Header';
import { pokemonsActions } from './store/pokemons-slice';
import { Loader } from '@mantine/core';
import styled from 'styled-components';
import Button from './components/Button';
import { MantineProvider } from '@mantine/core';

function App() {
  const lightTheme = useSelector((state) => state.theme.lightTheme);
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

  let theme = lightTheme ? 'light' : 'dark';

  return (
    <MantineProvider
      theme={{
        colorScheme: theme,
        colors: {
          dark: [
            '#d5d7e0',
            '#acaebf',
            '#8c8fa3',
            '#666980',
            '#4d4f66',
            '#313238',
            '#2b2c3d',
            '#25262B',
            '#0c0d21',
            '#01010a',
          ],
        },
      }}
    >
      <BodyWrapper lightTheme={lightTheme}>
        <Header />
        {isLoading && (
          <LoaderWrapper>
            <Loader size="xl" />
          </LoaderWrapper>
        )}
        {!isLoading && <PokemonsList />}
        {!isLoading && <Button onClick={() => setOffset((state) => state + 20)}>Load More</Button>}
      </BodyWrapper>
    </MantineProvider>
  );
}
const BodyWrapper = styled.div`
  background: ${(props) => (props.lightTheme ? '#ffffff' : '#25262B')};
`;

const LoaderWrapper = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
