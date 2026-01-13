import React, { useState } from "react";

const M1S19 = ({ goNext }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="p-4 d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(145deg, #92d050 0%, #00b0f0 100%)",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="row w-100">
        {/* Text and Button */}
        <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center justify-content-center p-4 order-md-1 order-2">
          <div className="text-center position-relative">
            <h1
              className="fw-bold mb-4"
              style={{
                fontSize: "3.5rem",
                lineHeight: "1.2",
                color: "#003366",
                textShadow: "2px 2px 0px rgba(255,255,255,0.3)",
                position: "relative",
                zIndex: 2,
              }}
            >
              CLICK HERE
              <br />
              AND
              <br />
              TAKE ACTION
            </h1>

            <div
              className="mb-5 mx-auto"
              style={{
                height: "6px",
                background: "linear-gradient(90deg, #003366 0%, #00b0f0 100%)",
                width: "120px",
                borderRadius: "3px",
              }}
            />

            <button
              className="btn btn-lg rounded-pill fw-bold px-5 py-3"
              style={{
                background: hover ? "#002244" : "#003366",
                color: "white",
                border: "none",
                fontSize: "1.5rem",
                boxShadow: hover
                  ? "0 12px 25px rgba(0,0,0,0.2)"
                  : "0 8px 20px rgba(0,0,0,0.15)",
                transition: "all 0.3s ease",
                position: "relative",
                zIndex: 2,
                transform: hover ? "translateY(-3px)" : "none",
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={goNext}
            >
              CLICK HERE
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center justify-content-center p-4 order-md-2 order-1">
          <img
            src="8.png"
            alt="M1S19"
            className="img-fluid position-relative"
            style={{
              maxHeight: "500px",
              borderRadius: "16px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              border: "8px solid white",
              zIndex: 2,
              transform: "rotate(3deg)",
            }}
          />
        </div>
      </div>

      {/* Decorative Circles */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          background: "rgba(255,255,255,0.15)",
          borderRadius: "50%",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          left: "-150px",
          width: "500px",
          height: "500px",
          background: "rgba(0,176,240,0.1)",
          borderRadius: "50%",
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default M1S19;
