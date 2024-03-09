import React, { useState } from "react";
import RadialBasic from "./RadialBasic";
import RadialTest from "./RadialTest";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.min.css";

const Body = () => {
  const [radialData, setRadialData] = useState({});

  const handleRadialData = (data) => {
    setRadialData({ ...data, triggerFetch: true });
    console.log("RadialBasic-->Body", data); // For proof of concept
  };

  return (
    <div className="container-fluid bg-main">
      <div className="row d-flex justify-content-center">
        {/* Adjust the columns to use Bootstrap's grid system */}
        <div className="col-lg-5 col-md-6 col-sm-12 p-2">
          <RadialTest radialData={radialData} />
        </div>
        <div className="col-lg-7 col-md-12 col-sm-12 p-2">
          <RadialBasic onRender={handleRadialData} />
        </div>
      </div>

      {/* Additional content */}
    </div>
  );
};

export default Body;
