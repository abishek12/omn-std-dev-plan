const M1S7 = ({ onNext }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center p-8">
      {/* Heading */}
      <div
        className="text-white text-center p-4 rounded mb-8 font-bold"
        style={{ background: "#92d050", fontSize: "1.5rem" }}
      >
        CONSIDER THE FOLLOWING QUESTIONS TO ASK YOURSELF ON THIS JOURNEY
      </div>

      {/* Questions Grid */}
      <div className="w-full max-w-6xl">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row border-b border-green-500">
          <div className="md:w-1/3 p-4 text-center md:border-r border-green-500">
            <p className="text-base leading-relaxed">
              How will this goal help me reach my big goal for this grade and my
              future?
            </p>
          </div>

          <div className="md:w-1/3 p-4 text-center md:border-r border-green-500">
            <p className="text-base leading-relaxed">
              What worked well and what could I improve on?
            </p>
          </div>

          <div className="md:w-1/3 p-4 text-center">
            <p className="text-base leading-relaxed">
              What challenges could I face trying to achieve this milestone goal
              and how can I overcome them?
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 p-4 text-center md:border-r border-green-500">
            <p className="text-base leading-relaxed">
              How do I plan to track my progress during this milestone?
            </p>
          </div>

          <div className="md:w-1/3 p-4 text-center md:border-r border-green-500">
            <p className="text-base leading-relaxed">
              What tasks do I need to finish? Do I have a clear plan and timeline
              to reach my goals?
            </p>
          </div>

          <div className="md:w-1/3 p-4 text-center">
            <p className="text-base leading-relaxed">
              Who can give me helpful advice, and how do I use that advice to
              improve?
            </p>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-6">
        <button
          onClick={onNext}
          className="font-semibold"
          style={{ color: "#92d050", fontSize: "1.3rem" }}
        >
          CLICK TO MOVE FORWARD ON YOUR JOURNEY
        </button>
      </div>
    </div>
  );
};

export default M1S7;
