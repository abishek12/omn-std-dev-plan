import mil1Img from "../../../assets/slides/one/mil1.png";

const M2S2 = ({ goToSlide }) => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      {/* Left Content */}
      <div
        className="md:w-7/12 w-full p-6 flex flex-col justify-center"
        style={{ backgroundColor: "#07a0e3" }}
      >
        <button
          onClick={() => goToSlide(13)}
          className="bg-white w-full text-left px-4 py-3 mb-4 rounded text-base font-medium"
        >
          Create Your{" "}
          <span style={{ color: "#4CAF50" }}>Academic Smart</span>{" "}
          Goal
        </button>

        <button
          onClick={() => goToSlide(15)}
          className="bg-white w-full text-left px-4 py-3 rounded text-base font-medium"
        >
          Create Your{" "}
          <span style={{ color: "#4CAF50" }}>Personal Smart</span>{" "}
          Goal
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-5/12 w-full p-0 flex">
        <img
          src={mil1Img}
          alt="Milestone 2"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default M2S2;
