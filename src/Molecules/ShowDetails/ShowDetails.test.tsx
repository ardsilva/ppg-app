import { render, screen, waitFor } from '@testing-library/react';
import { ShowDetails } from './ShowDetails';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { ShowProvider } from '../../context/ShowContext';

// Mock global fetch
global.fetch = jest.fn();

// Mock useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('ShowDetails Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders show details correctly', async () => {
    const showData = {
      name: 'Powerpuff Girls',
      summary: '<p>This is the summary</p>',
      image: { original: 'https://via.placeholder.com/150' },
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(showData),
    });

    render(
      <ShowProvider>
        <MemoryRouter>
          <ShowDetails />
        </MemoryRouter>
      </ShowProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText('Powerpuff Girls')).toBeInTheDocument();
      expect(screen.getByText('This is the summary')).toBeInTheDocument();
      expect(screen.getByAltText('ppg-poster')).toHaveAttribute(
        'src',
        'https://via.placeholder.com/150',
      );
    });
  });

  test('fetches and displays episodes when button is clicked', async () => {
    const showData = {
      name: 'Powerpuff Girls',
      summary: '<p>This is the summary</p>',
      image: { original: 'https://via.placeholder.com/150' },
    };

    const episodesData = [
      { id: 1, name: 'Episode 1' },
      { id: 2, name: 'Episode 2' },
    ];

    // Mockar a resposta inicial do show
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(showData),
    });

    // Mockar a resposta para os episódios
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(episodesData),
    });

    render(
      <ShowProvider>
        <MemoryRouter>
          <ShowDetails />
        </MemoryRouter>
      </ShowProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText('Powerpuff Girls')).toBeInTheDocument();
    });

    const getEpisodesButton = screen.getByText('Get Episodes');
    userEvent.click(getEpisodesButton);

    await waitFor(() => {
      expect(screen.getByText(/Episode 1/)).toBeInTheDocument();
      expect(screen.getByText(/Episode 2/)).toBeInTheDocument();
    });
  });
});
