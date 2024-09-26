import { render, screen } from '@testing-library/react';
import { Home } from './Home';
import userEvent from '@testing-library/user-event';

// Mock para o useNavigate do React Router
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Home Component', () => {
  beforeEach(() => {
    mockNavigate.mockClear(); // Limpar o mock antes de cada teste
  });

  it('should render the title correctly', () => {
    render(<Home />);

    // Verificar se o título "Welcome" foi renderizado
    expect(screen.getByText('Welcome')).toBeInTheDocument();
  });

  it('should render the button with correct text', () => {
    render(<Home />);

    // Verificar se o botão com o texto "Get Powerpuff Girls Show" foi renderizado
    const button = screen.getByText('Get Porwepuff Girls Show');
    expect(button).toBeInTheDocument();
  });

  it('should navigate to /show when button is clicked', () => {
    render(<Home />);

    // Simular clique no botão
    const button = screen.getByText('Get Porwepuff Girls Show');
    userEvent.click(button);

    // Verificar se o navigate foi chamado com o caminho '/show'
    expect(mockNavigate).toHaveBeenCalledWith('/show');
  });
});
