const M1S10 = ({ onNext }) => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center text-center p-10 relative"
      style={{ minHeight: "100vh", backgroundColor: "#fff" }}
    >
      {/* Main Heading */}
      <h1
        className="font-bold mb-6 uppercase"
        style={{ color: "#4CAF50", fontSize: "3rem" }}
      >
        WELCOME TO
        <br />
        MILESTONE 1
      </h1>

      {/* Sub Heading */}
      <h2 className="font-bold mb-6 text-2xl">
        Congrats on taking the{" "}
        <span className="font-bold">
          LE<span style={{ color: "#92d050" }}>E</span>P’s
        </span>
        <br />
        & starting your awesome journey.
      </h2>

      {/* Paragraph */}
      <p className="font-semibold text-xl mb-6">
        This is just the beginning of something great!
      </p>

      {/* Action Button */}
      <button
        onClick={onNext}
        className="font-bold underline"
        style={{
          color: "#01b0f0",
          fontSize: "1.2rem",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        CLICK TO MOVE FORWARD ON YOUR JOURNEY
      </button>

      {/* Decorative Images */}
      <img
        src="/slides/one/lightbulb.jpg"
        alt="Lightbulb"
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          width: "100px",
        }}
      />

      <img
        src="/slides/one/sun.jpg"
        alt="Sun"
        style={{
          position: "absolute",
          bottom: "80px",
          left: "40px",
          width: "100px",
        }}
      />

      <img
        src="/slides/one/globe.jpg"
        alt="Globe"
        style={{
          position: "absolute",
          bottom: "40px",
          right: "40px",
          width: "100px",
        }}
      />

    </div>
  );
};

export default M1S10;
