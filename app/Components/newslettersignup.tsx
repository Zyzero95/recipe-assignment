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

    const errorMessage = 'Please enter a valid email address';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        //reset these on every call
        setErrorMsg('');
        setMessage('');

        // Layer 1: browser native validation
        const form = e.currentTarget as HTMLFormElement;
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        try {
            const validated = NewsletterSchema.parse({ email });
            const response = await axios.post('/api/newsletter', validated);
            setMessage(response.data.message);
            //reset state when validated
            setEmail('');

        } catch (error) {
            console.error('Form submission error:', error); // Debug log
            if (axios.isAxiosError(error)) {
                setErrorMsg(error.response?.data?.error);
            } else {
                setErrorMsg(errorMessage);
            }
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleInvalidEmail = (e: React.InvalidEvent<HTMLInputElement>) => {
        e.preventDefault();
        const input = e.target as HTMLInputElement;

        if (input.validity.valueMissing/*  || input.validity.typeMismatch */) {
            input.setCustomValidity(errorMessage);
        } else if (input.validity.typeMismatch) {
            input.setCustomValidity('other errorMessage');
        }
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
                <fieldset>
                    <label htmlFor="email-newsletter">
                        Email:
                        <span
                            className={globalStyles.screenReaderOnly}
                            role="note"
                            id="email-required-description"
                        >
                            This field is required
                        </span>
                    </label>
                    <input
                        type="email"
                        id="email-newsletter"
                        name="email-newsletter"
                        onInvalid={handleInvalidEmail}
                        onInput={handleInput}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        aria-required="true"
                        aria-label='Email for newsletter subscription'
                        aria-invalid={!!errorMsg}
                        aria-describedby={`email-required-description ${errorMsg ? "email-error" : ""}`}
                        placeholder="your@emailaddress.com" />
                </fieldset>
                <button id="submit" type="submit">Sign me up</button>
            </form>
            {message && <p role="status" className="success" aria-live="polite">{message}</p>}
            <p
                id="email-error"
                role="alert"
                className="error"
                aria-live="assertive"
                hidden={!errorMsg}
            >
                {errorMsg || " "}
            </p>
        </>
    )
}