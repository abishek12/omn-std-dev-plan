import { useState } from "react";

const M1S15 = ({ onSubmit }) => {
  const [coreValue, setCoreValue] = useState("");

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit("core_value", coreValue);
    }
  };

  return (
    <div>
      <h3 className="text-center text-primary mb-3">
        SAMPLE CORE VALUE STATEMENT
      </h3>

      <p className="text-center mb-4 text-muted">
        “My personal values are honesty, kindness, and determination. I believe
        in always telling the truth, treating others with respect, and never
        giving up, even when things get tough. These values help me be the best
        version of myself and guide me toward my goals.” – QUEST
      </p>

      <h4 className="text-center text-success mb-3">
        MY PERSONAL CORE VALUE STATEMENT IS...
      </h4>

      <textarea
        className="form-control border-primary border-2 p-3 mb-4"
        rows={5}
        placeholder="Write your personal core value statement here..."
        value={coreValue}
        onChange={(e) => setCoreValue(e.target.value)}
      />

      <button
        className="btn btn-success d-block mx-auto px-4"
        onClick={handleSubmit}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default M1S15;
