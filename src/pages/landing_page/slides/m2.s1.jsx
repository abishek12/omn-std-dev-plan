import React from "react";

const M2S1 = ({ onNext }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center d-flex flex-column justify-content-center align-items-center p-3 animate__animated animate__bounceIn">
          {/* Heading 1 */}
          <h1
            className="mb-4 fw-bold"
            style={{ color: "#92d050", fontSize: "3rem" }}
          >
            WELCOME TO MILESTONE 2
          </h1>

          {/* Heading 2 */}
          <h2
            className="mb-4 fw-bold"
            style={{
              fontSize: "2.5rem",
              color: "#000000",
            }}
          >
            You’ve reached the next level – let’s keep pushing forward
          </h2>

          {/* Button */}
          <button
            className="btn mt-4"
            style={{
              color: "#00b0f0",
              background: "white",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
            onClick={onNext}
          >
            CLICK HERE TO ENTER THE JOURNEY
          </button>
        </div>
      </div>
    </div>
  );
};

export default M2S1;
