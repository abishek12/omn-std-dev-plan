import pointsImg from "../../../assets/slides/one/twenty-point.png";

const M2S4 = ({ onNext }) => {
  return (
    <div
      className="w-full p-6 flex flex-col overflow-y-auto"
      style={{ minHeight: "100vh" }}
    >
      {/* Title */}
      <div className="text-center mb-6">
        <h2
          className="font-bold"
          style={{ fontSize: "1.8rem" }}
        >
          ACADEMIC S.M.A.R.T GOALS
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
              An Academic SMART goal is like a game plan to help you crush it in
              school! It’s all about being Specific (knowing exactly what you
              want), Measurable (tracking your progress), Achievable (making sure
              it’s doable), Relevant (keeping it important to you), and
              Time-bound (setting a deadline). With a SMART goal, you know what
              you’re aiming for and how to get there!
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
              style={{ fontSize: "1.1rem" }}
            >
              THINGS YOU SHOULD ASK YOURSELF WHEN CREATING AN ACADEMIC SMART GOAL
            </h3>

            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <div style="font-size:0.95rem">
                    <div class="d-flex mb-2">
                      <div style="min-width:25px;font-weight:bold">1.</div>
                      <div><strong>Specific:</strong> What exactly do I want to achieve?<br/>(e.g., I want to improve my math grade.)</div>
                    </div>
                    <div class="d-flex mb-2">
                      <div style="min-width:25px;font-weight:bold">2.</div>
                      <div><strong>Measurable:</strong> How will I know when I’ve reached this goal?<br/>(e.g., I will raise my math grade by 10 points.)</div>
                    </div>
                    <div class="d-flex mb-2">
                      <div style="min-width:25px;font-weight:bold">3.</div>
                      <div><strong>Achievable:</strong> Can I realistically reach this goal?<br/>(e.g., Do I have the time and resources to work on my math?)</div>
                    </div>
                    <div class="d-flex mb-2">
                      <div style="min-width:25px;font-weight:bold">4.</div>
                      <div><strong>Relevant:</strong> Why is this goal important to me?<br/>(e.g., Improving my math grade will help me feel more confident.)</div>
                    </div>
                    <div class="d-flex mb-2">
                      <div style="min-width:25px;font-weight:bold">5.</div>
                      <div><strong>Time-bound:</strong> When do I want to achieve this goal by?<br/>(e.g., By the end of the semester.)</div>
                    </div>
                  </div>
                `,
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="flex justify-center mb-4">
        <img
          src={pointsImg}
          alt="Points"
          className="object-contain"
          style={{ maxHeight: "120px" }}
        />
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
          Create Your Academic S.M.A.R.T Goal
        </button>
      </div>
    </div>
  );
};

export default M2S4;
