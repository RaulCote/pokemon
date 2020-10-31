import React from 'react';
import { screen, render } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
  it('should render', () => {
    render(<App />);

    const message = 'Hello World!';

    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
