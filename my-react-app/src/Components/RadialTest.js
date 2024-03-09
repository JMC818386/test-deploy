import React, { Component } from "react";
import axios from "axios";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RadialTestSVG from "./RadialTest.svg";

class RadialTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dynamicImgSrc: RadialTestSVG, // Initially set to static SVG, will update dynamically
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.radialData !== prevProps.radialData &&
      this.props.radialData.triggerFetch
    ) {
      this.fetchImageData();
      console.log("RadialBasic-->Body-->RadialTest", this.props.radialData);
    }
  }

  fetchImageData = () => {
    const post_data = {
      full_w: 1000,
      value: 25,
      font_c: "FFFFFF",
      on_c: "FFFFFF",
      off_c: "000000",
      asset: "wedges1",
      shadow_c: "808080",
      outer_c: "000000",
      inner_c: "000000",
    };

    axios
      .post("https://jmc2.lakeshoresoftwareinc.com/api/asset/set", {
        post_data,
      })
      .then((response) => {
        const imgObj = document.getElementById("dynamic_img");
        imgObj.src = response.data.data.image;
      })
      .catch((error) => {
        console.error("Error fetching image data:", error);
      });
  };

  render() {
    const { dynamicImgSrc } = this.state;
    const textColor = "#1B1B1F"; // Fixed text color for SVG

    return (
      <div
        className="container-fluid bg-main p-0 "
        style={{ height: "70vh", display: "flex" }}
      >
        <img
          id="dynamic_img"
          style={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "5git pushgit0%",
            height: "auto",
            maxWidth: "50%",
            objectFit: "contain",
          }}
          src={dynamicImgSrc}
          alt="Returned Graphic"
        />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 471.69 478.48">
          <defs>
            <style>
              {`.cls-1{fill:${textColor};font-family:MontserratRoman-Bold, Montserrat;font-size:80.27px;font-variation-settings:'wght' 700;font-weight:700;}.cls-2{stroke-width:0px;}`}
            </style>
          </defs>
        </svg>
      </div>
    );
  }
}

export default RadialTest;
