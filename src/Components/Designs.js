// src/Designs.js
import React, { useEffect, useState } from "react";
import { imageDB } from "./config";
import "./Designs.css";
import { ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";
import Navbar from "./Navbar";

const Designs = () => {
  const [imgUrl, setImgUrl] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div>
      <Navbar />
      <section className="design_sec1">
        <div className="container">
          <h1>Space Saving Images</h1>

          {imgUrl.map(
            (eachItem, index) =>
              eachItem.category === "SPACE_SAVING" && (
                <div key={index} className="item">
                  {/* Displaying image with its title */}
                  <img
                    src={eachItem.url}
                    className="home_client_carousel_img"
                    alt={eachItem.title}
                  />
                  <p>{eachItem.title}</p>
                </div>
              )
          )}
        </div>
      </section>
    </div>
  );
};

export default Designs;
