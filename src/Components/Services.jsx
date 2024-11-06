import React from 'react';
import Image from '../assets/Gallery/1.jpg';
import Image2 from '../assets/Gallery/6.jpeg';
import Image3 from '../assets/Gallery/8.jpeg';

const Services = () => {
  return (
    <div id='services' className="services bg-light p-5 pb-1">
      <h2 className="text-center mb-5">Kutlang Manyarela Photography</h2>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-5">
          <div className="service-item text-center border border-secondary rounded p-3" style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', height: '400px'}}>
            <img src={Image} alt="Portrait Photography" className="mb-3" style={{ width: '98%', height: '200px', objectFit: 'cover' }} />
            <i className="fas fa-camera fa-2x mb-3"></i>
            <h3>Portrait Photography</h3>
            <p className="text-center" style={{ width: '98%' }}>Capture life's precious moments with our professional portrait photography services.</p>
            <div className="overlay d-flex justify-content-center align-items-center"></div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="service-item text-center border border-secondary rounded p-3" style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', height: '400px'}}>
            <img src={Image2} alt="Event Photography" className="mb-3" style={{ width: '98%', height: '200px', objectFit: 'cover' }} />
            <i className="fas fa-image fa-2x mb-3"></i>
            <h3>Event Photography</h3>
            <p className="text-center" style={{ width: '98%' }}>Preserve memories of your special events with our expert photography services.</p>
            <div className="overlay d-flex justify-content-center align-items-center"></div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="service-item text-center border border-secondary rounded p-3" style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', height: '400px'}}>
            <img src={Image3} alt="Landscape Photography" className="mb-3" style={{ width: '98%', height: '200px', objectFit: 'cover' }} />
            <i className="fas fa-landscape fa-2x mb-3"></i>
            <h3>Landscape Photography</h3>
            <p className="text-center" style={{ width: '98%' }}>Explore the beauty of nature through our stunning landscape photography.</p>
            <div className="overlay d-flex justify-content-center align-items-center"></div>
          </div>
        </div>
      </div>
      <style>
        {`
          .service-item:hover {
            transform: scale(1.05);
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
            transition: all 0.3s ease-in-out;
          }
          .service-item:hover .overlay {
            opacity: 1;
          }
          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            cursor:pointer
          }
        `}
      </style>
    </div>
  );
};

export default Services;