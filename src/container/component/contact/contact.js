import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact" data-aos="fade-up" data-aos-delay="100">
      <div className="container">

        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="info-item  d-flex flex-column justify-content-center align-items-center">
              <i className="bi bi-map"></i>
              <h3>Our Address</h3>
              <p>A/604, Trade Square BLDG.Mehera ind,<br/>AK Road Mumbai-400072, Maharashtra, India.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-item d-flex flex-column justify-content-center align-items-center">
              <i className="bi bi-envelope"></i>
              <h3>Email Us</h3>
              <p> boostsubserve@gmail.com</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-item  d-flex flex-column justify-content-center align-items-center">
              <i className="bi bi-telephone"></i>
              <h3>Call Us</h3>
              <p>+91 8369700470</p>
              <p>+91 74984 24264</p>
            </div>
          </div>

        </div>

        <div className="row gy-4 mt-1">

          <div className="col-lg-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1909953169647!2d72.88324947466567!3d19.09927525124254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c86fc497bd3f%3A0x6a2fdb220babd2e0!2sTrade%20Square!5e0!3m2!1sen!2sin!4v1707372346067!5m2!1sen!2sin" frameBorder="0" style={{border: "0", width: "100%", height: "384px"}} allowFullScreen></iframe>
          </div>

          <div className="col-lg-6">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row gy-4">
                <div className="col-lg-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-lg-6 form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
