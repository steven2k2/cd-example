import React from 'react'; // Add this line
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the App component', () => {
    render(<App />);
    expect(screen.getByText(/Continuous Deployment Example/i)).toBeInTheDocument();
});