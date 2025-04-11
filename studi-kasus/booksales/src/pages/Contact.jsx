import React from 'react';

export default function Contact() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">Contact Us</h2>
      <div className="row g-4" data-aos="fade-up">
        
        {/* Contact Form */}
        <div className="col-md-6">
          <form
            action="https://formsubmit.co/info@nurulfikri.ac.id"
            method="POST"
            className="p-4 border rounded-3 shadow-sm bg-light"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                <i className="fas fa-user me-2"></i>Full Name
              </label>
              <input type="text" name="name" className="form-control" id="name" placeholder="Your name" required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                <i className="fas fa-envelope me-2"></i>Email
              </label>
              <input type="email" name="email" className="form-control" id="email" placeholder="name@example.com" required />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                <i className="fas fa-comment me-2"></i>Message
              </label>
              <textarea name="message" className="form-control" id="message" rows="5" placeholder="Your message..." required></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              <i className="fas fa-paper-plane me-2"></i>Send Message
            </button>
          </form>
        </div>

        {/* Contact Info & Map */}
        <div className="col-md-6" data-aos="fade-left">
          <div className="mb-4">
            <h5><i className="fas fa-map-marker-alt me-2 text-primary"></i>Address</h5>
            <p>Jl. Raya Lenteng Agung No.20-21, RT.4/RW.1, Srengseng Sawah, Kec. Jagakarsa, Jakarta Selatan,</p>
          </div>

          <div className="mb-4">
            <h5><i className="fas fa-envelope me-2 text-primary"></i>Email</h5>
            <p>info@nurulfikri.ac.id</p>
          </div>

          <div className="mb-4">
            <h5><i className="fas fa-phone me-2 text-primary"></i>Phone</h5>
            <p>021-786.3191</p>
          </div>

          <div className="mb-4">
            <h5><i className="fas fa-share-alt me-2 text-primary"></i>Follow Us</h5>
            <div className="d-flex gap-3 fs-4">
              <a href="#" className="text-dark"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-dark"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-dark"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-dark"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-4">
            <iframe
              title="Google Maps Bookstore"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.329272545121!2d106.82715361532703!3d-6.21462099550312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3f6d8f5d6c5%3A0xaed3c3c2ea61f27a!2sJakarta%20Pusat%2C%20DKI%20Jakarta!5e0!3m2!1sen!2sid!4v1615434524049!5m2!1sen!2sid"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-3 shadow-sm"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
