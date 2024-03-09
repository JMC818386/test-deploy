import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Builder = () => {
  return (
    // contains the entire data graphics editor frame
    <div className="col-11 main-container container-fluid border border-white">
      <div className="col-12 header d-flex justify-content-end border border-white">
        <h1 className="text-light align-content-center m-2">Header</h1>
        <div className="col-6 d-flex justify-content-between value border border-white">
          <p className="text-light m-2">User</p>
          <input type="text" />
        </div>
      </div>
      <div className="body d-flex wrap">
        <div className="col-6 left-panel border border-white">
          <h1 className="text-light align-content-center m-2">Left Panel</h1>
        </div>
        <div className="col-6 right-panel border border-white">
          <h1 className="text-light align-content-center m-2">Right Panel</h1>
          <div className="col-12 d-flex flex-row justify-content-between align-content-center component-name border border-white">
            <p className="text-light m-2">Component Name</p>
            <input type="text" />
          </div>

          <div className="toolbar-section d-flex flex-row flex-wrap">
            <div className="col-6 d-flex justify-content-between size border border-white">
              <p className="text-light m-2">Size</p>
              <input type="text" />
            </div>
            <div className="col-6 d-flex justify-content-between value border border-white">
              <p className="text-light m-2">Value</p>
              <input type="text" />
            </div>

            <div className="col-6 p-0">
              {" "}
              {/* Ensure full width and remove padding */}
              <div className="row container-fluid">
                {" "}
                {/* Wrap content in a row */}
                <div className="border-ring border border-white">
                  {" "}
                  {/* Use col-12 for full width */}
                  <div className="border-title">
                    {" "}
                    {/* Remove container-fluid from border-title */}
                    <p className="text-light text-center">Border Ring</p>{" "}
                    {/* Center text */}
                  </div>
                </div>
              </div>
              <div className="row">
                {" "}
                {/* Ensure border-body is in a separate row */}
                <div className="col-12 d-flex justify-content-center align-items-center border-body">
                  {" "}
                  {/* Center content and align items */}
                  <p className="text-center text-light mb-0 flex-grow-1">
                    Color
                  </p>{" "}
                  {/* Center text and allow it to grow */}
                  <input className="flex-grow-1" type="color" />{" "}
                  {/* Allow input to grow */}
                  <input className="flex-grow-1" type="text" />{" "}
                  {/* Allow input to grow */}
                </div>
              </div>
            </div>

            <div className="col-6 d-flex justify-content-between value border border-white">
              <p className="text-light m-2">Background</p>
              <p className="text-light m-2"> Color Selector</p>
            </div>

            <div className="col-6 d-flex justify-content-between value border border-white">
              <p className="text-light m-2">Center Fill</p>
              <p className="text-light m-2"> Color Selector</p>
            </div>

            <div className="col-6 d-flex justify-content-between value border border-white">
              <p className="text-light m-2">Font</p>
              <p className="text-light m-2"> Font-Family</p>
              <p className="text-light m-2">Color Selector</p>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-between value border border-white">
            <p className="text-light m-2">Dynamic Ring</p>
            <p className="text-light m-2"> Active Color Selector</p>
            <p className="text-light m-2"> Inactive Color Selector</p>
            <p className="text-light m-2">Weight Selector</p>
            <p className="text-light m-2">Division Thumbnails</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
