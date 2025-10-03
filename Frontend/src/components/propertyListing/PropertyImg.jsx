import React from "react";
import Modal from "./Modal";
import { useState } from "react";

const PropertyImg = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleShowAllPhotos = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  //static images to display
  const images = [
    { url: "/assets/property2.webp" },
    { url: "/assets/property3.webp" },
    { url: "/assets/property2.webp" },
    { url: "/assets/property2.webp" },
    { url: "/assets/property2.webp" },
    { url: "/assets/property2.webp" },
    { url: "/assets/property2.webp" },
  ];

  return (
    <>
      <div className="property-img-container">
        <div className="img-item">
          <img
            src={images[0].url}
            className="images"
            style={{
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
            alt="property-1"
          />
        </div>
        <div>
          <img src={images[1].url} alt="property" />
        </div>
        <div>
          <img src={images[2].url} alt="property" />
        </div>
        <div>
          <img src={images[3].url} alt="property" />
        </div>
        <div>
          <img
            src={images[5].url}
            alt="property"
            style={{ borderBottomLeftRadius: "10px" }}
          />
          <button className="similar-photos" onClick={handleShowAllPhotos}>
            <span className="material-symbols-outlines">photo-library</span>
          </button>
        </div>
      </div>
      <div className="similary-photos-container"></div>
      {isModalOpen && <Modal images={images} onClose={handleCloseModal } />}
    </>
  );
};

export default PropertyImg;
