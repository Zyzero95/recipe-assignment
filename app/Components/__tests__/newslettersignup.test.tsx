import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import NewsletterSignup from '../newslettersignup'
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Newsletter signup form', () => {
    const thankYouMsg = 'Thank you for signing up to our recipe newsletter';
    const errorMsg = 'Please enter a valid email address';

    beforeEach(() => {
        Object.defineProperty(HTMLInputElement.prototype, 'checkValidity', {
            writable: true,
            value: function (this: HTMLInputElement) {
                return this.value.includes('@');
            }
        });
    });

    it('uses HTML5 validation', async () => {
        render(<NewsletterSignup />)
        const emailInput = screen.getByRole('textbox') as HTMLInputElement;

        // invalid email address
        await userEvent.type(emailInput, 'not-an-email');
        expect(emailInput.checkValidity()).toBe(false);

        // valid email address
        await userEvent.clear(emailInput);
        await userEvent.type(emailInput, 'valid@email.com');
        expect(emailInput.checkValidity()).toBe(true);
    });

    it('shows browser validation message for empty input', async () => {
        render(<NewsletterSignup />);

        const emailInput = screen.getByLabelText('Email:') as HTMLInputElement;
        const submitButton = screen.getByRole('button', { name: 'Sign me up' });

        expect(emailInput.value).toBe('');

        // attempt submitting empty form
        await userEvent.click(submitButton);
        expect(emailInput).toBeInvalid();
        expect(emailInput.validationMessage).not.toBe('');
        expect(screen.queryByRole('status')).not.toBeInTheDocument();
        expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    });

    it('shows success message when valid email is submitted', async () => {
        //Arrange
        //assumed axios response format
        mockedAxios.post.mockResolvedValueOnce({ data: { message: thankYouMsg } });
        render(<NewsletterSignup />);
        //Act
        await userEvent.type(screen.getByLabelText(/email/i), 'chili@curry.com');
        await userEvent.click(screen.getByText(/Sign me up/i));
        //Assert
        await waitFor(() => {
            expect(screen.getByText(thankYouMsg)).toBeInTheDocument();
        })
    });

    it('shows error message when email is invalid', async () => {
        //Arrange 
        render(<NewsletterSignup />)
        //Act
        await userEvent.type(screen.getByRole('textbox'), 'you@idjidf');
        await userEvent.click(screen.getByRole('button'));
        //Assert
        await waitFor(() => {
            expect(screen.getByText(errorMsg)).toBeInTheDocument();
        })
    })
})

describe('NewsletterSignup component', () => {
    it('will render the newsletter signup form elements', () => {
        render(<NewsletterSignup />)

        expect(screen.getByRole('heading')).toHaveTextContent('Sign up for new recipes')
        expect(screen.getByRole('textbox')).toHaveAttribute('id', 'email-newsletter')
        expect(screen.getByRole('button')).toHaveTextContent('Sign me up')
    })
});

