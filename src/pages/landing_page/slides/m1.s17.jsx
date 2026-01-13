import React from "react";

const M1S17 = ({ submitCoreValueStatement }) => {
  return (
    <div>
      {/* Title */}
      <h2 className="text-center text-primary mb-3">
        SAMPLE PERSONAL MISSION STATEMENT
      </h2>

      {/* Sample statement */}
      <p className="text-center mb-4 text-muted">
        "My mission is to always be true to myself, stay curious, and be kind
        to others. I want to keep learning, follow my passions, and use my
        strengths to make a difference in the world, no matter how big or
        small. - QUEST
      </p>

      {/* User input */}
      <h3 className="text-center text-success mb-3">
        MY PERSONAL MISSION STATEMENT IS...
      </h3>
      <textarea
        className="form-control border-primary border-2 p-3 mb-4"
        rows={5}
        placeholder="Write your personal mission statement here..."
        id="mission_statement"
      ></textarea>

      {/* Submit button */}
      <button
        className="btn btn-success d-block mx-auto px-4"
        onClick={() => submitCoreValueStatement("mission_statement")}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default M1S17;
