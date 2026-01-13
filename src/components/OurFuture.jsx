// import React from 'react';
// import travelImg from "../assets/trvaelaaa.jpg";
// import HouseImage from "../assets/house.jpg"
// const OurFuture = () => {
//   return (
//     <div className="container mt-5">
//       <h2>Our Future Together</h2>
//       <p>Imagining all the wonderful things we'll do...</p>
//       <div className="row d-flex justify-items-center align-items-center">
//         <div className="col-md-4">
//           <div className="card">
//             <img src={travelImg} className="card-img-top" alt="Travel" />
//             <div className="card-body">
//               <h5 className="card-title">Travel the World</h5>
//               <p className="card-text">Exploring new places together.</p>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="card">
//             <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" className="card-img-top" alt="Family" />
//             <div className="card-body">
//               <h5 className="card-title">Build a Family</h5>
//               <p className="card-text">Creating memories with our kids.</p>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="card">
//             <img src={HouseImage} className="card-img-top" alt="Home" />
//             <div className="card-body">
//               <h5 className="card-title">Our Dream Home</h5>
//               <p className="card-text">A place to call our own.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurFuture;

import React from "react";
import travelImg from "../assets/trvaelaaa.jpg";
import HouseImage from "../assets/house.jpg";


const OurFuture = () => {
  return (
    <div className="container-fluid ourfuture-bg">
    <h2 className="text-center text-pink mb-3 fade-text">
  Our Future Together
</h2>

<p className="text-center text-pink mb-5 fade-text delay">
  Imagining all the wonderful things we'll do...
</p>


      <div className="row g-4">
        <div className="col-md-4 d-flex">
          <div className="card w-100 h-100">
            <img src={travelImg} className="card-img-top future-img" alt="Travel" />
            <div className="card-body">
              <h5 className="card-title">Travel the World</h5>
              <p className="card-text">Exploring new places together.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 d-flex">
          <div className="card w-100 h-100">
            <img
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300"
              className="card-img-top future-img"
              alt="Family"
            />
            <div className="card-body">
              <h5 className="card-title">Build a Family</h5>
              <p className="card-text">Creating memories with our kids.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 d-flex">
          <div className="card w-100 h-100">
            <img src={HouseImage} className="card-img-top future-img" alt="Home" />
            <div className="card-body">
              <h5 className="card-title">Our Dream Home</h5>
              <p className="card-text">A place to call our own.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFuture;
