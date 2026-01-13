import React from 'react';
import myImage from "../assets/imt.jpeg"
const AboutMe = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2 className="reveal-text">About Imtiyaz</h2>
          <p className='reveal-text'>Hi, I'm Imtiyaz. This is a little about me...</p>
          <ul className="list-group">
            <li className="list-group-item">I love coding</li>
            <li className="list-group-item">I enjoy spending time with you</li>
            <li className="list-group-item">My favorite hobby is spending time with you
              and thinking about you
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <img src={myImage} alt="About Me" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
