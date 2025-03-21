import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import NewsletterSignup from '../newslettersignup'
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('NewsletterSignup', () => {
    it('will render the newsletter signup form', () => {
        render(<NewsletterSignup />)

        expect(screen.getByRole('heading')).toHaveTextContent('Sign up for new recipes')
        expect(screen.getByRole('textbox')).toHaveAttribute('id', 'email-newsletter')
        expect(screen.getByRole('button')).toHaveTextContent('Sign me up')
    })

    it('shows success message when valid email submits', async () => {
        const thankYouMsg = 'Thank you for signing up to our recipe newsletter';
        //assumed axios response format
        //Arrange 
        mockedAxios.post.mockResolvedValueOnce({ data: { message: thankYouMsg } });
        render(<NewsletterSignup />);
        //Act
        await userEvent.type(screen.getByLabelText(/email/i), 'chili@curry.com');
        await userEvent.click(screen.getByText(/Sign me up/i));
        //Assert
        await waitFor(() => {
            expect(screen.getByText(thankYouMsg)).toBeInTheDocument();
        })
    })

    it('shows error message when invalid', async () => {
        //Arrange 
        render(<NewsletterSignup />)
        //Act
        await userEvent.type(screen.getByRole('textbox'), 'invalid-email');
        await userEvent.click(screen.getByRole('button'));
        //Assert
        await waitFor(() => {
            expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address')
        })
    })
})