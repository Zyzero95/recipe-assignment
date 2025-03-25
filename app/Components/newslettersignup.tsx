'use client'

import { useState } from 'react'
import axios from 'axios'
import { NewsletterSchema } from '@/app/validations/newsletter'
import componentStyles from './newslettersignup.module.css';
import globalStyles from './utilities.module.css';

export default function NewsletterSignup() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const thankYouMessage = 'Thank you for signing up to our recipe newsletter';
    const errorMessage = 'Please enter a valid email address';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        //reset these on every call
        setErrorMsg('');
        setMessage('');

        // browser native validation
        const form = e.currentTarget as HTMLFormElement;
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        try {

            const validated = NewsletterSchema.parse({ email });
            await axios.post('/api/newsletter', validated);
            setMessage(thankYouMessage);
            //reset state
            setEmail('');

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setErrorMsg(errorMessage);
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleInvalidEmail = (e: React.InvalidEvent<HTMLInputElement>) => {
        e.preventDefault();
        const input = e.target as HTMLInputElement;

        if (input.validity.valueMissing || input.validity.typeMismatch) {
            input.setCustomValidity(errorMessage);
        } /* else if(input.validity.typeMismatch) {
            input.setCustomValidity(errorMessage);
        } */
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        input.setCustomValidity('');
        setEmail(input.value);
    }


    return (
        <>
            <h3>Sign up for new recipes</h3>
            <form onSubmit={handleSubmit} role="form" className={componentStyles.formSignUp} translate="no">
                <label htmlFor="email-newsletter">Email:</label>
                <span className={globalStyles.screenReaderOnly}>(required)</span>
                <input type="email"
                    id="email-newsletter"
                    name="email-newsletter"
                    // onInvalid={handleInvalidEmail}
                    // onInput={handleInput}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    aria-required="true"
                    aria-label='Email for newsletter subscription'
                    aria-invalid={!!errorMsg}
                    aria-describedby="email-error" // see errorMsg
                    placeholder="you@somedomain" />
                <button id="submit" type="submit">Sign me up</button>
            </form>
            {message && <p role="status" className="success" aria-live='polite'>{message}</p>}
            {errorMsg && <p id="email-error" role="alert" className="error" aria-live='assertive'>{errorMsg}</p>}
        </>
    )
}