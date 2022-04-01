import styled from 'styled-components';

function Button(props) {
  return <ButtonComp onClick={props.onClick}>{props.children}</ButtonComp>;
}

const ButtonComp = styled.button`
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
    background: #fad61f;
    color: #3762f0;
  }
`;
export default Button;
