import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../../Atoms/Title';
import Button from '../../Atoms/Button';
import { Episode, useShowContext } from '../../context/ShowContext';
import {
  StyledButtons,
  StyledCard,
  StyledContainer,
  StyledList,
  StyledListElement,
} from './styled';
import Typography from '../../Atoms/Typography';
import Image from '../../Atoms/Image';

export function ShowDetails() {
  const navigate = useNavigate();
  const { show, setShow, episodes, setEpisodes } = useShowContext();

  useEffect(() => {
    const fetchData = async () => {
      if (!show) {
        try {
          const response = await fetch(`https://api.tvmaze.com/shows/1955`);
          const json = await response.json();
          setShow(json);
        } catch (err) {
          if (err instanceof Error) {
            console.log(err.message);
          }
        }
      }
    };
    fetchData();
  }, [show, setShow]);

  const handleGetEpisodes = async () => {
    try {
      const response = await (
        await fetch(`https://api.tvmaze.com/shows/1955/episodes`)
      ).json();
      setEpisodes(response);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };

  const handleEpisodeClick = (episode: Episode) => {
    navigate('/episode', { state: { episode } });
  };

  if (!show) {
    return <h2>Loading data ...</h2>;
  }

  return (
    <StyledContainer>
      <StyledCard>
        <Title title={show?.name} />
        <Typography text={show?.summary || ''} />
        <Image img={show?.image?.original} alt="ppg-poster" />
      </StyledCard>
      <StyledButtons>
        {!episodes && (
          <Button handleClick={handleGetEpisodes} text="Get Episodes" />
        )}
        <Button handleClick={() => window.history.back()} text="Back" />
      </StyledButtons>
      {episodes && (
        <div>
          <h3>Episodes</h3>
          <StyledList>
            {episodes?.map((episode: Episode) => {
              return (
                <StyledListElement
                  key={episode?.id}
                  onClick={() => handleEpisodeClick(episode)}
                >
                  {`
              s${episode.season <= 9 ? `0${episode.season}` : `${episode.season}`}
              e${episode.number <= 9 ? `0${episode.number}` : `${episode.number}`} 
              - ${episode.name}
              `}
                </StyledListElement>
              );
            })}
          </StyledList>
        </div>
      )}
    </StyledContainer>
  );
}
