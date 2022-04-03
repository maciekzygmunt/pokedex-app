import { NativeSelect } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { pokemonsActions } from '../store/pokemons-slice';
import { useTransition } from 'react';
import styled from 'styled-components';
import { Loader } from '@mantine/core';

function FilterSelect() {
  const [isPending, startTransition] = useTransition();
  const dispatch = useDispatch();
  const sortingValue = useSelector((state) => state.pokemons.sorting);

  const changeHandler = (value) => {
    startTransition(() => {
      dispatch(pokemonsActions.setSorting(value));
    });
  };

  return (
    <Wrapper>
      <NativeSelect
        data={['Ascending', 'Descending']}
        value={sortingValue}
        placeholder="Default"
        label="Sort by name"
        onChange={(event) => changeHandler(event.currentTarget.value)}
        icon={isPending && <Loader size={20} />}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 1rem;
  color: 'white';
`;
export default FilterSelect;
