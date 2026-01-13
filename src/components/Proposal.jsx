import React from "react";
import love from "../assets/love.png";

const Proposal = () => {
  return (
    <div className="container mt-5 text-center">
      <h1 className="fade-text">
        Will You be my life partner and girlfriend, Ayesha?
      </h1>

      <p className="fade-text delay">
        I've been thinking about this for a long time, my love. You are the one who completes me, and I can't imagine my life without you.
      </p>

      <p className="fade-text delay-2">
        From the first time I saw you, I knew you were special. Your kindness, your beauty, and your heart have captured mine forever.
      </p>

      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <img
            src={love}
            alt="Proposal"
            className="img-fluid rounded mb-3" style={{height:"600px", width:"450px"}}
          />

          <p>Reasons why I want to spend my life with you:</p>

          <ul className="list-group">
            <li className="list-group-item">You make me happy every day</li>
            <li className="list-group-item">You're my best friend</li>
            <li className="list-group-item">I can't imagine life without you</li>
          </ul>

         <div className="d-flex justify-content-center gap-3 mt-4">
  <a
    href="https://wa.me/917866057058?text=YES%20I%20said%20YES%20❤️"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-success btn-lg"
  >
    Yes 💖
  </a>

  <a
    href="https://wa.me/917866057058?text=NO%20but%20you%20are%20sweet%20🙂"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-danger btn-lg"
  >
    No 💔
  </a>
</div>

        </div>
      </div>
    </div>
  );
};

export default Proposal;
