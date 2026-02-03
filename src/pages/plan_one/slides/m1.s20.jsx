import React from "react";

const M1S20 = ({ onContinue }) => {
  return (
    <div>
      <h2 className="text-center fw-bold mb-4 fs-4">
        NEXT STOP ON THE JOURNEY… MILESTONE 2
      </h2>

      <p className="text-center mb-4 fs-5">
        CONGRATS, NAME OF STUDENT! You've crushed this milestone and earned your
        LEEP points, bringing you one step closer to reaching your NorthStar
        goal! Keep that energy going – you’re on the path to greatness!
      </p>

      <button
        className="btn btn-success d-block mx-auto px-4"
        onClick={onContinue}
      >
        Continue
      </button>
    </div>
  );
};

export default M1S20;
