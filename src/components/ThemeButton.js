import { useDispatch, useSelector } from 'react-redux';
import { Sun, MoonStars } from 'tabler-icons-react';
import { themeActions } from '../store/theme-slice';
import styled from 'styled-components';

function ThemeButton() {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.theme.lightTheme);

  return (
    <ThemeBtn
      lightTheme={lightTheme}
      title="Toggle color scheme"
      onClick={() => dispatch(themeActions.toggleTheme())}
    >
      {!lightTheme ? <Sun size={18} /> : <MoonStars size={18} />}
    </ThemeBtn>
  );
}

const ThemeBtn = styled.button`
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 10px;
  transition: all 150ms ease-out;
  background: ${(props) => (props.lightTheme ? '#ffffff' : '#25262B')};
  color: ${(props) => (props.lightTheme ? '#3762f0' : '#fad61f')};
  &:hover {
    transform: scale(1.05);
  }
`;

export default ThemeButton;
