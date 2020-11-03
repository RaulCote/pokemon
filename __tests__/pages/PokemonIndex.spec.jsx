import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PokemonIndex from '../../src/pages/PokemonIndex';
import usePokemonFetcher from '../../src/hooks/usePokemonFetcher';

jest.mock('../../src/hooks/usePokemonFetcher.js');

const useHook = usePokemonFetcher.mockImplementation(() => ({
  data: {
    results: [
      {
        name: 'Raulator',
      },
      {
        name: 'Pikachu',
      },
    ],
  },
}));

describe('PokemonIndex page', () => {
  const renderComponent = (props = {}) =>
    render(
      <MemoryRouter>
        <PokemonIndex {...props} />
      </MemoryRouter>
    );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the Pokemon Logo and Generation 2 text', () => {
    renderComponent();
    expect(screen.getByAltText('Pokemon Logo')).toBeInTheDocument();
    expect(screen.getByText('Generation 1')).toBeInTheDocument();
  });

  it('should try to call the api with the predefined url', () => {
    renderComponent();

    expect(useHook).toHaveBeenCalledWith('/pokemon?limit=151');
    expect(screen.getByText('2 pokemon')).toBeInTheDocument();
  });

  it('should render an index card with the name pokemon name', () => {
    renderComponent();

    expect(screen.getByText('Raulator')).toBeInTheDocument();
    expect(screen.getByAltText('Raulator-gif')).toBeInTheDocument();
  });

  it('should render the loading effect if the hook return it', () => {
    usePokemonFetcher.mockImplementationOnce(() => ({
      isLoading: true,
      data: [],
    }));

    renderComponent();

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  it('should filter the results', () => {
    renderComponent();

    waitFor(() =>
      expect(screen.findAllByTestId('pokemon-cards')).toHaveLength(2)
    );

    const searchInput = screen.getByPlaceholderText('Search...');
    const event = {
      target: {
        value: 'RA',
      },
    };

    fireEvent.change(searchInput, event);

    waitFor(() =>
      expect(screen.findAllByTestId('pokemon-cards')).toHaveLength(1)
    );
  });
});
