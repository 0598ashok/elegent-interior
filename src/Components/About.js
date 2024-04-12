import React, { useEffect, useState, useRef } from "react";
import "./About.css";
import AOS from "aos";

import "aos/dist/aos.css";

import $ from "jquery"; // Import jQuery first
import "owl.carousel"; // Then import Owl Carousel

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Footer from "./Footer";

import { FaKitchenSet } from "react-icons/fa6";
import { MdArchitecture } from "react-icons/md";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { BsFillBuildingsFill } from "react-icons/bs";
import { GiSofa } from "react-icons/gi";
import Preloader from "./Preloader";

const About = () => {
  const [loading, setLoading] = useState(true);

  const owlCarouselRef = useRef(null);

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    // Wait for the component to mount before initializing Owl Carousel
    if (owlCarouselRef.current && $ && $.fn.owlCarousel) {
      $(owlCarouselRef.current).owlCarousel({
        loop: true,
        margin: 20,
        dots: true,
        smartSpeed: 1500,
        autoplay: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 5,
          },
        },
      });
    } else {
      console.error("Owl Carousel is not loaded properly.");
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

          <section className="about_sec1">
            <h1>About</h1>
          </section>

          <section className="about_sec2">
            <div className="container">
              <div className="row">
                <div className="col-md-6  m-auto">
                  <h3>Fully Customized Pieces By Design</h3>

                  <p>
                    The gifted group at ELEGANT has a deep appreciation for
                    aesthetics and the arts. The company provides a range of
                    services, such as space planning, color design, modular
                    kitchens, and customized furniture and furnishings. The
                    company's interior designers are experts at crafting
                    furnishings that carefully manipulate light and space to
                    maintain the design's theme, confirming that the clientele's
                    ideal house is imagined.
                  </p>
                </div>
                <div className="col-md-6 text-center">
                  <img src="./images/about_home.png" className="img-fluid" />
                </div>
              </div>
            </div>
          </section>

          <div className="about_sec3">
            <div className="container">
              <div data-aos="fade-up" data-aos-duration="2000">
                <p className="pt-2">
                  Welcome to Elegent Interior, where we transform spaces into
                  stunning reflections of elegance and sophistication. As a
                  premier interior design company, we specialize in creating
                  bespoke interiors that blend luxury, functionality, and
                  timeless style.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-duration="2000">
                <p className="pt-2">
                  At Elegent Interior, we understand that each space has its
                  unique personality and requirements. Our team of talented
                  designers works closely with clients to bring their visions to
                  life, turning dreams into reality. Whether you're looking to
                  revamp your home, office, or commercial space, we have the
                  expertise and creativity to exceed your expectations.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-duration="2000">
                <p className="pt-2">
                  Our design approach is rooted in attention to detail,
                  craftsmanship, and innovation. We believe that every element,
                  from furniture selection to color palettes and lighting, plays
                  a vital role in shaping the ambiance and atmosphere of a
                  space. By carefully curating each design element, we ensure a
                  cohesive and harmonious aesthetic that resonates with our
                  clients' lifestyles and preferences.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-duration="2000">
                <p className="pt-2">
                  At Elegent Interior, client satisfaction is our top priority.
                  We strive to deliver exceptional results that not only meet
                  but exceed our clients' expectations. From concept development
                  to project completion, we provide personalized attention and
                  guidance every step of the way, ensuring a seamless and
                  stress-free experience.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-duration="2000">
                <p className="pt-2">
                  Whether you're seeking a modern minimalist aesthetic, a
                  classic and timeless design, or a bold and eclectic style,
                  Elegent Interior is here to bring your vision to fruition. Let
                  us transform your space into a true masterpiece of design and
                  sophistication. Contact us today to begin your journey to a
                  more elegant interior.
                </p>
              </div>
            </div>
          </div>

          <section className="about_sec2_row2">
            <div className="container">
              <div className="row mt-5 ">
                <div className="col-md-6">
                  <img
                    src="https://img.freepik.com/free-photo/modern-kitchen-with-contemporary-interior-decor-furnishings_23-2150886632.jpg?w=360"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6">
                  <div data-aos="flip-left" data-aos-duration="2000">
                    <h3 style={{ fontFamily: "poppins" }}>
                      Elegent Interior: What Is It?
                    </h3>

                    <div className="about_icos">
                      <span>
                        <FaKitchenSet />
                      </span>{" "}
                      Modular Kitchen
                    </div>

                    <div className="about_icos">
                      <span>
                        <MdArchitecture />
                      </span>{" "}
                      Architecture
                    </div>

                    <div className="about_icos">
                      <span>
                        <MdOutlineMapsHomeWork />
                      </span>{" "}
                      Residential
                    </div>

                    <div className="about_icos">
                      <span>
                        <BsFillBuildingsFill />
                      </span>{" "}
                      Commercial
                    </div>

                    <div className="about_icos">
                      <span>
                        <GiSofa />
                      </span>{" "}
                      Furniture
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="about_sec4">
              <div data-aos="zoom-in" data-aos-duration="2000">
                <div className="container">
                  <h1>Our Brands</h1>
                  <div className="owl-carousel" ref={owlCarouselRef}>
                    <div>
                      <img src="https://1000logos.net/wp-content/uploads/2021/04/Havells-logo.png" />
                    </div>
                    <div>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Goldmedal_Electricals_Logo.svg/2560px-Goldmedal_Electricals_Logo.svg.png" />
                    </div>
                    <div>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/2560px-Wipro_Primary_Logo_Color_RGB.svg.png" />
                    </div>
                    <div>
                      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Anchor_by_Panasonic_logo.svg/1280px-Anchor_by_Panasonic_logo.svg.png" />
                    </div>
                    <div>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Centuryply.png" />
                    </div>
                    <div>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXXvOM99H1Iiq7MYZS7WO0gWDxu0wkND1_eHPSko4rGg&s" />
                    </div>
                    <div>
                      <img src="https://www.sainiworld.in/cdn/shop/files/ebco_logo.jpg?v=1667644834" />
                    </div>

                    <div>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoQ0uMRofglBjZQSQt65MSiQMCeWOA8DofYTlVCpUZw&s" />
                    </div>
                    <div>
                      <img src="https://1000logos.net/wp-content/uploads/2017/12/Hitachi-Logo.png" />
                    </div>
                  </div>
                </div>
              </div>
            </section> */}

          <section className="about_sec4">
            <div className="container ">
              <h1>Our Brands</h1>
              <div className="row">
                <div className="col-md-2 mt-2 col-12 col-sm-6">
                  <div className="card brand_cards">
                    <div>
                      <img
                        src="https://1000logos.net/wp-content/uploads/2021/04/Havells-logo.png"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-2 mt-2 col-12 col-sm-6">
                  <div className="card brand_cards">
                    <div>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Goldmedal_Electricals_Logo.svg/2560px-Goldmedal_Electricals_Logo.svg.png"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-2 mt-2 col-12 col-sm-6">
                  <div className="card brand_cards">
                    <div>
                      <img
                        src="https://www.wipro.com/content/dam/nexus/en/brand/images/secondary-logo-400x276.png"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-2 mt-2 col-12 col-sm-6">
                  <div className="card brand_cards">
                    <div>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Anchor_by_Panasonic_logo.svg/1280px-Anchor_by_Panasonic_logo.svg.png"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-2 mt-2 col-12 col-sm-6">
                  <div className="card brand_cards">
                    <div>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/1/16/Centuryply.png"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-2 mt-2 col-12 col-sm-6">
                  <div className="card brand_cards">
                    <div>
                      <img
                        src="https://seeklogo.com/images/G/greenply-logo-469D8F2DFE-seeklogo.com.png"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-md-2 mt-2 col-12 col-sm-6 col_02"></div>
                <div className="col-md-2 mt-2 col-12 col-sm-6">
                  <div className="card brand_cards">
                    <div>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXXvOM99H1Iiq7MYZS7WO0gWDxu0wkND1_eHPSko4rGg&s"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-2 mt-2 col-12 col-sm-6">
                  <div className="card brand_cards">
                    <div>
                      <img
                        src="https://www.sainiworld.in/cdn/shop/files/ebco_logo.jpg?v=1667644834"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-2 mt-2 col-12 col-sm-6">
                  <div className="card brand_cards">
                    <div>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoQ0uMRofglBjZQSQt65MSiQMCeWOA8DofYTlVCpUZw&s"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-2 mt-2 col-12 col-sm-6">
                  <div className="card brand_cards">
                    <div>
                      <img
                        src="https://1000logos.net/wp-content/uploads/2017/12/Hitachi-Logo.png"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-12 col-sm-6 mt-2 col_02"></div>
              </div>
            </div>
          </section>

          {/* <section>
              <div className="container">
                <div className="row">
                  <div className="col-md-2">
                    <div className="card cardss">
                      <img
                        src="https://elegant-interiors.in/wp-content/uploads/2021/05/logo1.png"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>  
            </section> */}

          <Footer />
        </div>
      )}
    </>
  );
};

export default About;
