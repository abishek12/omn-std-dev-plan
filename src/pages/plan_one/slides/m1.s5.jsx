import m1_s2 from "../../../assets/slides/one/m1_s3.png";

const M1S5 = () => {
  return (
    <div className="flex w-full h-full">
      {/* LEFT CONTENT (Scrollable) */}
      <div className="w-1/2 px-12 py-10 overflow-y-auto">
        {/* Example extra content to demonstrate scrolling */}
        <div className="mt-16 space-y-6 text-gray-700">
          <p>
           The development process starts with you! You know your interests, skills, and goals best.   
          </p>
          <p>
            By understanding what's important to you, you can take control of your future and choose options that fit your priorities.
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

export default M1S5;
