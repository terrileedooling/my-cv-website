import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm(import.meta.env.FORMSPREE_FORM_ID);

    if (state.succeeded) {
        return <p>Thank you for contacting me.</p>
    }

    return (
        <form action={import.meta.env.FORMSPREE_URL} method="POST">
            <label htmlFor="email" className="font-semibold">
                Email Address
            </label>
            <input
                id="email"
                type="email"
                name="email"
                required
                className="border border-gray-300 p-2rounded"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <label htmlFor="message" className="font-semibold">
                Message
            </label>
            <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="border border-gray-300 p-2rounded"
            />
            <ValidationError prefix="Message" field="message" erros={state.error} />

            <button
                type="submit"
                disabled={state.submitting}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
                {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    )
}

export default ContactForm;