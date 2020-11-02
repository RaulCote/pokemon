import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App';

jest.mock('../src/services/pokemonService.js', () => ({
  get: Promise.resolve({ data: [] }),
}));

describe('App', () => {
  it('should render without crashing', () => {
    render(<App />);
  });
});
