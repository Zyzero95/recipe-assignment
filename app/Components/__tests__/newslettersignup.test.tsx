import { render, screen } from '@testing-library/react'
import NewsletterSignup from '../newslettersignup'

describe('NewsletterSignup', () => {
    it('will render the newsletter signup form', () => {
        render(<NewsletterSignup />)

        expect(screen.getByRole('heading')).toHaveTextContent('Sign up for new recipes')
        expect(screen.getByRole('textbox')).toHaveAttribute('id', 'email-newsletter')
        expect(screen.getByRole('button')).toHaveTextContent('Sign up')
    })
})