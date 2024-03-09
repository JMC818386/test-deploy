import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";

const RadialBasic = ({ onRender }) => {
  const [user, setUser] = useState("");
  const [componentName, setComponentName] = useState("");
  const [size, setSize] = useState("");
  const [value, setValue] = useState("");
  const [outerRingActiveBtn, setOuterRingActiveBtn] = useState("");
  const [innerRingActiveBtn, setInnerRingActiveBtn] = useState("");
  const [centerFillActiveBtn, setCenterFillActiveBtn] = useState("");
  const [outerRingColor, setOuterRingColor] = useState("#0F0F12");
  const [innerRingColor, setInnerRingColor] = useState("#7B7891");
  const [innerRingOffColor, setInnerRingOffColor] = useState("#42404F");
  const [shadowColor, setShadowColor] = useState("#343437");
  const [centerFillColor, setCenterFillColor] = useState("#0F0F12");
  const [fontFamily, setFontFamily] = useState("Arial");
  const [fontColor, setFontColor] = useState("#DBDBDB");

  const handleUserOnlyPost = () => {
    const postData = {
      user_n: user, // Sending only the user_n in the post data
    };

    axios
      .post("https://jmc2.lakeshoresoftwareinc.com/api/asset/set", {
        post_data: postData,
      })
      .then((response) => {
        console.log("Response:", response);
        // Handle your response here. For example, you might want to show a notification or update the UI in some way.
      })
      .catch((error) => {
        console.error("Error posting user_n:", error);
        // Handle your error here. For example, you might want to show an error notification to the user.
      });
  };

  const handleColorChange = (colorSetter, event) => {
    colorSetter(event.target.value);
  };

  const handleInputChange = (event) => {
    setSize(event.target.value);
  };

  const handleVlaueInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  const handleComponentNameChange = (event) => {
    setComponentName(event.target.value);
  };

  const handleFontFamilyChange = (event) => {
    setFontFamily(event.target.value);
  };

  const handleFontColorChange = (event) => {
    setFontColor(event.target.value);
  };

  const renderComponentClick = () => {
    const translateWeight = (btn) =>
      ({
        S: "Small",
        M: "Medium",
        L: "Large",
      }[btn] || "-");

    // console.log("RadialBasic", radialData)

    const post_data = {
      user_n: user,
      full_w: 400,
      outer_c: outerRingColor,
      value: value,
      font_c: fontColor,
      on_c: innerRingColor,
      off_c: innerRingOffColor,
      asset: "wedges1",
      shadow_c: shadowColor,
      inner_c: centerFillColor,
    };
    console.log(post_data);
    // outerRingColor / innerRingColor

    axios
      .post("https://jmc2.lakeshoresoftwareinc.com/api/asset/set", {
        post_data,
      })
      .then((response) => {
        const imgObj = document.getElementById("dynamic_img");
        imgObj.src = response.data.data.image;
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching image data:", error);
      });
  };

  // Handler for button clicks in each section
  const handleButtonClick = (section, button) => {
    switch (section) {
      case "outer":
        setOuterRingActiveBtn(button);
        break;
      case "inner":
        setInnerRingActiveBtn(button);
        break;
      case "center":
        setCenterFillActiveBtn(button);
        break;
      default:
        break;
    }
  };

  // Function to get button classes for each section
  const getButtonClasses = (section, button) => {
    let isActive = false;
    switch (section) {
      case "outer":
        isActive = outerRingActiveBtn === button;
        break;
      case "inner":
        isActive = innerRingActiveBtn === button;
        break;
      case "center":
        isActive = centerFillActiveBtn === button;
        break;
      default:
        break;
    }
    return `mx-1 size-selector px-3 ${isActive ? "active-button" : ""}`;
  };

  const resetState = () => {
    setUser("");
    setComponentName("");
    setSize("");
    setValue("");
    setOuterRingActiveBtn("");
    setInnerRingActiveBtn("");
    setCenterFillActiveBtn("");
    setOuterRingColor("#050505"); // Assuming black is the default color
    setInnerRingColor("#000000");
    setInnerRingOffColor("#000000");
    setCenterFillColor("#000000");
  };

  return (
    <div className="container-fluid main-box">
      {/* ------------------------------ User Input Row ------------------------------ */}
      <div className="row">
        <div className="col-12">
          <label htmlFor="userInput" className="toolbar-text">
            User
          </label>
          <input
            type="text"
            id="userInput"
            name="user"
            className="input-field"
            value={user}
            onChange={handleUserChange}
          />
          <button onClick={handleUserOnlyPost}>Submit</button>
        </div>
      </div>

      {/* --------------------------- Component Name Row --------------------------- */}
      <div className="row">
        <div className="col-12">
          <label htmlFor="componentNameInput" className="toolbar-text">
            Component Name
          </label>
          <input
            type="text"
            id="componentNameInput"
            name="componentName"
            className="input-field"
            value={componentName}
            onChange={handleComponentNameChange}
          />
        </div>
      </div>

      {/* This is the left panel of the toolbar editor: */}
      <div className="col-6 border border-secondary p-0">
        {/* Size Box */}
        <div className="col-12 border border-secondary">
          <h5>Size</h5>
          <div className="col-12">
            <label htmlFor="sizeInput" className="toolbar-text">
              Full Diameter
            </label>
            <input
              type="text"
              id="sizeInput"
              name="size"
              className="input-field"
              value={size}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Static Colors Box */}
        <div className="col-12 border border-secondary">
          <h5>Static Colors</h5>
          <div className="col-12">
            <label htmlFor="sizeInput" className="toolbar-text">
              Background
            </label>
            <input
              type="color"
              id="shadowColor"
              name="shadowColor"
              value={shadowColor}
              onChange={(e) => handleColorChange(setShadowColor, e)}
              className=""
            />
          </div>

          <div className="col-12">
            <label htmlFor="sizeInput" className="toolbar-text">
              Border Ring
            </label>
            <input
              type="color"
              id="outerRingColor"
              name="outerRingColor"
              value={outerRingColor}
              onChange={(e) => handleColorChange(setOuterRingColor, e)}
              className=""
            />
          </div>

          <div className="col-12">
            <label htmlFor="sizeInput" className="toolbar-text">
              Center Fill
            </label>
            <input
              type="color"
              id="centerFillColor"
              name="centerFillColor"
              value={centerFillColor}
              onChange={(e) => handleColorChange(setCenterFillColor, e)}
              className=""
            />
          </div>
        </div>

        {/* Font Box */}
        <div className="col-12 border border-secondary">
          <h5>Font</h5>
          {/* Font Family */}
          <div className="col-12">
            <label htmlFor="sizeInput" className="toolbar-text">
              Font Family
            </label>
            <select
              id="fontFamily"
              name="fontFamily"
              className="input-field"
              value={fontFamily}
              onChange={handleFontFamilyChange}
            >
              <option value="Arial">Arial</option>
            </select>
          </div>
          {/* Font Color */}
          <div className="col-6">
            <label htmlFor="fontColor" className="toolbar-text">
              Font Color
            </label>
            <input
              type="color"
              id="fontColor"
              name="fontColor"
              value={fontColor}
              onChange={handleFontColorChange}
              className=""
            />
          </div>
          {/* Font Weight */}
          <div className="col-6 d-flex">
            <label htmlFor="fontWeight" className="toolbar-text">
              Weight
            </label>
            <button
              className={getButtonClasses("inner", "S")}
              onClick={() => handleButtonClick("inner", "S")}
            >
              S
            </button>
            <button
              className={getButtonClasses("inner", "M")}
              onClick={() => handleButtonClick("inner", "M")}
            >
              M
            </button>
            <button
              className={getButtonClasses("inner", "L")}
              onClick={() => handleButtonClick("inner", "L")}
            >
              L
            </button>
          </div>
        </div>
      </div>

      {/* THIS IS WHERE YOU LEFT OFF... */}
      {/* -------------------------------------Inner Ring------------------------------------- */}

      <div className="text-center bg-box">
        <label htmlFor="valueInput" className="toolbar-text">
          Value:
        </label>
        <input
          type="text"
          id="valueInput"
          name="size"
          className="input-field"
          value={value}
          onChange={handleVlaueInputChange}
        />
      </div>

      <div className="text-center mr-2 p-3 bg-box" style={{ flex: 1 }}>
        <div className="mb-2 toolbar-text">Inner Ring</div>
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <span className="toolbar-text">Weight: </span>
            <button
              className={getButtonClasses("inner", "S")}
              onClick={() => handleButtonClick("inner", "S")}
            >
              S
            </button>
            <button
              className={getButtonClasses("inner", "M")}
              onClick={() => handleButtonClick("inner", "M")}
            >
              M
            </button>
            <button
              className={getButtonClasses("inner", "L")}
              onClick={() => handleButtonClick("inner", "L")}
            >
              L
            </button>
          </div>
          <span className="toolbar-text">Active Color</span>
          <input
            type="color"
            id="innerRingColor"
            name="innerRingColor"
            value={innerRingColor}
            onChange={(e) => handleColorChange(setInnerRingColor, e)}
            className="ml-2"
          />
          <span className="toolbar-text">Inactive Color</span>
          <input
            type="color"
            id="innerRingOffColor"
            name="innerRingOffColor"
            value={innerRingOffColor}
            onChange={(e) => handleColorChange(setInnerRingOffColor, e)}
            className="ml-2"
          />
        </div>
      </div>

      <div className="d-flex justify-content-center mt-3">
        <button onClick={renderComponentClick} className="p-3">
          Render Component
        </button>
        <button onClick={resetState} className="p-3 ml-2">
          Reset
        </button>
      </div>
    </div>
  );
};

export default RadialBasic;
