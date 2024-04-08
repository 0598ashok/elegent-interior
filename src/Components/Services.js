import React, { useEffect , useState} from "react";
import "./Services.css";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from "./Preloader";

const Services = () => {

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

  return (
    <>

      {loading ? (
        
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

          <section className="ser_sec1">
            <h1>Services</h1>
          </section>

          <section className="ser_sec2">
            <div className="container">
              <div className="row">
                <div className="col-md-6 m-auto mt-2">
                  <div data-aos="fade-right" data-aos-duration="2000">
                    <h3>Modular Kitchen</h3>
                    <p>
                      With the help of our professionally qualified team of
                      designers create a state-of-the-kitchen with cutting edge
                      technologies to make sure your kitchen duties are always a
                      delight. We strive to provide supreme choice of materials,
                      hardware and accessories to the customer. Our in-house team
                      will design and construct the kitchen keeping in check with
                      your wallet.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 img-wrapper mt-2">
                  <div data-aos="fade-left" data-aos-duration="2000">
                    <img
                      src="https://img.freepik.com/free-psd/modern-furniture-kitchen_176382-1225.jpg?w=996"
                      className="img-fluid inner-img"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-6 img-wrapper mt-2 order-1 order-md-0">
                  <div data-aos="fade-right" data-aos-duration="2000">
                    <img
                      src="https://img.freepik.com/free-photo/armchair-green-living-room-with-copy-space_43614-910.jpg?w=900"
                      className="img-fluid inner-img"
                    />
                  </div>
                </div>
                <div className="col-md-6 m-auto mt-2 order-0 order-md-1">
                  <div data-aos="fade-left" data-aos-duration="2000">
                    <h3>Interior</h3>
                    <p>
                      We provide design, supply and installation for Modular kitchen
                      cabinets, Residential interors and Commercial interior like
                      hotels, hospitals,textiles,etc. We only use quality materials
                      and also provide customized furniture according to the
                      customers needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-6 m-auto mt-2">
                  <div data-aos="fade-right" data-aos-duration="2000">
                    <h3>Bedroom</h3>
                    <p>
                      Bedrooms are the primary place of relaxation, where we all
                      retire to take a good sleep and refresh, away from the world
                      and worries. The bedroom interior design is extremely
                      important in order to provide that instant feel of relaxation
                      and here are a few tips: the first thing that meets the eyes
                      are the colors used on the walls, carpets and bed set so, they
                      all must be in colours which are soothing to the customer to
                      provide a relaxing effect.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 img-wrapper mt-2">
                  <div data-aos="fade-left" data-aos-duration="2000">
                    <img
                      src="https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?w=900"
                      className="img-fluid inner-img"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-6 img-wrapper mt-2 order-1 order-md-0">
                  <div data-aos="fade-right" data-aos-duration="2000">
                    <img
                      src="https://img.freepik.com/free-photo/green-sofa-white-living-room-with-free-space_43614-834.jpg?w=900"
                      className="img-fluid inner-img"
                    />
                  </div>
                </div>
                <div className="col-md-6 m-auto mt-2 order-0 order-md-1">
                  <div data-aos="fade-left" data-aos-duration="2000">
                    <h3>Living Room</h3>
                    <p>
                      The Living Room you've always wanted begins here! From classy
                      sofa sets, TV units, to lounge chairs we've got it all. A
                      living room or lounge room (informal lounge) is a room in a
                      residential house for relaxing and socializing. Such a room is
                      sometimes called a front room when it is near the main
                      entrance at the front of the house.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-6 m-auto mt-2">
                  <div data-aos="fade-right" data-aos-duration="2000">
                    <h3>Furniture</h3>
                    <p>
                      Furniture's are made according to the required specifications
                      of our customer and in their desired sizes & thickness with
                      excellent finishing, highly durable & international quality.
                      Woods are properly kiln seasoned & chemically treated, gets
                      proper dried, wrap resistant. Some are : Study Table, Computer
                      table, dressing table, Book shelf, Crockery shelf, Wardrobes,
                      Dining table and other customized furniture.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 img-wrapper mt-2">
                  <div data-aos="fade-left" data-aos-duration="2000">
                    <img
                      src="https://img.freepik.com/free-photo/gray-sofa-white-living-room-with-copy-space_43614-909.jpg?w=900"
                      className="img-fluid inner-img"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-6 img-wrapper mt-2 order-1 order-md-0">
                  <div data-aos="fade-right" data-aos-duration="2000">
                    <img
                      src="https://img.freepik.com/free-photo/3d-room-interior-with-classic-design-furniture_23-2150895589.jpg?w=826"
                      className="img-fluid inner-img"
                    />
                  </div>
                </div>
                <div className="col-md-6 m-auto mt-2 order-0 order-md-1">
                  <div data-aos="fade-left" data-aos-duration="2000">
                    <h3>Decorative Interior</h3>
                    <p>
                      The team of decorators will utilize the available space to
                      create vibrant as well as quality interiors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-6 m-auto mt-2">
                  <div data-aos="fade-right" data-aos-duration="2000">
                    <h3>DINING ROOM</h3>
                    <p>
                      Our team specialize in creating eclectic dining areas with
                      finest furniture and glorious lighting.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 img-wrapper mt-2">
                  <div data-aos="fade-left" data-aos-duration="2000">
                    <img
                      src="https://img.freepik.com/free-photo/room-house-decorated-with-brazilian-folklore-design_23-2150794165.jpg?w=1060"
                      className="img-fluid inner-img"
                    />
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

export default Services;
