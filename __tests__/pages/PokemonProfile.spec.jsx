import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PokemonProfile from '../../src/pages/PokemonProfile';
import usePokemonFetcher from '../../src/hooks/usePokemonFetcher';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: jest.fn().mockReturnValue({ push: jest.fn() }),
  useParams: jest.fn().mockReturnValue({ name: 'Raulator' }),
}));

jest.mock('../../src/hooks/usePokemonFetcher.js');

const useHook = usePokemonFetcher.mockImplementation(() => ({
  data: {
    name: 'Raulator',
    id: 1,
    height: 1.8,
    types: [
      {
        type: {
          name: 'Person',
        },
      },
    ],
    abilities: [
      {
        ability: {
          name: 'Front End Development',
        },
      },
      {
        ability: {
          name: 'Great Eye for CSS',
        },
      },
    ],
  },
}));

describe('PokemonProfile page', () => {
  const renderComponent = (props = {}) => render(<PokemonProfile {...props} />);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call data base to get the pokemon info on start-up', () => {
    renderComponent();

    expect(useHook).toHaveBeenCalledWith('/pokemon/Raulator');
  });

  it('should render Name, ID, Type, Height and Habilities labels', () => {
    renderComponent();

    expect(screen.getByText('ID:')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Type:')).toBeInTheDocument();
    expect(screen.getByText('Height:')).toBeInTheDocument();
    expect(screen.getByText('Habilities')).toBeInTheDocument();
  });

  it('should have a close button', () => {
    renderComponent();

    expect(screen.getByText('X')).toBeInTheDocument();

    const closeButton = screen.getByTestId('close-button');

    fireEvent.click(closeButton);
  });

  it('should render the loading effect if the hook is loading', () => {
    usePokemonFetcher.mockImplementationOnce(() => ({
      isLoading: true,
      data: [],
    }));

    renderComponent();

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
});
