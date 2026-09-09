import "../stylesheet/Contact.css";

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <span>GET IN TOUCH</span>

        <h1>
          Let's talk
          <br />
          timepieces.
        </h1>

        <p>
          Whether you have a question about a timepiece, your order, or simply
          want to know more about KodacLuxe, we're here to help.
        </p>
      </section>

      <section className="contact-section">
        {/* Contact Information */}
        <div className="contact-info">
          <span>CONTACT US</span>

          <h2>
            We're here
            <br />
            to help.
          </h2>

          <p>
            Have a question? Send us a message and our team will get back to you
            as soon as possible.
          </p>

          <div className="contact-details">
            <div>
              <small>EMAIL</small>
              <p>hello@kodacluxe.com</p>
            </div>

            <div>
              <small>PHONE</small>
              <p>+234 91 3580 1082</p>
            </div>

            <div>
              <small>LOCATION</small>
              <p>Port Harcourt, Nigeria</p>
            </div>

            <div>
              <small>INSTAGRAM</small>
              <p>@kodacluxe_</p>
            </div>

            <div>
              <small>FACEBOOK</small>
              <p>KODAC LUXE</p>
            </div>

            <div>
              <small>TIKTOK</small>
              <p>@kodacluxe</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your email" />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="How can we help?" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="6"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
}
