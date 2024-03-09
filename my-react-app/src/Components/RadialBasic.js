import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import RingThicknessLarge from "./images/ring-thickness-large.svg";
import RingThicknessMedium from "./images/ring-thickness-medium.svg";
import RingThicknessSmall from "./images/ring-thickness-small.svg";
import TransparentBG from "./images/Transparency500.png";

// const fetchData = async () => {
//   const response = await axios.get('https://8000-jmc818386-dgedjangodemo-mh3rgvwoggy.ws-us108.gitpod.io/assets/');
//   console.log(response.data.id); // Log here before returning
//   return response.data;
// }

const RadialBasic = ({ onRender }) => {
  // <------------------------------------------API setup to Django Backend-----------------------
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetchData().then(fetchedData => {
  //     setData(fetchedData);
  //     console.log(fetchedData); // Log here to see fetched data immediately
  //   });
  // }, []);

  // useEffect(() => {
  //   console.log(data); // This will log every time 'data' changes
  // }, [data]);

  // <------------------------------------------State variable declarations------------------------------------------>
  const [username, setUsername] = useState("");
  const [size, setSize] = useState("");
  const [outerRingActiveBtn, setOuterRingActiveBtn] = useState("");
  const [innerRingActiveBtn, setInnerRingActiveBtn] = useState("");
  const [centerFillActiveBtn, setCenterFillActiveBtn] = useState("");
  const [outerRingColor, setOuterRingColor] = useState("#3d3d42");
  const [innerRingColor, setInnerRingColor] = useState("#3d3d42");
  const [innerRingOffColor, setInnerRingOffColor] = useState("#3d3d42");
  const [shadowColor, setShadowColor] = useState("#29292D");
  const [centerFillColor, setCenterFillColor] = useState("#3D3D42");
  const [fontFamily, setFontFamily] = useState("bebasneue-regular");
  const [fontColor, setFontColor] = useState("#29292D");
  const [radioValue, setRadioValue] = useState("off");
  const [selectedRingThickness, setSelectedRingThickness] = useState("l");
  const [activeButton, setActiveButton] = useState(null);
  const [dynamicImgUrl, setDynamicImgUrl] = useState("");

  // <------------------------------------------Dynamic Color------------------------------------------>
  const [dynamicColorActive, setDynamicColorActive] = useState(false);
  const [colorZone1Active, setColorZone1Active] = useState(false);
  const [colorZone2Active, setColorZone2Active] = useState(false);
  const [colorZone3Active, setColorZone3Active] = useState(false);
  const [colorZone4Active, setColorZone4Active] = useState(false);
  const [colorZone1Selection, setColorZone1Selection] = useState("#2fdf0c");
  const [colorZone2Selection, setColorZone2Selection] = useState("#f0f410");
  const [colorZone3Selection, setColorZone3Selection] = useState("#f07400");
  const [colorZone4Selection, setColorZone4Selection] = useState("#f00000");
  const [zone1MaxInput, setzone1MaxInput] = useState("");
  const [zone2MaxInput, setzone2MaxInput] = useState("");
  const [zone3MaxInput, setzone3MaxInput] = useState("");
  const [zone4MaxInput, setzoneMaxInput] = useState("");

  // <------------------------------------------Ring Thickness button conversion to JSON readable string value------------------------------------------>
  const activeSelectedButton = selectedRingThickness
    ? selectedRingThickness === "l"
      ? "largeButton"
      : selectedRingThickness === "m"
      ? "mediumButton"
      : "smallButton"
    : "";

  // <------------------------------------------Event Handlers------------------------------------------>
  const handleMainRadioChange = (event) => {
    const value = event.target.value;
    setDynamicColorActive(value === "on"); // Update based on the selection
  };

  const handleZone1Toggle = () => {
    setColorZone1Active((prevState) => !prevState); // Toggle the state
  };

  const handleZone2Toggle = () => {
    setColorZone2Active((prevState) => !prevState); // Toggle the state
  };

  const handleZone3Toggle = () => {
    setColorZone3Active((prevState) => !prevState); // Toggle the state
  };

  const handleZone4Toggle = () => {
    setColorZone4Active((prevState) => !prevState); // Toggle the state
  };

  const handleColorChange = (colorSetter, event) => {
    colorSetter(event.target.value);
  };

  const handleInputChange = (event) => {
    setSize(event.target.value);
  };

  const handleFontFamilyChange = (event) => {
    setFontFamily(event.target.value);
  };

  const handleFontColorChange = (event) => {
    setFontColor(event.target.value);
  };

  const handleUsernameInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleThicknessButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    let thicknessLetter = "";
    if (buttonId === "largeButton") {
      thicknessLetter = "l";
    } else if (buttonId === "mediumButton") {
      thicknessLetter = "m";
    } else if (buttonId === "smallButton") {
      thicknessLetter = "s";
    }
    setSelectedRingThickness(thicknessLetter);
  };

  const handleZone1MaxChange = (event) => {
    setzone1MaxInput(parseInt(event.target.value, 10) || 0);
  };

  const handleZone2MaxChange = (event) => {
    setzone2MaxInput(parseInt(event.target.value, 10) || 0);
  };

  const handleZone3MaxChange = (event) => {
    setzone3MaxInput(parseInt(event.target.value, 10) || 0);
  };

  const handleZone4MaxChange = (event) => {
    setzoneMaxInput(parseInt(event.target.value, 10) || 0);
  };

  //<------------------------------------------Axios call to retrieve user's last design------------------------------------------>
  const retrieveUserLastDesign = () => {
    const url = `https://jmc2.lakeshoresoftwareinc.com/api/getasset/timbo/wedges1?timestamp=${new Date().getTime()}`;

    axios
      .get(url)
      .then((response) => {
        const imgObj = document.getElementById("dynamic_img");
        imgObj.src = response.data.data.image;
        console.log("Last design parameters:", response.data.data.params);
      })
      .catch((error) => {
        console.error("Error fetching user design data:", error);
      });
  };

  //<------------------------------------------Event handler to trigger axios call when Render Component is clicked------------------------------------------>

  const renderComponentClick = () => {
    const post_data = {
      username: username,
      component: "wedges1",
      full_w: 400,
      outer_c: outerRingColor,
      on_c: innerRingColor,
      off_c: innerRingOffColor,
      shadow_c: shadowColor,
      inner_c: centerFillColor,
      font_fam: fontFamily,
      font_c: fontColor,
      wedge_w: selectedRingThickness,
      zone1_c: colorZone1Selection,
      zone1_v: zone1MaxInput,
      zone1_in: 0,
      zone2_c: colorZone2Selection,
      zone2_v: zone2MaxInput,
      zone2_in: 0,
      zone3_c: colorZone3Selection,
      zone3_v: zone3MaxInput,
      zone3_in: 0,
      zone4_c: colorZone4Selection,
      zone4_v: zone3MaxInput,
      zone4_in: 0,
    };
    console.log(post_data);

    //axios call to get image data
    axios
      .post("https://jmc2.lakeshoresoftwareinc.com/api/asset2/set", {
        post_data,
      })
      .then((response) => {
        const imgObj = document.getElementById("dynamic_img");
        imgObj.src = response.data.data.image;
        setDynamicImgUrl(response.data.data.image);
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
    // setUser("");
    // setComponentName("");
    setSize("");
    // setValue("");
    setOuterRingActiveBtn("");
    setInnerRingActiveBtn("");
    setCenterFillActiveBtn("");
    setOuterRingColor("#3d3d42");
    setInnerRingColor("#3d3d42");
    setInnerRingOffColor("#3D3D42");
    setCenterFillColor("#3D3D42");
    setFontColor("#29292D");
    setShadowColor("#29292D");
    setColorZone1Selection("#2fdf0c");
    setColorZone2Selection("#f0f410");
    setColorZone3Selection("#f07400");
    setColorZone4Selection("#f00000");
  };

  return (
    <div className="container-fluid bg-main px-4">
      {/* <div>
        {data.map(item => (
      <div key={item.id}>{item.outer_c}</div> // Assuming 'name' is a field in your model
      ))}
      </div> */}
      {/* ------------------------------ User Input Row ------------------------------ */}
      <div className="row mb-2">
        <div className="col-12 d-flex justify-content-end align-items-center toolbar-bg">
          <label
            htmlFor="userInput"
            className="d-flex justify-content-center toolbar-header my-2 py-1 pl-3 pr-3"
          >
            User
          </label>
          <input
            type="text"
            id="userInput"
            name="username"
            className="input-field p-2 mx-3"
            value={username}
            onChange={handleUsernameInputChange}
            placeholder="Enter username"
          />
          <button onClick={retrieveUserLastDesign} className="submit-btn">
            Retrieve Last Design
          </button>
        </div>
      </div>

      <div className="col-12 d-flex m-0 p-0">
        {/* This is the left panel of the toolbar editor: */}
        <div className="col-6 box-shadow toolbar-bg">
          {/* Size Box */}
          <div className="col-12 p-0">
            <p className="toolbar-header text-secondary mt-2 py-2 pl-3">Size</p>
            <div className="col-12 d-flex justify-content-between align-items-center">
              <label htmlFor="sizeInput" className="toolbar-text">
                Full Diameter
              </label>
              <input
                type="text"
                id="sizeInput"
                name="size"
                className="diameter-input-field"
                value={size}
                onChange={handleInputChange}
                placeholder="pixels"
              />
            </div>
          </div>

          {/* Static Colors Box */}
          <div className="col-12 p-0">
            <h5 className="toolbar-header text-secondary mt-2 py-2 pl-3">
              Static Colors
            </h5>
            <div className="col-12 d-flex justify-content-between align-items-center divider-line py-2">
              <label htmlFor="sizeInput" className="toolbar-text">
                Background
              </label>
              <input
                type="color"
                id="shadowColor"
                name="shadowColor"
                value={shadowColor}
                onChange={(e) => handleColorChange(setShadowColor, e)}
                className="square-color-picker"
              />
            </div>

            <div className="col-12 d-flex justify-content-between align-items-center divider-line py-2">
              <label htmlFor="sizeInput" className="toolbar-text">
                Border Ring
              </label>
              <input
                type="color"
                id="outerRingColor"
                name="outerRingColor"
                value={outerRingColor}
                onChange={(e) => handleColorChange(setOuterRingColor, e)}
                className="square-color-picker"
              />
            </div>

            <div className="col-12 d-flex justify-content-between align-items-center py-2">
              <label
                htmlFor="sizeInput"
                className="toolbar-text d-flex align-items-center"
              >
                Center Fill
              </label>
              <input
                type="color"
                id="centerFillColor"
                name="centerFillColor"
                value={centerFillColor}
                onChange={(e) => handleColorChange(setCenterFillColor, e)}
                className="square-color-picker"
              />
            </div>
          </div>

          {/* Font Box */}
          <div className="col-12 p-0">
            <h5 className="toolbar-header text-secondary py-2 pl-3">Font</h5>
            {/* Font Family */}
            <div className="col-12 d-flex justify-content-between align-items-center divider-line py-2">
              <label htmlFor="sizeInput" className="toolbar-text">
                Font Family
              </label>
              <select
                id="fontFamily"
                name="fontFamily"
                className="input-field-font"
                value={fontFamily}
                onChange={handleFontFamilyChange}
              >
                <option className="bebasneue-regular" value="bebasneue-regular">
                  Bebasneue-Regular
                </option>
                {/* <option className="bebasneue-bold" value="bebasneue-bold">Bebasneue-Bold</option> */}
                <option
                  className="bungeehairline-regular"
                  value="bungeehairline-regular"
                >
                  Bungee Hair Line-Regular
                </option>
                <option
                  className="jetbrains-mono-regular"
                  value="jetbrains-mono-regular"
                >
                  Jetbrains-Mono-Regular
                </option>
                <option
                  className="jetbrains-mono-bold"
                  value="jetbrains-mono-bold"
                >
                  Jetbrains-Mono-Bold
                </option>
                <option className="lato-regular" value="lato-regular">
                  Lato-Regular
                </option>
                <option className="lato-bold" value="lato-bold">
                  Lato-Bold
                </option>
                <option
                  className="leaguespartan-regular"
                  value="leaguespartan-regular"
                >
                  League Spartan-Regular
                </option>
                <option
                  className="leaguespartan-bold"
                  value="leaguespartan-bold"
                >
                  League Spartan-Bold
                </option>
                <option className="lexend-regular" value="lexend-regular">
                  Lexend-Regular
                </option>
                <option className="lexend-bold" value="lexend-bold">
                  Lexend-Bold
                </option>
                <option
                  className="montserrat-regular"
                  value="montserrat-regular"
                >
                  Lontserrat-Regular
                </option>
                <option className="montserrat-bold" value="montserrat-bold">
                  Lontserrat-Bold
                </option>
                <option
                  className="robocondensed-regular"
                  value="robocondensed-regular"
                >
                  Robo Condensed-Regular
                </option>
                <option
                  className="robocondensed-bold"
                  value="robocondensed-bold"
                >
                  Robo Condensed-Bold
                </option>
              </select>
            </div>
            {/* Font Color */}
            <div className="col-12 d-flex justify-content-between align-items-center divider-line py-2">
              <label htmlFor="fontColor" className="toolbar-text">
                Font Color
              </label>
              <input
                type="color"
                id="fontColor"
                name="fontColor"
                value={fontColor}
                onChange={handleFontColorChange}
                className="square-color-picker"
              />
            </div>
          </div>

          {/* -------------------------------------Dynamic Ring------------------------------------- */}

          <div className="col-12 p-0">
            <h5 className="toolbar-header text-secondary mt-2 py-2 pl-3">
              Dynamic Ring
            </h5>
            {/* Font Family */}
            <div className="col-12 d-flex justify-content-between align-items-center divider-line pb-2">
              <label className="toolbar-text">Active Color</label>
              <input
                type="color"
                id="innerRingColor"
                name="innerRingColor"
                value={innerRingColor}
                onChange={(e) => handleColorChange(setInnerRingColor, e)}
                className="square-color-picker"
              />
            </div>

            {/* Font Color */}
            <div className="col-12 d-flex justify-content-between align-items-center divider-line py-2">
              <label className="toolbar-text">Inactive Color</label>
              <input
                type="color"
                id="innerRingOffColor"
                name="innerRingOffColor"
                value={innerRingOffColor}
                onChange={(e) => handleColorChange(setInnerRingOffColor, e)}
                className="square-color-picker"
              />
            </div>

            {/* Ring Thickness */}
            <div className="col-12 d-flex justify-content-between align-items-center divider-line py-2">
              <label className="toolbar-text">Weight</label>
              <button
                className={`ring-thickness-btn ${
                  activeSelectedButton === "largeButton" ? "active" : ""
                }`}
                id="largeButton"
                onClick={() => handleThicknessButtonClick("largeButton")}
              >
                <img src={RingThicknessLarge} alt="Large" />
              </button>
              <button
                className={`ring-thickness-btn ${
                  activeSelectedButton === "mediumButton" ? "active" : ""
                }`}
                id="mediumButton"
                onClick={() => handleThicknessButtonClick("mediumButton")}
              >
                <img src={RingThicknessMedium} alt="Medium" />
              </button>
              <button
                className={`ring-thickness-btn ${
                  activeSelectedButton === "smallButton" ? "active" : ""
                }`}
                id="smallButton"
                onClick={() => handleThicknessButtonClick("smallButton")}
              >
                <img src={RingThicknessSmall} alt="Small" />
              </button>
            </div>
          </div>
        </div>

        {/* This is the right panel of the toolbar editor: */}
        <div className="col-6  box-shadow toolbar-bg ml-2">
          <div className="col-12 p-0">
            {/* Dynamic Color */}
            <h5 className="toolbar-header text-secondary py-2 pl-3 m-2">
              Dynamic Color
            </h5>
            <div className="">
              <form className="d-flex justify-content-around align-items-center divider-line pb-2">
                {/* Color Zone Label */}
                <div className="toolbar-text">Color Zones</div>

                {/* On Radio Button */}
                <label className="toolbar-text">
                  <input
                    type="radio"
                    name="colorZone"
                    value="on"
                    className="radio-btn m-2"
                    checked={dynamicColorActive === true}
                    onChange={handleMainRadioChange}
                  />
                  On
                </label>

                {/* Off Radio Button */}
                <label className="toolbar-text">
                  <input
                    type="radio"
                    name="colorZone"
                    value="off"
                    className="radio-btn m-2"
                    checked={dynamicColorActive === false}
                    onChange={handleMainRadioChange}
                  />
                  Off
                </label>
              </form>
            </div>

            {/* <-------------------------------------------Color Zone 1-------------------------------------------> */}
            <div className="col-12 d-flex justify-content-between align-items-center divider-line mt-2 pb-2">
              <input
                type="checkbox" // Changed to checkbox for toggle behavior
                className="radio-btn"
                checked={colorZone1Active}
                onChange={handleZone1Toggle}
              />
              <label htmlFor="zone1Toggle" className="toolbar-text m-0">
                Zone 1
              </label>
              <input
                type="color"
                id="colorZone1Selection"
                name="colorZone1Selection"
                value={colorZone1Selection}
                onChange={(e) => handleColorChange(setColorZone1Selection, e)}
                className="square-color-picker"
              />
              <input
                type="text"
                id="one1MaxInput"
                name="one1MaxInput"
                className="range-input-field"
                value={zone1MaxInput}
                onChange={handleZone1MaxChange}
                placeholder="value"
              />
            </div>

            {/* <-------------------------------------------Color Zone 2-------------------------------------------> */}
            <div className="col-12 d-flex justify-content-between align-items-center divider-line mt-2 pb-2">
              <input
                type="checkbox" // Changed to checkbox for toggle behavior
                className="radio-btn"
                checked={colorZone2Active}
                onChange={handleZone2Toggle}
              />
              <label htmlFor="zone2Toggle" className="toolbar-text m-0">
                Zone 2
              </label>
              <input
                type="color"
                id="colorZone1Selection"
                name="colorZone2Selection"
                value={colorZone2Selection}
                onChange={(e) => handleColorChange(setColorZone2Selection, e)}
                className="square-color-picker"
              />
              <input
                type="text"
                id="one2MaxInput"
                name="one2MaxInput"
                className="range-input-field"
                value={zone2MaxInput}
                onChange={handleZone2MaxChange}
                placeholder="value"
              />
            </div>

            {/* <-------------------------------------------Color Zone 3-------------------------------------------> */}
            <div className="col-12 d-flex justify-content-between align-items-center divider-line mt-2 pb-2">
              <input
                type="checkbox" // Changed to checkbox for toggle behavior
                className="radio-btn"
                checked={colorZone3Active}
                onChange={handleZone3Toggle}
              />
              <label htmlFor="zone3Toggle" className="toolbar-text m-0">
                Zone 3
              </label>
              <input
                type="color"
                id="colorZone3Selection"
                name="colorZone3Selection"
                value={colorZone3Selection}
                onChange={(e) => handleColorChange(setColorZone3Selection, e)}
                className="square-color-picker"
              />
              <input
                type="text"
                id="one3MaxInput"
                name="one3MaxInput"
                className="range-input-field"
                value={zone3MaxInput}
                onChange={handleZone3MaxChange}
                placeholder="value"
              />
            </div>

            {/* <-------------------------------------------Color Zone 4-------------------------------------------> */}
            <div className="col-12 d-flex justify-content-between align-items-center divider-line mt-2 pb-2">
              <input
                type="checkbox" // Changed to checkbox for toggle behavior
                className="radio-btn"
                checked={colorZone4Active}
                onChange={handleZone4Toggle}
              />
              <label htmlFor="zone4Toggle" className="toolbar-text m-0">
                Zone 4
              </label>
              <input
                type="color"
                id="colorZone4Selection"
                name="colorZone4Selection"
                value={colorZone4Selection}
                onChange={(e) => handleColorChange(setColorZone4Selection, e)}
                className="square-color-picker"
              />

              <input
                type="text"
                id="one4MaxInput"
                name="one4MaxInput"
                className="range-input-field"
                value={zone4MaxInput}
                onChange={handleZone4MaxChange}
                placeholder="value"
              />
            </div>

            <div
              className="div"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              {dynamicImgUrl && (
                <div>
                  <img
                    src={dynamicImgUrl}
                    alt="Dynamic Light"
                    className="canvas-toggle-light bg-light p-1"
                  />
                </div>
              )}
              {dynamicImgUrl && (
                <div>
                  <img
                    src={dynamicImgUrl}
                    alt="Dynamic Dark"
                    className="canvas-toggle-dark p-1"
                  />
                </div>
              )}
              {dynamicImgUrl && (
                <div
                  className="dynamic-image-container"
                  style={{ backgroundImage: `url(${TransparentBG})` }}
                >
                  <img
                    src={dynamicImgUrl}
                    alt="Dynamic Transparent"
                    className="canvas-toggle-transparent p-1"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <button onClick={renderComponentClick} className="render-btn">
          Render Component
        </button>
        <button onClick={resetState} className="reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
};

export default RadialBasic;
