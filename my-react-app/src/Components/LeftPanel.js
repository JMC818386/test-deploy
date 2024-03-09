import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';
import RadialTest from './RadialTest.svg'

function LeftPanel() {
    // const [imageSrc, setImageSrc] = useState('');
    // const [imageData, setImageData] = useState(null); // To store the image data as an object

    
     // Empty dependency array to run the effect only once

    const handleRetrieveClick = () => {

      // const post_data = {
      //   'full_w': 1000,
      //   'value' : 25,
      //   'font_c' : "FFFFFF",
      //   'on_c' : "FFFFFF",
      //   'off_c' : "000000",
      //   'asset' : "wedges1",
      //   'shadow_c' : "808080",
      //   'outer_c' : "000000",
      //   'inner_c' : "000000"
      // };

      const post_data = {
         'asset' : "numinring",
         'width' : 1000,
         'value' : 25,
         'ring_w' : "m"
      }

      // Axios request to fetch the new image data
      axios.post('https://jmc2.lakeshoresoftwareinc.com/api/asset/', {post_data})
        .then(response => {
          // Extract the Base64 encoded image data from the response
          var imgObj = document.getElementById("dynamic_img");
          imgObj.src = response.data.data.image;
          console.log(response)
        })
        .catch(error => {
          console.error('Error fetching image data:', error);
        });
    };

    return (
        <div className="container-fluid p-0 border border-dark d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
            <div>
                <img id="dynamic_img" width="250" src={RadialTest} alt="Returned Graphic" />
                <button onClick={handleRetrieveClick}>Retrieve Graphic</button>
            </div>
        </div>
    );
}

export default LeftPanel;
