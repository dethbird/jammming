import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login to spotify', () => {
  render(<App />);
  const linkElement = screen.getByText(/login to spotify/i);
  expect(linkElement).toBeInTheDocument();
});
