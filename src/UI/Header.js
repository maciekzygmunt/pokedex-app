import styled from 'styled-components';
import ThemeButton from '../components/ThemeButton';

function Header() {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src="https://www.pngmart.com/files/2/Pikachu-PNG-HD.png" alt="pikachu" />
      </ImageWrapper>
      <Title>PokeDex</Title>
      <ThemeButton />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #3762f0;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  position: sticky;
  top: 0;
  left: 0;
  box-shadow: 0px 0px 13px -7px rgba(66, 68, 90, 1);
  z-index: 50;
`;

const ImageWrapper = styled.div`
  height: 3rem;
  width: 3rem;
`;

const Image = styled.img`
  height: 100%;
`;

const Title = styled.p`
  color: #fad61f;
  font-size: 2rem;
  font-family: Josefin Sans;
  font-weight: 400;
  margin-top: 0.2rem;
`;
export default Header;
