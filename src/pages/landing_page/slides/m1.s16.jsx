import pointImg from "../../../assets/slides/one/20point.png";

const M1S16 = ({ goNext }) => {
  return (
    <div
      className="p-3 d-flex flex-column"
      style={{ minHeight: "100vh", overflowY: "auto" }}
    >
      {/* Image */}
      <div className="row">
        <div className="col-12 text-center mb-3">
          <img
            src={pointImg}
            alt="20 points"
            className="img-fluid"
            style={{ maxHeight: "120px", objectFit: "contain" }}
          />
        </div>
      </div>

      {/* Title */}
      <div className="row">
        <div className="col-12 text-center mb-3">
          <h2
            className="fw-bold mb-2"
            style={{ color: "#003366", fontSize: "1.8rem" }}
          >
            PERSONAL MISSION STATEMENT
          </h2>
        </div>
      </div>

      {/* Content boxes */}
      <div className="row">
        <div className="col-md-6 mb-3">
          <div
            className="p-3 h-100"
            style={{
              backgroundColor: "#8CD948",
              borderRadius: "8px",
              borderLeft: "4px solid #92d050",
            }}
          >
            <p className="mb-0" style={{ fontSize: "0.95rem" }}>
              A personal mission statement is like a life guide—a short sentence
              or two that shows what matters most to you and how you want to
              live. Think of it as your personal roadmap, helping you stay
              focused on your goals and the kind of person you want to be. It's
              there to help you make choices and keep you on track toward the
              future you want.
            </p>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div
            className="p-3 h-100"
            style={{
              backgroundColor: "#f0f8ff",
              borderRadius: "8px",
              borderLeft: "4px solid #00b0f0",
            }}
          >
            <h5
              className="fw-bold mb-2"
              style={{ color: "#003366", fontSize: "1.1rem" }}
            >
              THINK ABOUT WHAT MATTERS MOST TO YOU
            </h5>

            <div style={{ fontSize: "0.95rem" }}>
              <div className="d-flex mb-2">
                <div style={{ minWidth: 25, fontWeight: "bold" }}>1.</div>
                <div>
                  <strong>What do I care about the most?</strong>
                </div>
              </div>
              <div className="d-flex mb-2">
                <div style={{ minWidth: 25, fontWeight: "bold" }}>2.</div>
                <div>
                  <strong>What kind of person do I want to be?</strong>
                </div>
              </div>
              <div className="d-flex mb-2">
                <div style={{ minWidth: 25, fontWeight: "bold" }}>3.</div>
                <div>
                  <strong>How do I want to treat others?</strong>
                </div>
              </div>
              <div className="d-flex mb-2">
                <div style={{ minWidth: 25, fontWeight: "bold" }}>4.</div>
                <div>
                  <strong>
                    What are my biggest goals or dreams for the future?
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section heading */}
      <div className="row">
        <div className="col-12 text-center mb-3">
          <h3
            className="fw-bold"
            style={{ color: "#92d050", fontSize: "1.5rem" }}
          >
            Create a Personal Mission Statement
          </h3>
        </div>
      </div>

      {/* Button */}
      <div className="row">
        <div className="col-12 text-center mt-2">
          <button
            className="btn btn-primary px-4 py-2 fw-bold"
            style={{
              background: "#00b0f0",
              border: "none",
              fontSize: "1rem",
              borderRadius: "50px",
              whiteSpace: "nowrap",
            }}
            onClick={goNext}
          >
            CLICK TO MOVE FORWARD ON YOUR JOURNEY
          </button>
        </div>
      </div>
    </div>
  );
};

export default M1S16;
