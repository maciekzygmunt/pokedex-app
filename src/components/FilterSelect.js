import { NativeSelect } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { pokemonsActions } from '../store/pokemons-slice';
import styled from 'styled-components';

function FilterSelect() {
  const dispatch = useDispatch();
  const sortingValue = useSelector((state) => state.pokemons.sorting);
  const lightTheme = useSelector((state) => state.theme.lightTheme);

  return (
    <Wrapper>
      <NativeSelect
        data={['Ascending', 'Descending']}
        value={sortingValue}
        placeholder="Default"
        label="Sort by name"
        onChange={(event) => dispatch(pokemonsActions.setSorting(event.currentTarget.value))}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 1rem;
  color: 'white';
`;
export default FilterSelect;
