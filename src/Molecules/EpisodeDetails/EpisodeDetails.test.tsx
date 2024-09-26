import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { EpisodeDetails } from './EpisodeDetailts';
import { ShowProvider } from '../../context/ShowContext';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: {
      episode: {
        name: 'Test Episode',
        summary: 'This is a test summary.',
        image: {
          original: 'test-image-url',
        },
      },
    },
  }),
}));

describe('EpisodeDetails Component', () => {
  it('should render episode details when an episode is provided', () => {
    render(
      <ShowProvider>
        <MemoryRouter>
          <EpisodeDetails />
        </MemoryRouter>
      </ShowProvider>
    );

    // Verificar se o título do episódio e o summary estão sendo renderizados
    expect(screen.getByText('Test Episode')).toBeInTheDocument();
    expect(screen.getByText('This is a test summary.')).toBeInTheDocument();

    // Verificar se a imagem correta está sendo renderizada
    const image = screen.getByAltText('episode-poster') as HTMLImageElement;
    expect(image.src).toContain('test-image-url');
  });

  it('should go back when the back button is clicked', () => {
    // Spy no método window.history.back
    const historyBackSpy = jest.spyOn(window.history, 'back');

    render(
      <ShowProvider>
        <MemoryRouter>
          <EpisodeDetails />
        </MemoryRouter>
      </ShowProvider>
    );

    // Simular clique no botão "Back"
    const backButton = screen.getByText('Back');
    userEvent.click(backButton);

    // Verificar se window.history.back foi chamado
    expect(historyBackSpy).toHaveBeenCalledTimes(1);
  });
});
