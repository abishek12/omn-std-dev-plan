import { useState } from "react";

const M1S15 = ({ onNext }) => {
  const [coreValue, setCoreValue] = useState("");

  const handleSubmit = () => {
    if (onNext) onNext();
  };

  return (
    <div className="container-fluid px-5 px-xl-6 py-4">
      {/* SAMPLE HEADING */}
      <h4 className="text-primary fw-bold mb-3">
        SAMPLE CORE VALUE STATEMENT
      </h4>

      {/* SAMPLE TEXT */}
      <p className="fs-6 mb-5" style={{ lineHeight: "1.8", maxWidth: "1200px" }}>
        “My personal values are honesty, kindness, and determination. I believe
        in always telling the truth, treating others with respect, and never
        giving up, even when things get tough. These values help me be the best
        version of myself and guide me toward my goals.”{" "}
        <span className="text-primary fw-semibold">- QUEST</span>
      </p>

      {/* USER HEADING */}
      <h3 className="text-center text-primary fw-bold mb-4">
        MY PERSONAL CORE VALUE STATEMENT IS…
      </h3>

      {/* WIDER, SHORTER TEXT BOX */}
      <textarea
        className="form-control mx-auto"
        style={{
          border: "2px solid #92d050",
          width: "95%",
          maxWidth: "1600px",
          minHeight: "180px",
          fontSize: "1rem",
          padding: "16px",
        }}
        placeholder="Text Box"
        value={coreValue}
        onChange={(e) => setCoreValue(e.target.value)}
      />

      {/* SUBMIT BUTTON BELOW */}
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn fw-bold text-white px-5"
          style={{
            backgroundColor: "#00b0f0",
            fontSize: "1.1rem",
            padding: "12px 48px",
          }}
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default M1S15;
