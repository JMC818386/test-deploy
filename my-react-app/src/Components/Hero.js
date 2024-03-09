import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
// import Lock from "./images/Lock8.svg";
// import Lightbulb from "./images/Lightbulb.svg";
// import UserCircle from "./images/User Circle Single.svg";
// import MacbookPro from "./images/MacBookPro.png";
// import MacbookProMonitor from "./images/MacBookPro+Monitor.png";
import HeroImage from "./images/hero-image.png";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // Step 2: Call useNavigate

  const handleButtonClick = () => {
    navigate('/builder'); // Navigate to /builder path
  };

  return (
    <div className="container-fluid p-0 home">
      <div className="row g-0">
        {/* Data Graphics Simplified content occupying the left 50% */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="text-center px-3">
            <h1 className="hero-title">Data</h1>
            <h1 className="hero-title">Graphics</h1>
            <h1 className="hero-title mb-2">Simplified</h1>
            <p className="hero-body">
              This is where some interesting text to introduce our site will be
              placed, along with call to action buttons underneath.
            </p>
            <button
              className="btn create-btn p-3 mt-4"
              style={{ backgroundColor: "#b8b8b8", borderRadius: "6px" }}
              onClick={handleButtonClick} // Step 3: Attach onClick handler
            >
              +Start Building
            </button>
          </div>
        </div>

        {/* HeroImage on the right side occupying 50% of the screen */}
        <div className="col-md-6 pb-5 mb-5">
          <img
            src={HeroImage}
            alt="Hero"
            className="img-fluid"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
