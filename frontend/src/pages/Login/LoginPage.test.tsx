import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import LoginPage from './LoginPage';
import { createMockClient } from 'mock-apollo-client';
import { BrowserRouter } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';
import { LOGIN_Student } from '../../graphql/mutaion';
import userEvent from '@testing-library/user-event';
import { UserContext } from '../../context/UserContext';

describe('LoginPage', () => {

    const mockUser = {
        email: "hishammpsn@gmail.com",
        isAdmin: true,
        name: "mohammed hisham mp",
        std: 2,
        stdID: "646e4febc3cd4764c8790680",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzBmNDk2MjliNzcxYTg1YTYwYjhhNiIsImlhdCI6MTY4Njc2NzMxOSwiZXhwIjoxNjg5MzU5MzE5fQ.Ks4DJyG6xrpsBPZDqUVXJN29GqDaZWMKGHwBl5ZxtPA"
    };

    const mocks = [
        {
            request: {
                query: LOGIN_Student,
                variables: {
                    email: 'test@example.com',
                    password: 'password123',
                },
            },
            result: {
                data: {
                    login: mockUser,
                },
            },
        },
    ];
    test('renders login form', () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <BrowserRouter>
                    <LoginPage />
                </BrowserRouter>
            </MockedProvider>
        );
        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);
        const loginButton = screen.getByRole('button', { name: 'Login' });

        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(loginButton).toBeDisabled();
    });
    test('Login button enable when email and password entered', () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <BrowserRouter>
                    <LoginPage />
                </BrowserRouter>
            </MockedProvider>
        );
        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);
        const loginButton = screen.getByRole('button', { name: 'Login' });

        userEvent.type(emailInput, "example@gmail.com");
        userEvent.type(passwordInput, "pass123");
        expect(loginButton).toBeEnabled();

    });
  
});
