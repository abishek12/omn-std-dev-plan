

const M1S11 = ({ onNext }) => {
  return (
    <div className="w-full bg-white p-6">
      {/* Top Image */}
      <div className="flex justify-center mb-6">
        <div className="w-full md:w-1/2 p-4">
          <img
            src="/slides/one/point.png"
            alt="Milestone points"
            className="w-full object-contain"
            style={{ maxHeight: "30vh" }}
          />
        </div>
      </div>

      {/* Content Boxes */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Box */}
        <div className="lg:w-1/2 p-4 border border-blue-500 rounded-lg">
          <h3 className="text-blue-600 font-bold mb-3">
            MILESTONE 1: THE GOAL AND PURPOSE
          </h3>

          <p className="text-base leading-relaxed">
            Establish meaningful, achievable goals for 9th Grade that will
            assist me with current and future success.
          </p>
        </div>

        {/* Right Box */}
        <div className="lg:w-1/2 p-4 border border-blue-500 rounded-lg">
          <p className="text-base leading-relaxed">
            This month, we’re going to focus on setting your big “NorthStar
            Goal.” As you work toward your first milestone, you’ll create
            smaller goals to help you along the way. Here’s your first step to
            reaching that next milestone.
          </p>
        </div>
      </div>

      {/* Action Button */}
      <div className="text-center mt-8">
        <button
          onClick={onNext}
          className="bg-cyan-500 text-white font-bold px-6 py-2 rounded-full shadow"
        >
          CLICK TO MOVE FORWARD ON YOUR JOURNEY
        </button>
      </div>
    </div>
  );
};

export default M1S11;
