

const M1S13 = ({ onNext }) => {
  return (
    <div
      className="w-full p-6 flex flex-col overflow-y-auto"
      style={{ minHeight: "100vh" }}
    >
      {/* Top Image */}
      <div className="flex justify-center mb-4">
        <img
          src="/slides/one/point.png"
          alt="Points"
          className="object-contain"
          style={{ maxHeight: "120px" }}
        />
      </div>

      {/* Title */}
      <div className="text-center mb-6">
        <h2
          className="font-bold"
          style={{ color: "#003366", fontSize: "1.8rem" }}
        >
          PERSONAL CORE VALUE STATEMENT
        </h2>
      </div>

      {/* Content Cards */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        {/* Left Card */}
        <div className="md:w-1/2">
          <div
            className="p-4 h-full rounded-lg"
            style={{
              backgroundColor: "#D3E6F9",
              borderLeft: "4px solid #00b0f0",
            }}
          >
            <p style={{ fontSize: "0.95rem" }}>
              Now, write down 10–15 values that really matter to you, like
              honesty, kindness, or creativity. Then, narrow it down to your
              top 5 core values. These are the ones that guide what you do every
              day.
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="md:w-1/2">
          <div
            className="p-4 h-full rounded-lg"
            style={{
              backgroundColor: "#f0f8ff",
              borderLeft: "4px solid #92d050",
            }}
          >
            <h3
              className="font-bold mb-2"
              style={{ color: "#003366", fontSize: "1.1rem" }}
            >
              THINK ABOUT WHAT MATTERS MOST TO YOU
            </h3>

            <p className="mb-3" style={{ fontSize: "0.95rem" }}>
              What are the things that help you make decisions and act?
            </p>

            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <div style="font-size:0.95rem">
                    <div class="mb-2"><strong>1.</strong> What qualities do you admire in other people?</div>
                    <div class="mb-2"><strong>2.</strong> What beliefs or ideas are most important to you?</div>
                    <div class="mb-2"><strong>3.</strong> When do you feel happiest and proud of yourself?</div>
                  </div>
                `,
              }}
            />
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="text-center mt-2">
        <button
          onClick={onNext}
          className="text-white font-bold px-6 py-2"
          style={{
            background: "#00b0f0",
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

export default M1S13;
