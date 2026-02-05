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
          PERSONAL S.M.A.R.T GOALS
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
            A personal S.M.A.R.T. goal is like a roadmap to make your dreams happen! It’s a goal that's Specific (clearly says what you want), 
            Measurable (you can track it), Achievable (you can do it!), Relevant (it matters to you), and Time-bound (has a deadline). With a S.M.A.R.T. goal, 
            you're not just wishing for something—you’re setting yourself up to make it real!
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
                      <div><strong>Specific:</strong> What do you really want to achieve? Make sure it’s something you care about. </div>
                    </div>
                    <div class="d-flex mb-2">
                      <div style="min-width:25px;font-weight:bold">2.</div>
                      <div><strong>Measurable:</strong> Why is this goal important to you? Think about what motivates you.</div>
                    </div>
                    <div class="d-flex mb-2">
                      <div style="min-width:25px;font-weight:bold">3.</div>
                      <div><strong>Achievable:</strong> Do you have the tools, skills, or help you need to reach this goal? If not, how can you get them? </div>
                    </div>
                    <div class="d-flex mb-2">
                      <div style="min-width:25px;font-weight:bold">4.</div>
                      <div><strong>Relevant:</strong> What challenges might you face? Plan how you can overcome them. </div>
                    </div>
                    <div class="d-flex mb-2">
                      <div style="min-width:25px;font-weight:bold">5.</div>
                      <div><strong>Time-bound:</strong> How long will it take to reach your goal? Pick a realistic time frame></div>
                    </div>
                    <div class="d-flex mb-2">
                      <div style="min-width:25px;font-weight:bold">6.</div>
                      <div><strong>Time-bound:</strong> Will you have time to work on this goal along with everything else you’re doing? </div>
                    </div>
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
          Create Your Personal S.M.A.R.T Goal
        </button>
      </div>
    </div>
  );
};

export default M2S4;
