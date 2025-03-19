export default function NewsletterSignup() {

    return (
        <>
            <h3>Sign up for new recipes</h3>
            <form>
                <label htmlFor="email-newsletter"></label>
                <input id="email-newsletter" name="email-newsletter" />
                <button id="submit" formAction="/">Sign up</button>
            </form>
        </>
    )
}