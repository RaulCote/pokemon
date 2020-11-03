import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PokemonsIndex from '../../src/pages/PokemonsIndex';
import usePokemonFetcher from '../../src/hooks/usePokemonFetcher';

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
  const renderComponent = (props = {}) =>
    render(
      <MemoryRouter>
        <PokemonsIndex {...props} />
      </MemoryRouter>
    );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the Pokemon Logo and Generation 1 text', () => {
    renderComponent();
    expect(screen.getByAltText('Pokemon Logo')).toBeInTheDocument();
    expect(screen.getByText('Generation 1')).toBeInTheDocument();
  });

  it('should try to call the api with the predefined url', () => {
    renderComponent();

    expect(useHook).toHaveBeenCalledWith('/pokemon?limit=151');
    expect(screen.getByText('1 pokemon')).toBeInTheDocument();
  });

  it('should render an index card with the name pokemon name', () => {
    renderComponent();

    expect(screen.getByText('Raulator')).toBeInTheDocument();
    expect(screen.getByAltText('Raulator-gif')).toBeInTheDocument();
  });

  it('should render the loading effect if the hook return it', () => {
    usePokemonFetcher.mockImplementation(() => ({
      isLoading: true,
      data: [],
    }));

    renderComponent();

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
});
