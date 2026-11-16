import { render, screen } from '@testing-library/react';
import App from './App';

test('renders William Hein', () => {
  render(<App />);
  expect(screen.getByText(/William Hein/i)).toBeInTheDocument();
});
