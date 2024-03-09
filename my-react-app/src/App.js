import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Notice 'Routes' instead of 'Switch'
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Components/Landing';
import Body from './Components/Body';
import Hero from './Components/Body';
import DashboardManagerConcept from './Components/DashboardManagerConcept';
import Documentation from './Components/Documentation';
import Pricing from './Components/Pricing';
import TopNav from "./Components/TopNav";
import Footer from "./Components/Footer";


function App() {
  return (
    <Router>
      <TopNav />
      <div className="App bg-main">
        {/* <TopNav /> */}
        <Routes> {/* Use 'Routes' here */}
          <Route path="/" element={<Landing />} />
          <Route path="/builder" element={<Body />} />
          <Route path="/dashboard" element={<DashboardManagerConcept />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* Add more routes as needed */}
        </Routes>
        {/* <Footer /> */}
      </div>
      <Footer />
    </Router>
  );
}

export default App;
