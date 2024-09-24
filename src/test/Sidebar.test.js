import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from '../Layout/Sidebar';

jest.mock('@mui/material', () => {
    const originalModule = jest.requireActual('@mui/material');
    return {
        ...originalModule,
        useMediaQuery: jest.fn(() => true), // Mocking to always return true
    };
});

describe('Sidebar Component', () => {
    test('renders all buttons', () => {
        render(
            <Router>
                <Sidebar />
            </Router>
        );
        const buttons = ['Dashboard', 'Fulfillment Center', 'User', 'Inventory', 'Shipping', 'Customer Orders', 'Calendar', 'Issues'];
        buttons.forEach(button => {
            const buttonElement = screen.getByText(button);
            expect(buttonElement).toBeInTheDocument();
        });
    });

    test('navigates to Dashboard on button click', () => {
        render(
            <Router>
                <Sidebar />
            </Router>
        );
        const button = screen.getByText(/Dashboard/i);
        fireEvent.click(button);

        // Check if the expected action happens
        expect(window.location.pathname).toBe('/'); // Update this based on your routing
    });

    test('navigates to User on button click', () => {
        render(
            <Router>
                <Sidebar />
            </Router>
        );
        const button = screen.getByText(/User/i);
        fireEvent.click(button);

        // Check if the expected action happens
        expect(window.location.pathname).toBe('/user'); // Update this based on your routing
    });

    test('navigates to Fulfillment Center on button click', () => {
        render(
            <Router>
                <Sidebar />
            </Router>
        );
        const button = screen.getByText(/Fulfillment Center/i);
        fireEvent.click(button);

        // Check if the expected action happens
        expect(window.location.pathname).toBe('/fulfillment-center'); // Update this based on your routing
    });
    test('navigates to Inventory on button click', () => {
        render(
            <Router>
                <Sidebar />
            </Router>
        );
        const button = screen.getByText(/Inventory/i);
        fireEvent.click(button);

        // Check if the expected action happens
        expect(window.location.pathname).toBe('/inventory'); // Update this based on your routing
    });
    test('navigates to Shipping Center on button click', () => {
        render(
            <Router>
                <Sidebar />
            </Router>
        );
        const button = screen.getByText(/Shipping/i);
        fireEvent.click(button);

        // Check if the expected action happens
        expect(window.location.pathname).toBe('/shipping'); // Update this based on your routing
    });

    test('navigates to Customer Orders on button click', () => {
        render(
            <Router>
                <Sidebar />
            </Router>
        );
        const button = screen.getByText(/Customer Orders/i);
        fireEvent.click(button);

        // Check if the expected action happens
        expect(window.location.pathname).toBe('/orders'); // Update this based on your routing
    });
    test('navigates to Calendar on button click', () => {
        render(
            <Router>
                <Sidebar />
            </Router>
        );
        const button = screen.getByText(/Calendar/i);
        fireEvent.click(button);

        // Check if the expected action happens
        expect(window.location.pathname).toBe('/calendar'); // Update this based on your routing
    });
    test('navigates to Issues on button click', () => {
        render(
            <Router>
                <Sidebar />
            </Router>
        );
        const button = screen.getByText(/Issues/i);
        fireEvent.click(button);

        // Check if the expected action happens
        expect(window.location.pathname).toBe('/issues'); // Update this based on your routing
    });
});
