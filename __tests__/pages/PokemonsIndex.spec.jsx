import React from 'react';
import { render, screen } from '@testing-library/react';
import PokemonsIndex from '../../src/pages/PokemonsIndex';
import usePokemonFetcher from '../../src/hooks/usePokemonFetcher';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../src/hooks/usePokemonFetcher.js');

const useHook = usePokemonFetcher.mockImplementation(() => ({
  data: {
    results: [
      {
        name: 'Raulator',
      },
    ],
  },
}));

describe('PokemonsIndex page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the Pokemon Logo and Generation 1 text', () => {
    render(
      <MemoryRouter>
        <PokemonsIndex />
      </MemoryRouter>
    );

    expect(screen.getByAltText('Pokemon Logo')).toBeInTheDocument();
    expect(screen.getByText('Generation 1')).toBeInTheDocument();
  });

  it('should try to call the api with the predefined url', () => {
    render(
      <MemoryRouter>
        <PokemonsIndex />
      </MemoryRouter>
    );

    expect(useHook).toHaveBeenCalledWith('/pokemon?limit=151');
    expect(screen.getByText('1 pokemon')).toBeInTheDocument();
  });

  it('should render an index card with the name pokemon name', () => {
    render(
      <MemoryRouter>
        <PokemonsIndex />
      </MemoryRouter>
    );

    expect(screen.getByText('Raulator')).toBeInTheDocument();
    expect(screen.getByAltText('Raulator-gif')).toBeInTheDocument();
  });

  it('should render the loading effect if the hook return it', () => {
    usePokemonFetcher.mockImplementation(() => ({
      isLoading: true,
      data: [],
    }));

    render(
      <MemoryRouter>
        <PokemonsIndex />
      </MemoryRouter>
    );

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
});
