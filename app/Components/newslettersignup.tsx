'use client'

import { useState } from 'react'
import axios from 'axios'
import { NewsletterSchema } from '@/app/validations/newsletter'

export default function NewsletterSignup() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const thankYouMsg = 'Thank you for signing up to our recipe newsletter';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        //reset these on every call
        setErrorMsg('');
        setMessage('');

        try {

            const validated = NewsletterSchema.parse({ email });
            await axios.post('/api/newsletter', validated);
            setMessage(thankYouMsg);
            //reset state
            setEmail('');

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setErrorMsg('Please enter a valid email address');
        }
    }

    return (
        <>
            <h3>Sign up for new recipes</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email-newsletter">Email:</label>
                <input type="email"
                    id="email-newsletter"
                    name="email-newsletter"
                    aria-required="true"
                    aria-label='Email for newsletter subscription'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="you@somedomain" />
                <button id="submit" type="submit">Sign me up</button>
            </form>
            {message && <p role="status" className="success">{message}</p>}
            {errorMsg && <p role="alert" className="error">{errorMsg}</p>}
        </>
    )
}