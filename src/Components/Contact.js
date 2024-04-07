import React, { useEffect } from "react";
import "./Contact.css";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div>
      <div className="floating-icons">
        <a href="tel:+919491178402" className="icon">
          <button
            onClick={() => (window.location.href = "tel:+919491178402")}
            className="red_fixed_button"
          >
            <i className="fa-solid fa-phone-volume"></i> Call Now
          </button>
        </a>
        <a href="https://wa.me/+919491178402" className="icon">
          <button className="ml-2 green_fixed_button ">
            <i class="fa-brands fa-whatsapp "></i> Whatsapp
          </button>
        </a>
      </div>

      <section className="contact_sec1">
        <h1>Contact Us</h1>
      </section>

      <section class="home_sec6">
        <div data-aos="zoom-in" data-aos-duration="2000">
          <div class="container">
            <div class="card">
              <div class="row">
                <div class="col-md-8">
                  <form>
                    <h1 class="pb-4">Get In Touch</h1>
                    <input
                      type="text"
                      placeholder="Name*"
                      class="form-control form_control"
                    />
                    <input
                      type="number"
                      placeholder="Contact Number*"
                      class="form-control form_control"
                    />
                    <input
                      type="email"
                      placeholder="Email*"
                      class="form-control form_control"
                    />
                    <textarea
                      class="form-control form_control"
                      rows="3"
                      placeholder="message*"
                    ></textarea>
                    <button>Send Message</button>
                  </form>
                </div>
                <div class="col-md-4">
                  <img
                    src="https://img.freepik.com/free-photo/picture-frame-by-velvet-armchair_53876-132788.jpg"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
