import { render, screen } from '@testing-library/react';
import App from './App';

test('notebook', () => {
  render(<App />);
  const linkElement = screen.getByText(/notebook/i);
  expect(linkElement).toBeInTheDocument();
});
