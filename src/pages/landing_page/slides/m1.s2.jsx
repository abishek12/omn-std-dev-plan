import m1_s2 from "../../../assets/slides/one/m1_s2.png";

const M1S2 = ({ onNext }) => {
  return (
    <div className="flex w-full h-full">
      {/* LEFT CONTENT (Scrollable) */}
      <div className="w-1/2 px-12 py-10 overflow-y-auto">
        {/* Example extra content to demonstrate scrolling */}
        <div className="mt-16 space-y-6 text-gray-700">
          <p>
            This journey is designed to guide students through structured
            academic, personal, and career development milestones.
          </p>
          <p>
            Each module builds on the previous one, helping students gain
            clarity, confidence, and direction.
          </p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-1/2 relative">
        <div className="absolute inset-0 clip-diagonal">
          <img
            src={m1_s2}
            alt="Student Development Journey"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default M1S2;
