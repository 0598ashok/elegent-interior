import React, { useEffect, useState } from "react";
import { ToastContainer, toast , Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Home.css";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from "./Preloader";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init(); // Initialize AOS
    setTimeout(() => {
      setLoading(false);
 
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
  
  console.log(formData);
  return (
    <>
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
      {loading ? ( // Conditionally render the preloader while loading
        // 
        <div className="preloader-container">
          {/* <p>Loading ....</p> */}
          <Preloader />
        </div>
      ) : (
        <div>
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

          <section>
            <div
              id="demo"
              class="carousel slide"
              data-ride="carousel"
              data-pause="true"
            >
              <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
              </ul>

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div width="100%" className="banner1">
                    <h1>Personalize Design Reflecting Your Style</h1>
                  </div>
                </div>
                <div class="carousel-item">
                  <div width="100%" className="banner2">
                    <h1>Infusing Your Space with Personal Flair</h1>
                  </div>
                </div>
                <div class="carousel-item">
                  <div width="100%" className="banner3">
                    <h1>Tailoring Designs to Match Your Unique Taste</h1>
                  </div>
                </div>
              </div>

              <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </a>
              <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
              </a>
            </div>
          </section>

          <section class="home_sec2">
            <div data-aos="fade-up" data-aos-duration="2000">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="text-center pb-5">
                      <h1>
                        Why choose{" "}
                        <span style={{ color: "#ff9202" }}>US ?</span>
                      </h1>
                    </div>
                    <p>
                      Elegant interior design in Hyderabad is a testament to the
                      city's rich architectural heritage, where every space
                      tells a story of grandeur and refinement. With a keen eye
                      for detail and a commitment to excellence, designers
                      infuse warmth and personality into each room, creating an
                      atmosphere of unparalleled beauty and serenity. Whether
                      it's the graceful curves of classic furniture pieces or
                      the striking juxtaposition of traditional and contemporary
                      elements, every design choice is made with precision and
                      care, ensuring a harmonious balance between functionality
                      and aesthetics. In Hyderabad, elegant interior design
                      transcends mere decoration; it's an art form that
                      celebrates the timeless allure of luxurious living,
                      inviting residents to indulge in a world of exquisite
                      comfort and style..
                    </p>

                    <div class="text-center pt-3">
                      <button>READ MORE</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="home_sec02">
            <div data-aos="zoom-in" data-aos-duration="2000">
              <div class="container">
                <div class="text-center pb-5">
                  <h4 style={{ fontFamily: "poppins" }}>
                    Included In <br />
                    <span style={{ color: "#ff9202" }}>
                      Design,Production, and Installation
                    </span>
                  </h4>
                </div>

                <div class="row">
                  <div class="col-md-4 mt-4">
                    <i class="ri-customer-service-fill"></i>
                    <p>Talk To Our Consultant</p>
                  </div>
                  <div class="col-md-4 mt-4">
                    <i class="ri-pencil-ruler-fill"></i>
                    <p>Detailed Drawing & Design</p>
                  </div>
                  <div class="col-md-4 mt-4">
                    <i class="ri-building-3-line"></i>
                    <p>Production At Our Own Factory</p>
                  </div>
                </div>
                <div class="row mt-5">
                  <div class="col-md-4 mt-4">
                    <i class="ri-bus-2-fill"></i>
                    <p>Material Delivery As Per Commitment</p>
                  </div>
                  <div class="col-md-4 mt-4">
                    <i class="ri-file-cloud-fill"></i>
                    <p>Interior Work Execution By Our Own</p>
                  </div>
                  <div class="col-md-4 mt-4">
                    <i class="ri-calendar-todo-line"></i>
                    <p>On Time Project Handover</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="home_sec3">
            <div data-aos="fade-down" data-aos-duration="2000">
              <div class="container">
                <div class="text-center pb-5">
                  <h1 style={{ color: "#ff9202", fontFamily: "poppins" }}>
                    Features
                  </h1>
                </div>
                <div class="row">
                  <div class="col-lg-3 col-md-6 mt-5">
                    <div class="card profile-card-5">
                      <div class="card-img-block">
                        <img
                          class="card-img-top"
                          src="https://media.designcafe.com/wp-content/uploads/2020/08/11193522/living-room-decor-ideas.jpg"
                          alt="Card image cap"
                        />
                      </div>
                      <div class="card-body pt-0">
                        <h5 class="card-title">
                          EXPERT INTERIOR DESIGNERS ASSIGNED FOR EACH PROJECT
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 mt-5">
                    <div class="card profile-card-5">
                      <div class="card-img-block">
                        <img
                          class="card-img-top"
                          src="https://foyr.com/learn/wp-content/uploads/2018/10/modern-interior-design-style.jpg"
                          alt="Card image cap"
                        />
                      </div>
                      <div class="card-body pt-0">
                        <h5 class="card-title">
                          CAPACITY TO FURNISH 100 HOMES/MONTH
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 mt-5">
                    <div class="card profile-card-5">
                      <div class="card-img-block">
                        <img
                          class="card-img-top"
                          src="https://www.floridaleathergallery.com/blog/wp-content/uploads/sites/116/2020/12/moderninteriordesign.jpg"
                          alt="Card image cap"
                        />
                      </div>
                      <div class="card-body pt-0">
                        <h5 class="card-title">
                          PREMIUM MATERIALS & EXPERIENCE WORKER
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-6 mt-5">
                    <div class="card profile-card-5">
                      <div class="card-img-block">
                        <img
                          class="card-img-top"
                          src="https://5.imimg.com/data5/SELLER/Default/2022/6/YP/OR/AX/29206063/bedroom-10-500x500.png"
                          alt="Card image cap"
                        />
                      </div>
                      <div class="card-body pt-0">
                        <h5 class="card-title">
                          GET WORK DONE IN 35-45 WORKING DAYS
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="home_sec4">
            <div class="container">
              <div class="text-center pb-5">
                <h1
                  style={{ fontFamily: "poppins", textTransform: "lowercase" }}
                >
                  <span style={{ color: "#fff" }}>OUR</span>
                  <span style={{ color: "#ff9202" }}>SERVICES</span>
                </h1>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card home_service_card">
                    <div data-aos="fade-up" data-aos-duration="2000">
                      <i class="ri-bowl-fill"></i>
                      <h3>MODULAR KITCHEN</h3>
                      <p>
                        Now into Interiors with Modular Kitchen. Our team
                        specialize in creating bespoke kitchens tailored to fit
                        the client’s comfort and taste.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card home_service_card">
                    <div data-aos="fade-up" data-aos-duration="2000">
                      <i class="ri-armchair-line"></i>
                      <h3>LIVING ROOM</h3>
                      <p>
                        The Living Room you've always wanted begins here! From
                        classy sofa cum beds, sofa sets, to dining tables, we've
                        got it all.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card home_service_card">
                    <div data-aos="fade-up" data-aos-duration="2000">
                      <i class="ri-restaurant-line"></i>
                      <h3>DINING ROOM</h3>
                      <p>
                        Our team specialize in creating eclectic dining areas
                        with finest furniture and glorious lighting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row mt-4">
                <div class="col-md-4">
                  <div class="card home_service_card">
                    <div data-aos="zoom-in" data-aos-duration="2000">
                      <i class="ri-hotel-bed-line"></i>
                      <h3>BED ROOM</h3>
                      <p>
                        Our team will work to ensure a place that will uplift
                        the mood while being comfortable and relaxing.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card home_service_card">
                    <div data-aos="zoom-in" data-aos-duration="2000">
                      <i class="ri-pencil-ruler-2-fill"></i>
                      <h3>DECORATIVE INTERIOR</h3>
                      <p>
                        The team of decorators will utilize the available space
                        to create vibrant as well as quality interiors.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card home_service_card">
                    <div data-aos="zoom-in" data-aos-duration="2000">
                      <i class="ri-paint-brush-fill"></i>
                      <h3>CUSTOMIZED FURNITURE</h3>
                      <p>
                        Our team will ensure to bring about pieces of the finest
                        furniture that will fit the budget as well as the theme.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="home_sec5">
            <div class="container">
              <div class="row">
                <div class="col-md-6 text-center">
                  <div data-aos="fade-down" data-aos-duration="2000">
                    <img src="./images/we offer.png" class="img-fluid" />
                  </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-5 m-auto">
                  <div class="pb-3">
                    <div data-aos="flip-right" data-aos-duration="2000">
                      <h1>What we offer</h1>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div data-aos="fade-up" data-aos-duration="2000">
                        <i class="ri-check-double-line"></i>On-site
                        Consultations
                      </div>
                    </li>
                    <li>
                      <div data-aos="fade-up" data-aos-duration="2000">
                        <i class="ri-check-double-line"></i>Project Survey &
                        Analysis
                      </div>
                    </li>
                    <li>
                      <div data-aos="fade-up" data-aos-duration="2000">
                        <i class="ri-check-double-line"></i>Design
                        Conceptualization
                      </div>
                    </li>
                    <li>
                      <div data-aos="fade-up" data-aos-duration="2000">
                        <i class="ri-check-double-line"></i>Custom Designs
                      </div>
                    </li>
                    <li>
                      <div data-aos="fade-up" data-aos-duration="2000">
                        <i class="ri-check-double-line"></i>Finishes &
                        Furnishings
                      </div>
                    </li>
                    <li>
                      <div data-aos="fade-up" data-aos-duration="2000">
                        <i class="ri-check-double-line"></i>Purchasing, Delivery
                        & Installation
                      </div>
                    </li>
                    <li>
                      <div data-aos="fade-up" data-aos-duration="2000">
                        <i class="ri-check-double-line"></i>Project
                        Co-ordination & Management
                      </div>
                    </li>
                  </ul>
                  <button>Book A Free Consultation</button>
                </div>
              </div>
            </div>
          </section>

          <section class="home_sec6">
            <div class="container">
              <div data-aos="zoom-in" data-aos-duration="2000">
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

export default Home;
