import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Import your App.css if it contains additional styles
import "../App.css";

const Footer = () => {
  return (
    <div className="container-fluid top-nav-text pb-3 footer-bg box-shadow">
      {/* Main Content Row */}
      <div className="row d-flex justify-content-around pt-5">
        {/* Design and Development Section - Adjust column sizes as needed */}
        <div className="col-md-3 mb-3 text-center footer-text m-3">
          <div>Designed and developed</div>
          <div>By designers and developers</div>
          <div>So you can design and develop too.</div>
        </div>

        {/* Useful Links Section */}
        <div className="col-md-2 mb-3">
          <div className="mb-2 font-weight-bold">Useful Links</div>
          <div>Content</div>
          <div>How It Works</div>
          <div>Create</div>
          <div>Explore</div>
          <div>Terms & Services</div>
        </div>

        {/* Community Section */}
        <div className="col-md-2 mb-3">
          <div className="mb-2 font-weight-bold">Community</div>
          <div className="">Help Center</div>
          <div>Partners</div>
          <div>Suggestions</div>
          <div>Blog</div>
          <div>Newsletters</div>
        </div>

        {/* Partner Section */}
        <div className="col-md-2 mb-3">
          <div className="mb-2 font-weight-bold">Partner</div>
          <div>Content</div>
          <div>How It Works</div>
        </div>
      </div>

      {/* Copyright Row */}
      <div className="row">
        <div className="col-12">
          <div className="text-center toolbar-text mt-4">
            &copy; 2024 DataGraphica All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
