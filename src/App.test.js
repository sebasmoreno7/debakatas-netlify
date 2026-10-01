import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('shows the home page at the root path', () => {
  window.history.pushState({}, '', '/');
  const { getByText, queryByText } = render(<App />);
  expect(getByText('Ejemplo de navegación con React Router y Netlify.')).toBeInTheDocument();
  expect(queryByText('404')).not.toBeInTheDocument();
});

test('shows a not found page for an unknown path', () => {
  window.history.pushState({}, '', '/missing');
  const { getByText } = render(<App />);
  expect(getByText('404')).toBeInTheDocument();
});
