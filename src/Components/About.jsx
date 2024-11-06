import React from 'react';
import about from '../assets/Gallery/5.jpeg'; 

const About = () => {
  return (
    <div id='about' className="container-fluid pt-5 bg-light d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="row mx-auto" style={{ maxWidth: '80rem' }}>
        <div className="col-12 text-center mb-5">
          <h2 className='display-4 fs-2'>"Capturing life's moments, one frame at a time"</h2>
        </div>
        <div className="col-lg-6 mb-4 mb-lg-0 text-center">
          <img src={about} alt="Photographer" className="img-fluid rounded shadow" style={{ width: 'auto', height: '30rem' }} />
        </div>
        <div className="col-lg-6 text-center" style={{ padding: '0 2rem' }}>
          <p className="lead" style={{width:'98%'}}>Hi, I'm Kutlang Manyarela, a passionate photographer dedicated to capturing your most precious moments.</p>
          <p className="fst-italic" style={{width:'98%'}}>With a keen eye for detail and a love for storytelling, I offer photography services for portraits, events, landscapes, and commercial projects.</p>
          <p className="fw-bold" style={{width:'98%'}}>I'm committed to delivering high-quality images that exceed your expectations.</p>
          <p>I specialize in creating customized photography experiences for individuals, families, and businesses.</p>
          <p>When I'm not behind the lens, you can find me sharing my photography expertise and inspiring others to see the beauty in everyday life.</p>
          <p>I'm grateful for the opportunity to preserve your memories and tell your story through my photographs.</p>
        </div>
      </div>
    </div>
  );
};

export default About;