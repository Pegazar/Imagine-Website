import "./Contact.scss"

const Contact = () => {
    return (
        <div className="contact" >
            <div className="container">
                <div className="contact-area">
                    <h2>Contact Us</h2>
                    <form>
                        <h3>Contact Form</h3>
                        <div className="firstname">
                            <label htmlFor="firstname">
                                First Name
                                <input type="text" id="firstname" />
                            </label>
                            <label htmlFor="lastname">
                                Last Name
                                <input type="text" id="lastname" />
                            </label>
                        </div>
                        <label htmlFor="email">
                            Email
                            <input type="email" id="email" />
                        </label>
                        <label htmlFor="subject">
                            Subject
                            <input type="text" id="subject" />
                        </label>
                        <label htmlFor="message">
                            Message
                            <textarea id="message" placeholder="Leave your message here..."></textarea>
                        </label>
                        <button>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact