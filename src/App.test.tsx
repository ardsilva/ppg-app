import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ShowDetails } from './Molecules/ShowDetails/ShowDetails';
import { Home } from './Molecules/Home/Home';
import { EpisodeDetails } from './Molecules/EpisodeDetails/EpisodeDetailts';
import { ShowProvider } from './context/ShowContext';

describe('App Routing', () => {
  test('should render Home component on default route', () => {
    render(
      <ShowProvider>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>
      </ShowProvider>
    );
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
  });

  test('should render ShowDetails component on /show route', () => {
    render(
      <ShowProvider>
      <MemoryRouter initialEntries={['/show']}>
        <Routes>
          <Route path="/show" element={<ShowDetails />} />
        </Routes>
      </MemoryRouter>
      </ShowProvider>
    );
    setTimeout(() => {
      expect(screen.getByText(/Get Episodes/i)).toBeInTheDocument();
    }, 3000);
  });

  test('should render EpisodeDetails component on /episode route', () => {
    render(
      <ShowProvider>
      <MemoryRouter initialEntries={['/episode']}>
        <Routes>
          <Route path="/episode" element={<EpisodeDetails />} />
        </Routes>
      </MemoryRouter>
      </ShowProvider>
    );
    expect(screen.getByText(/Nenhum episódio selecionado!/i)).toBeInTheDocument();
  });
});
