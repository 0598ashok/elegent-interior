import React, { useEffect, useState } from "react";
import { imageDB } from "./config";
import "./Designs.css";
import { ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";
import Navbar from "./Navbar";
import { Pagination } from "antd";
import Preloader from "./Preloader";
import Footer from "./Footer";

const Designs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const [imgUrl, setImgUrl] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const imgs = await listAll(ref(imageDB, "files"));
      const urls = await Promise.all(
        imgs.items.map(async (val) => {
          const url = await getDownloadURL(val);
          const metadata = await getMetadata(val);
          return {
            url,
            title: metadata.customMetadata.title || "",
            category: metadata.customMetadata.category || "",
          };
        })
      );
      setImgUrl(urls);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching images:", error);
      setLoading(false);
    }
  };

  const pageSize = 6; // Number of cards per page
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const renderImagesByCategory = (category) => {
    return imgUrl
      .filter((item) => item.category === category)
      .slice(startIndex, endIndex)
      .map((item, index) => (
        <div
          key={index}
          className="item col-lg-4 col-sm-6 col-12 d-flex flex-column  mt-4 design_sec"
        >
          <img
            src={item.url}
            className="home_client_carousel_img"
            alt={item.title}
          />
          <p className="mt-3" style={{ fontWeight: "500" }}>
            {item.title}
          </p>
        </div>
      ));
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
        <>
          <div>
            {/* <Navbar /> */}

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
            <section className="design_sec2">
              <h1>Our Designs</h1>
            </section>
            <section
              className="container design_sec1"
              style={{ marginTop: "50px" }}
            >
              <div className="row">
                <div className="col-12 mb-3">
                  <div
                    class="nav flex-row nav-pills justify-content-evenly "
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      class="nav-link active"
                      id="v-pills-home-tab"
                      data-toggle="pill"
                      data-target="#v-pills-home"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      Space Living
                    </button>
                    <button
                      class="nav-link"
                      id="v-pills-profile-tab"
                      data-toggle="pill"
                      data-target="#v-pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      Living
                    </button>
                    <button
                      class="nav-link"
                      id="v-pills-messages-tab"
                      data-toggle="pill"
                      data-target="#v-pills-messages"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      Bedroom
                    </button>
                    <button
                      class="nav-link"
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      data-target="#v-pills-settings"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      Kitchen
                    </button>
                  </div>
                </div>
                <div className="col-12">
                  <div className="tab-content" id="v-pills-tabContent">
                    {/* Each tab content with pagination */}
                    <div
                      className="tab-pane fade show active"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <div className="row">
                        {renderImagesByCategory("SPACE_SAVING")}
                      </div>
                      <Pagination
                        current={currentPage}
                        onChange={handlePageChange}
                        defaultPageSize={pageSize}
                        className="my-3"
                        total={
                          imgUrl.filter(
                            (item) => item.category === "SPACE_SAVING"
                          ).length
                        }
                        style={{ margin: "auto", textAlign: "center" }}
                      />
                    </div>

                    <div
                      className="tab-pane fade show "
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    >
                      <div className="row">
                        {renderImagesByCategory("LIVING")}
                      </div>
                      <Pagination
                        current={currentPage}
                        onChange={handlePageChange}
                        defaultPageSize={pageSize}
                        className="my-3"
                        total={
                          imgUrl.filter((item) => item.category === "LIVING")
                            .length
                        }
                        style={{ margin: "auto", textAlign: "center" }}
                      />
                    </div>

                    <div
                      className="tab-pane fade show "
                      id="v-pills-messages"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab"
                    >
                      <div className="row">
                        {renderImagesByCategory("BEDROOM")}
                      </div>
                      <Pagination
                        current={currentPage}
                        onChange={handlePageChange}
                        defaultPageSize={pageSize}
                        className="my-3"
                        total={
                          imgUrl.filter((item) => item.category === "BEDROOM")
                            .length
                        }
                        style={{ margin: "auto", textAlign: "center" }}
                      />
                    </div>

                    <div
                      className="tab-pane fade show "
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <div className="row">
                        {renderImagesByCategory("KITCHEN")}
                      </div>
                      <Pagination
                        current={currentPage}
                        onChange={handlePageChange}
                        defaultPageSize={pageSize}
                        className="my-3"
                        total={
                          imgUrl.filter((item) => item.category === "KITCHEN")
                            .length
                        }
                        style={{ margin: "auto", textAlign: "center" }}
                      />
                    </div>
                    {/* Other tab contents with pagination */}
                    {/* Similar structure for other tabs */}
                  </div>
                </div>
              </div>
            </section>
            <Footer/>
          </div>
        </>
      )}
      
    </>
  );
};

export default Designs;
