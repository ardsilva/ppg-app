import { useNavigate } from 'react-router-dom';
import Title from '../../Atoms/Title';
import Button from '../../Atoms/Button';
import { StyledHome } from './styled';

export function Home() {
  const navigate = useNavigate();
  return (
    <StyledHome>
      <Title title={'Welcome'} />
      <Button
        handleClick={() => navigate('/show')}
        text="Get Porwepuff Girls Show"
      />
    </StyledHome>
  );
}
