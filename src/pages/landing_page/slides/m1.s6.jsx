const M1S6 = ({ onNext }) => {
  return (
    <div className="w-full p-6">
      {/* Intro Heading */}
      <div
        className="text-white text-center p-4 rounded mb-6"
        style={{ background: "#0f9ed5" }}
      >
        <h2 className="text-lg font-medium">
          Your NorthStar Goal is the ULTIMATE GOAL you want to accomplish by the
          end of high school.
        </h2>
      </div>

      {/* Two Column Section */}
      <div className="flex flex-col md:flex-row mb-6">
        {/* Short Term */}
        <div className="md:w-1/2 md:pr-6 md:border-r-2 md:border-gray-400 mb-6 md:mb-0 text-center">
          <h3 className="text-xl font-bold mb-4">
            “Current Grade” NorthStar Goal{" "}
            <span style={{ color: "#27bcf2" }}>(Short-Term)</span>
          </h3>

          <p className="text-base leading-relaxed">
            This goal is all about staying on track and doing your best in your
            current grade. It focuses on your schoolwork, personal growth, and
            activities that will help you succeed this year.
          </p>
        </div>

        {/* Long Term */}
        <div className="md:w-1/2 md:pl-6 text-center">
          <h3 className="text-xl font-bold mb-4">
            “Graduation” NorthStar Goal{" "}
            <span style={{ color: "#95d155" }}>(Long-Term)</span>
          </h3>

          <p className="text-base leading-relaxed">
            This is your big dream for when you finish school. It’s the goal
            you're aiming for, with steps you take now and later to help you
            reach it and succeed.
          </p>
        </div>
      </div>

      {/* Supporting Paragraph */}
      <p className="mt-6 text-base leading-relaxed text-center">
        Once you set your goals, think about the steps that will help you get
        there. These steps could be going to a LEEP workshop, studying on your
        own, doing special projects, or completing assignments that help you
        grow.
      </p>

      {/* Action Button */}
      <div className="text-center mt-4">
        <button
          onClick={onNext}
          className="font-semibold px-6 py-2"
          style={{
            color: "#01b0f0",
            fontSize: "1.3rem",
          }}
        >
          CLICK TO MOVE FORWARD ON YOUR JOURNEY
        </button>
      </div>
    </div>
  );
};

export default M1S6;
