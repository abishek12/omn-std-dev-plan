import React from "react";

const M1S17 = ({ submitCoreValueStatement }) => {
  return (
    <div className="container-fluid px-5 px-xl-6 py-4">
      {/* SAMPLE HEADING */}
      <h4
        className="text-center fw-bold mb-4"
        style={{
          fontSize: "1.8rem",
          color: "#92d06c"
        }}
      >
        SAMPLE CORE VALUE STATEMENT
      </h4>

      {/* Sample statement */}
      <p className="fs-6 mb-5" style={{ lineHeight: "1.8", maxWidth: "1200px" }}>
        "My mission is to always be true to myself, stay curious, and be kind
        to others. I want to keep learning, follow my passions, and use my
        strengths to make a difference in the world, no matter how big or
        small.
        <span className="text-primary fw-semibold"         
        style={{
          color: "#92d06c"
        }}>- QUEST</span>
      </p>

      {/* User input */}
      <h3 className="text-center text-primary fw-bold mb-4"
        style={{
          fontSize: "1.8rem",
          color: "#92d06c"
        }}
        >
        MY PERSONAL MISSION STATEMENT IS...
      </h3>

      <textarea
        className="form-control border-primary border-2 p-3 mb-4"
        style={{
          border: "2px solid #92d050",
          width: "95%",
          maxWidth: "1600px",
          minHeight: "180px",
          fontSize: "1rem",
          padding: "16px",
        }}
        rows={5}
        placeholder="Write your personal mission statement here..."
        id="mission_statement"
      ></textarea>

      {/* Submit button */}
      <div className="d-flex justify-content-center mt-4">
      <button
        className="btn fw-bold text-white px-5"
          style={{
            backgroundColor: "#92d06c",
            fontSize: "1.1rem",
            padding: "12px 48px",
          }}
        onClick={() => submitCoreValueStatement("mission_statement")}
      >
        SUBMIT
      </button>
      </div>
    </div>
  );
};

export default M1S17;
