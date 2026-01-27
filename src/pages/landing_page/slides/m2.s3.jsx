import pointsImg from "../../../assets/slides/one/twenty-point.png";

const M2S3 = () => {
  return (
    <div className="w-full bg-white p-6">
      {/* Content Boxes */}
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        {/* Left Box */}
        <div className="lg:w-1/2 p-4 border border-blue-500 rounded-lg">
          <h3 className="text-blue-600 font-bold mb-3">
            MILESTONE 2: THE GOAL AND PURPOSE
          </h3>

          <p className="text-base leading-relaxed">
            Get the skills to make your dreams come true! Learn how to turn big
            goals into easy steps so you can reach success one step at a time!
          </p>
        </div>

        {/* Right Box */}
        <div className="lg:w-1/2 p-4 border border-blue-500 rounded-lg">
          <p className="text-base leading-relaxed">
            This month, we’re focusing on how to reach your goals. Every big
            achievement starts with a plan, and we're going to show you how to
            make one with SMART goals. Get ready to build skills that will keep
            you on track and lead you straight to success!
          </p>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 p-4">
          <img
            src={pointsImg}
            alt="Milestone 2 Points"
            className="w-full object-contain"
            style={{ maxHeight: "30vh" }}
          />
        </div>
      </div>
    </div>
  );
};

export default M2S3;
