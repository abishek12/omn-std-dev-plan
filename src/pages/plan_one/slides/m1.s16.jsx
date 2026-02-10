

const M1S16 = ({ goNext }) => {
  return (
    <div
      className="w-full p-6 d-flex flex-col overflow-y-auto"
      style={{ minHeight: "100vh" }}
    >
      {/* Top Image */}
      <div className="flex justify-center mb-4">
        <img
          src="/slides/one/point.png"
          alt="Points"
          className="object-contain"
          style={{ maxHeight: "120px"}}
        />
      </div>

      {/* Title */}
      <div className="text-center mb-6">
        <h2
          className="fw-bold"
          style={{ color: "#92d050", fontSize: "1.8rem" }}
        >
          PERSONAL MISSION STATEMENT
        </h2>
      </div>

      {/* Content Cards */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        {/* Left Card */}
        <div className="md:w-1/2">
          <div
            className="p-4 h-full rounded-lg"
            style={{
              backgroundColor: "#eaf6dd",
              borderLeft: "4px solid #92d050",
            }}
          >
            <p style={{ fontSize: "0.95rem" }}>
              A personal mission statement is like a life guide—a short sentence
              or two that shows what matters most to you and how you want to
              live. Think of it as your personal roadmap, helping you stay
              focused on your goals and the kind of person you want to be. It
              helps you make decisions and stay on track toward the future you
              want.
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="md:w-1/2">
          <div
            className="p-4 h-full rounded-lg"
            style={{
              backgroundColor: "#f6fbf1",
              borderLeft: "4px solid #92d050",
            }}
          >
            <h3
              className="fw-bold mb-2"
              style={{ color: "#003366", fontSize: "1.1rem" }}
            >
              THINK ABOUT WHAT MATTERS MOST TO YOU
            </h3>

            <p className="mb-3" style={{ fontSize: "0.95rem" }}>
              Use these questions to guide your thinking.
            </p>

            <div style={{ fontSize: "0.95rem" }}>
              <div className="mb-2">
                <strong>1.</strong> What do I care about the most?
              </div>
              <div className="mb-2">
                <strong>2.</strong> What kind of person do I want to be?
              </div>
              <div className="mb-2">
                <strong>3.</strong> How do I want to treat others?
              </div>
              <div className="mb-2">
                <strong>4.</strong> What are my biggest goals or dreams?
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="text-center mt-2">
        <button
          onClick={goNext}
          className="fw-bold text-white px-5 py-2"
          style={{
            backgroundColor: "#92d050",
            borderRadius: "50px",
            fontSize: "1rem",
            whiteSpace: "nowrap",
            border: "none",
          }}
        >
          CLICK TO MOVE FORWARD ON YOUR JOURNEY
        </button>
      </div>
    </div>
  );
};

export default M1S16;
