import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_FORM_ID);

    if (state.succeeded) {
        return <p>Thank you for contacting me.</p>
    }

    return (
        <form action={import.meta.env.VITE_FORMSPREE_URL} method="POST" className="contact-form animate-bounce-scale">
            <div className="form-input">
                <label htmlFor="name">
                    Name
                </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />

                <label htmlFor="email">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <label htmlFor="message">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                />
                <ValidationError prefix="Message" field="message" erros={state.error} />

            </div>

            <button
                type="submit"
                disabled={state.submitting}
            >
                {state.submitting ? 'Sending...' : 'Send'}
            </button>
        </form>
    )
}

export default ContactForm;