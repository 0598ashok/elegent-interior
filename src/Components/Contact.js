import React, { useEffect , useState} from "react";
import "./Contact.css";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast , Zoom} from 'react-toastify';
import Preloader from "./Preloader";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init(); // Initialize AOS
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    message: "",
  });

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation: Check if all required fields are filled out
    if (
      !formData.name ||
      !formData.mobileNumber ||
      !formData.email ||
      !formData.message
    ) {
      toast.error("Please fill out all required fields");
      return;
    }
  

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbycENHpK4x06rTrfUmUveNnpanBqJtr-qwkG2BwkO9RtvOF6j8oLiqQQdXpBn5mCmwe/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      console.log(response);

      if (response.ok) {
        toast.success("Thanks! We'll get back to you soon");
        setFormData({
          name: "",
          mobileNumber: "",
          email: "",
          message: "",
        });
      } else {
        toast.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (

    <>
      
      {loading ? ( // Conditionally render the preloader while loading
        // 
        <div className="preloader-container">
          {/* <p>Loading ....</p> */}
          <Preloader />
        </div>
      ) : (
        <div>
          <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            transition={Zoom}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <div className="floating-icons">
            <a href="tel:+919491178402" className="icon">
              <button
                onClick={() => (window.location.href = "tel:+919491178402")}
                className="red_fixed_button"
              >
                <i class="ri-phone-fill"></i> Call Now
              </button>
            </a>
            <a href="https://wa.me/+919491178402" className="icon">
              <button className="ml-2 green_fixed_button ">
                <i class="ri-whatsapp-line"></i> Whatsapp
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
                      <form onSubmit={handleSubmit}>
                        <h1 class="pb-4">Get In Touch</h1>
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          type="text"
                          placeholder="Name*"
                          class="form-control form_control"
                        />
                        <input
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          type="number"
                          placeholder="Contact Number*"
                          class="form-control form_control"
                        />
                        <input
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          type="email"
                          placeholder="Email*"
                          class="form-control form_control"
                        />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
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
      )}
      </>
  );
};

export default Contact;
