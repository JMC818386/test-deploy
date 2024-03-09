import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RadialBasic from './RadialBasic.js';

function RightPanel() {
  return (
    <div className="container-fluid p-0 border border-dark d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
      <div style={{ maxWidth: '80%' }}>
        <RadialBasic />
      </div>
    </div>
  );
}

export default RightPanel;
