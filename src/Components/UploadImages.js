import React, { useEffect, useState } from "react";
import { imageDB } from "./config";
import "./Uploadimages.css";
import {
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
  deleteObject,
  updateMetadata,
  getMetadata,
} from "firebase/storage";
import { v4 } from "uuid";

const tabsList = [
  { tabId: "SPACE_SAVING", label: "Space Saving" },
  { tabId: "LIVING", label: "Living" },
  { tabId: "BEDROOM", label: "Bedroom" },
  { tabId: "KITCHEN", label: "Kitchen" },
];

// Import statements
function UploadImages() {
  const [img, setImg] = useState(null);
  const [imgUrl, setImgUrl] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [tabs, setTabs] = useState(tabsList);
  const [activeTabId, setActiveTabId] = useState(tabsList[0].tabId);
  const [selectedDropdownValue, setSelectedDropdownValue] = useState("");

  useEffect(() => {
    listAll(ref(imageDB, "files"))
      .then((imgs) => {
        return Promise.all(
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
      })
      .then((urls) => {
        setImgUrl(urls);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
        setLoading(false);
      });
  }, []);

  const handleClick = () => {
    if (img !== "" && title !== "" && selectedDropdownValue !== "") {
      setLoading(true);

      const imgRef = ref(imageDB, `files/${title}_${v4()}`);
      const metadata = {
        contentType: img.type,
        customMetadata: {
          title: title,
          category: selectedDropdownValue,
        },
      };

      setImgUrl((data) => [
        ...data,
        { url: "", title, category: selectedDropdownValue },
      ]);

      uploadBytes(imgRef, img, metadata)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            setImgUrl((data) =>
              data.map((item, index) =>
                index === data.length - 1
                  ? { url, title, category: selectedDropdownValue }
                  : item
              )
            );
            setLoading(false);
          });
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
          setImgUrl((data) => data.slice(0, -1));
          setLoading(false);
        });
    } else {
      alert("Please fill all input fields");
    }
    setImg(null);
    setTitle("");
  };

  const handleDelete = (url) => {
    const imgToDelete = imgUrl.find((image) => image.url === url);
    if (imgToDelete) {
      const filePath = decodeURIComponent(
        imgToDelete.url.split("/o/")[1].split("?")[0]
      );
      deleteObject(ref(imageDB, filePath))
        .then(() => {
          setImgUrl((prevUrl) => prevUrl.filter((image) => image.url !== url));
        })
        .catch((error) => {
          console.error("Error deleting image:", error);
        });
    }
  };

  const handleChangeTab = (e) => {
    setActiveTabId(e.target.value);
    console.log("Selected tab:", e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedDropdownValue(e.target.value);
    console.log("Selected dropdown value:", e.target.value);
  };

  console.log("all urls", imgUrl);

  return (
    <div className="mt-5">
      {/* Input fields */}
      <div className="container">
        <div className="row">
          <div className=" col-md-4 res_col_3">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Image Title"
              className="form-control"
            />
          </div>
          <div className=" col-md-4 res_col_3">
            <select className="form-control" onChange={handleSelectChange}>
              {/* Dropdown options */}
              {tabs.map((eachTab) => (
                <option key={eachTab.tabId} value={eachTab.tabId}>
                  {eachTab.label}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4 res_col_3">
            <input
              type="file"
              onChange={(e) => setImg(e.target?.files[0])}
              className="form-control upload_file p-1"
            />
          </div>
           
        </div>
        <div className="row mt-3">
        <div className="col-12 text-center">
            <button onClick={handleClick} className=" w-25 upload_button">
              <i class="ri-upload-cloud-line mr-3"></i>
              Upload
            </button>
          </div> 
        </div>
      </div>

      {/* Tabs container */}
      <div className="container mt-5">
        <div className="row">
          {tabs.map((eachTab) => (
            <div
              key={eachTab.tabId}
              onClick={handleChangeTab}
              className={`col-6 col-md-3  `}
            >
              <button
                value={eachTab.tabId}
                className={`  ${
                  activeTabId === eachTab.tabId ? "active-tab" : "no-button"
                }`}
                // className="no-button active"
                onClick={handleChangeTab}
              >
                {eachTab.label}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Loading indicator and image display */}
      {loading ? (
        <div class="spinner-border text-warning mt-5"></div>
      ) : (
        <ul className="container p-0 pt-5" style={{ listStyleType: "none" }}>
          {/* Image display */}
          <div className="row">
            {imgUrl
              .filter(
                (image) =>
                  image.category === activeTabId || activeTabId === "ALL"
              )
              .map((data, index) => (
                <li key={index} className=" col-12 col-sm-6 col-lg-4 mt-2">
                  <div style={{ border: "1px solid #8a8a8a" }} className="p-2">
                    <img
                      src={data.url}
                      className="w-100"
                      alt="img"
                      style={{ height: "400px" }}
                    />
                    <div className="d-flex flex-row justify-content-between align-items-center pt-3">
                      <p>{data.title}</p>
                      <button
                        onClick={() => handleDelete(data.url)}
                        className="btn btn-warning"
                      >
                        <i class="ri-delete-bin-6-line "></i>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
          </div>
        </ul>
      )}
    </div>
  );
}

export default UploadImages;
