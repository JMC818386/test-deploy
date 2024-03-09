
import "bootstrap/dist/css/bootstrap.min.css";
import Edit from "./images/edit.png";
import EyeBall from "./images/eye-ball.png";
import TrashCan from "./images/trash-can.png";
import RadialThumbnail from "./images/image 7radial-thumbnail.png";
import RadialGrey from "./images/radial-iconradial-icon.svg";
import RadialWhite from "./images/white.svg";
import RadialRed from "./images/red.svg";
import RadialGreen from "./images/green.svg";
import RadialOrange from "./images/orange.svg";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const DashboardManagerActual = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);


  return (
    <div className="dashboard-manager container-fluid mt-5">
      {/* Assuming your original container-main is similar to Bootstrap's container */}
      <div className="d-flex justify-content-between bg-main mt-5 mb-2">
        {/* Flex container for layout */}
        <div className="d-flex">
          {/* Flex container for concept and actual buttons */}
          <button className="render-btn d-flex align-items-center justify-content-center">
            {/* Bootstrap button with margin end */}
            <div className="d-flex align-items-center justify-content-center">
              {/* Flex container for button content */}
              <span className="m-1">Concept</span>
            </div>
          </button>
          <button className="reset-btn">
            {/* Bootstrap button */}
            <div className="d-flex align-items-center justify-content-center">
              {/* Flex container for button content */}
              <span className="m-1">Actual</span>
            </div>
          </button>
        </div>
        <button className="create-btn">
          {/* Bootstrap button for create */}
          <div className="d-flex align-items-center justify-content-center">
            {/* Flex container for button content */}
            <span className="p-1 m-1">+Create</span>
          </div>
        </button>
      </div>

      {/* ComponentPanel Integration */}
      <header className="d-flex justify-content-between align-items-center box-shadow bg-box-component px-lg-5 py-3 px-2 gap-3">
        <div className="d-none" />

        <div className="d-flex align-items-center gap-3">
          <img
            className="flex-shrink-0"
            src={RadialThumbnail}
            loading="lazy"
            alt=""
          />
          <div className="d-flex flex-column align-items-start">
            <h3 className="m-0 d-inline-block component-title">
              radial-basic-1
            </h3>
          </div>
        </div>

        <div
          className="d-flex flex-column align-items-start justify-content-start"
          style={{ width: "166px", padding: "var(--padding-7xs) 0 0" }}
        >
          <div className="d-flex align-items-start justify-content-start flex-row gap-2">
            <img
              className="flex-shrink-0"
              src={RadialGreen}
              loading="lazy"
              alt=""
            />
            <div className="d-inline-block component-body">Deployed</div>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-start gap-3">
          <div className="d-flex flex-row align-items-center justify-content-center">
            <div className="d-none" />
            <p className="m-0 pr-5 component-body">Last edited: 2 hours ago</p>
          </div>
          {/* <img src={EyeBall} loading="lazy" alt="" />
          <img src={Edit} loading="lazy" alt="" /> */}
          <img
            src={TrashCan}
            loading="lazy"
            alt=""
            onClick={onOpenModal}
            style={{ cursor: "pointer" }} // Optional, changes cursor on hover to indicate it's clickable
          />
          <Modal
            open={open}
            onClose={onCloseModal}
            center
            styles={{
              modal: {
                background: "rgb(25,25,34)",
                background: "radial-gradient(circle, rgba(25,25,34,1) 0%, rgba(21,21,28,1) 100%)",
                borderRadius: '10px',
              },
              closeButton: { // Targeting the close button container if possible
                color: 'white', // Change the color of the button or SVG icon
              },
              closeIcon: { // If the library allows direct styling of the icon
                fill: 'white' // For SVG icons, changing the fill color
              }
            }}
          >
            <div className="d-flex flex-column justify-content-center p-3">
              <p className="footer-text p-2">Delete this component?</p>
              <button className="render-btn">
                <span className="p-1 m-1">Delete</span>
              </button>
            </div>
          </Modal>
        </div>
      </header>

      <header className="d-flex justify-content-between align-items-center box-shadow bg-box-component px-lg-5 py-3 px-2 my-2 gap-3">
        <div className="d-none" />

        <div className="d-flex align-items-center gap-3">
          <img
            className="flex-shrink-0"
            src={RadialThumbnail}
            loading="lazy"
            alt=""
          />
          <div className="d-flex flex-column align-items-start">
            <h3 className="m-0 d-inline-block component-title">
              bar-neon-minimal
            </h3>
          </div>
        </div>

        <div
          className="d-flex flex-column align-items-start justify-content-start"
          style={{ width: "166px", padding: "var(--padding-7xs) 0 0" }}
        >
          <div className="d-flex align-items-start justify-content-start flex-row gap-2">
            <img
              className="flex-shrink-0"
              src={RadialRed}
              loading="lazy"
              alt=""
            />
            <div className="d-inline-block component-body">Action Required</div>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-start gap-3">
          <div className="d-flex flex-row align-items-center justify-content-center">
            <div className="d-none" />
            <p className="m-0 pr-5 component-body">Last edited: 5 days ago</p>
          </div>
          {/* <img src={EyeBall} loading="lazy" alt="" />
          <img src={Edit} loading="lazy" alt="" /> */}
          <img
            src={TrashCan}
            loading="lazy"
            alt=""
            onClick={onOpenModal}
            style={{ cursor: "pointer" }} // Optional, changes cursor on hover to indicate it's clickable
          />
          <Modal
            open={open}
            onClose={onCloseModal}
            center
            styles={{
              modal: {
                background: "rgb(25,25,34)",
                background: "radial-gradient(circle, rgba(25,25,34,1) 0%, rgba(21,21,28,1) 100%)",
                borderRadius: '10px',
              },
              closeButton: { // Targeting the close button container if possible
                color: 'white', // Change the color of the button or SVG icon
              },
              closeIcon: { // If the library allows direct styling of the icon
                fill: 'white' // For SVG icons, changing the fill color
              }
            }}
          >
            <div className="d-flex flex-column justify-content-center p-3">
              <p className="footer-text p-2">Delete this component?</p>
              <button className="render-btn">
                <span className="p-1 m-1">Delete</span>
              </button>
            </div>
          </Modal>
        </div>
      </header>

      <header className="d-flex justify-content-between align-items-center box-shadow bg-box-component px-lg-5 py-3 px-2 my-2 gap-3">
        <div className="d-none" />

        <div className="d-flex align-items-center gap-3">
          <img
            className="flex-shrink-0"
            src={RadialThumbnail}
            loading="lazy"
            alt=""
          />
          <div className="d-flex flex-column align-items-start">
            <h3 className="m-0 d-inline-block component-title">
              my-third-component
            </h3>
          </div>
        </div>

        <div
          className="d-flex flex-column align-items-start justify-content-start"
          style={{ width: "166px", padding: "var(--padding-7xs) 0 0" }}
        >
          <div className="d-flex align-items-start justify-content-start flex-row gap-2">
            <img
              className="flex-shrink-0"
              src={RadialOrange}
              loading="lazy"
              alt=""
            />
            <div className="d-inline-block component-body">Staged</div>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-start gap-3">
          <div className="d-flex flex-row align-items-center justify-content-center">
            <div className="d-none" />
            <p className="m-0 pr-5 component-body">Last edited: 2 weeks ago</p>
          </div>
          {/* <img src={EyeBall} loading="lazy" alt="" />
          <img src={Edit} loading="lazy" alt="" /> */}
          <img
            src={TrashCan}
            loading="lazy"
            alt=""
            onClick={onOpenModal}
            style={{ cursor: "pointer" }} // Optional, changes cursor on hover to indicate it's clickable
          />
          <Modal
            open={open}
            onClose={onCloseModal}
            center
            styles={{
              modal: {
                background: "rgb(25,25,34)",
                background: "radial-gradient(circle, rgba(25,25,34,1) 0%, rgba(21,21,28,1) 100%)",
                borderRadius: '10px',
              },
              closeButton: { // Targeting the close button container if possible
                color: 'white', // Change the color of the button or SVG icon
              },
              closeIcon: { // If the library allows direct styling of the icon
                fill: 'white' // For SVG icons, changing the fill color
              }
            }}
          >
            <div className="d-flex flex-column justify-content-center p-3">
              <p className="footer-text p-2">Delete this component?</p>
              <button className="render-btn">
                <span className="p-1 m-1">Delete</span>
              </button>
            </div>
          </Modal>
        </div>
      </header>
    </div>
  );
};

export default DashboardManagerActual;
