// import React from 'react';
// import love from "../assets/lo.jpeg"
// const Home = () => {
//   return (
//     <div className="container mt-5 text-center">
//       <h1>Welcome to Our Story</h1>
//       <p>This is the beginning of our beautiful journey together.</p>
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <img src={love} alt="Welcome to Our Story" className="img-fluid rounded" style={{height:"450px", width:"440px"}}/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import love from "../assets/lo.jpeg";

const Home = () => {
  return (
    <div className="container mt-5 text-center">
      <h1 className="fade-text">
        Welcome to Our Story, Ayesha
      </h1>

      <p className="fade-text delay">
        This is the beginning of our beautiful journey together. From the moment I met you, my world changed forever. Your smile lights up my days, and your love fills my heart with joy.
      </p>

      <p className="fade-text delay-2">
        Every moment with you is a treasure, and I can't wait to create countless more memories. You are my everything, Ayesha.
      </p>

      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <img
            src={love}
            alt="Welcome to Our Story"
            className="img-fluid rounded"
            style={{ height: "450px", width: "440px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
