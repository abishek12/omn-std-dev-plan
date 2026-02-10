

const M1S12 = ({ goToSlide }) => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      {/* Left Image */}
      <div className="md:w-5/12 w-full p-0 flex">
        <img
          src="/slides/one/mil1.png"
          alt="Milestone 1"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div
        className="md:w-7/12 w-full p-6 flex flex-col justify-center"
        style={{ backgroundColor: "#07a0e3" }}
      >
        <button
          onClick={() => goToSlide(13)}
          className="bg-white w-full text-left px-4 py-3 mb-4 rounded text-base font-medium"
        >
          Create a Personal{" "}
          <span style={{ color: "#4CAF50" }}>Core Value</span> Statement
        </button>

        <button
          onClick={() => goToSlide(15)}
          className="bg-white w-full text-left px-4 py-3 rounded text-base font-medium"
        >
          Create a Personal{" "}
          <span style={{ color: "#4CAF50" }}>Mission</span> Statement
        </button>
      </div>
    </div>
  );
};

export default M1S12;
