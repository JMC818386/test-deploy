import React from "react";
import TopNav from "./TopNav";
import Footer from "./Footer";
import Body from "./Body";
import DashboardManagerConcept from "./DashboardManagerConcept.js";
import DashboardManagerActual from "./DashboardManagerActual.js";
import Pricing from "./Pricing.js";
import Documentation from "./Documentation.js";
import Hero from "./Hero.js";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Landing() {
  return (
    <div className="container-fluid">
      <Hero />
    </div>
  );
}

export default Landing;
