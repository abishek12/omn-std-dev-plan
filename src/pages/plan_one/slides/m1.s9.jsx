

const M1S9 = ({ onNext }) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-stretch">
      {/* Left Content */}
      <div className="md:w-7/12 w-full flex flex-col justify-center p-10">
        <h1
          className="font-bold mb-6 uppercase"
          style={{
            fontSize: "4rem",
            lineHeight: "1.1",
            color: "#4CAF50",
            fontFamily: "Arial, sans-serif",
          }}
        >
          TAKE
          <br />
          ACTION NOW
        </h1>

        <button
          onClick={onNext}
          style={{
            background: "#000",
            color: "#fff",
            borderRadius: "50px",
            padding: "15px 30px",
            fontSize: "1.3rem",
            fontWeight: "bold",
            letterSpacing: "2px",
            border: "none",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "fit-content",
            cursor: "pointer",
          }}
        >
          CLICK HERE
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-5/12 w-full p-0 flex">
        <img
          src="/slides/one/mil1.png"
          alt="Take action"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default M1S9;
