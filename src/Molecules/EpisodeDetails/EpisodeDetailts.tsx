import { useLocation } from 'react-router-dom';
import Title from '../../Atoms/Title';
import Button from '../../Atoms/Button';
import svg from '../../assets/no-image.svg';
import Typography from '../../Atoms/Typography';
import Image from '../../Atoms/Image';



export function EpisodeDetails() {
  const location = useLocation();
  const { episode } = location.state || {};

  if (!episode) {
    return <Title title={'Nenhum episódio selecionado!'} />
  }

  return (
    <div>
      <div>
        <Title title={episode?.name} />
        <Typography text={episode?.summary || ''} />
        <Image img={episode?.image?.original || svg} alt='episode-poster' />
      </div>
      <Button handleClick={() => window.history.back()} text='Back' />
    </div>
  )
}