// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MeshPulse title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MeshPulse/i);
    expect(titleElement).toBeInTheDocument();
});
