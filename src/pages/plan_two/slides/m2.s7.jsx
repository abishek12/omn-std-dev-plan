import lightbulbImg from "../../../assets/slides/one/lightbulb.jpg";
import sunImg from "../../../assets/slides/one/sun.jpg";
import globeImg from "../../../assets/slides/one/globe.jpg";

const M2S7 = () => {
  return (
    <div className="position-relative bg-white p-4">

      {/* Heading */}
      <h3
        className="mb-4"
        style={{
          color: "#3FAE2A",
          fontWeight: "700",
          fontSize: "24px",
          fontFamily: "'Acme', sans-serif",
          textAlign: "left",
          marginLeft: "400px",
        }}
      >
        S.M.A.R.T STANDS FOR
      </h3>

      {/* SMART Points */}
      {[
        "Specific: Improve my math grade",
        "Measurable: From a B to an A.",
        "Achievable: Daily practice is a realistic goal.",
        "Relevant: Improving my math grade.",
        "Time-bound: By the end of the semester.",
      ].map((text, index) => (
        <p
          key={index}
          className={index === 4 ? "mb-4" : "mb-2"}
          style={{
            fontSize: "18px",
            fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif",
            fontWeight: "700",
            textAlign: "left",
            marginLeft: "400px",
            maxWidth: "1000px",
          }}
        >
          <span style={{ color: "#0099FF" }}>
            {text.charAt(0)}
          </span>
          {text.slice(1)}
        </p>
      ))}

      {/* Second Heading */}
      <h4
        className="text-center mb-3"
        style={{
          color: "#3FAE2A",
          fontWeight: "700",
          fontSize: "22px",
          fontFamily: "'Acme', sans-serif",
        }}
      >
        MY ACADEMIC S.M.A.R.T GOAL IS.
      </h4>

      {/* Decorative Images */}
      <img
        src={lightbulbImg}
        alt="Lightbulb"
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          width: "100px",
        }}
      />

      <img
        src={sunImg}
        alt="Sun"
        style={{
          position: "absolute",
          top: "150px",
          left: "20px",
          width: "100px",
        }}
      />

      <img
        src={globeImg}
        alt="Globe"
        style={{
          position: "absolute",
          top: "40px",
          right: "40px",
          width: "100px",
        }}
      />

      {/* Textarea */}
      <div className="d-flex justify-content-center">
        <textarea
          className="form-control border-primary border-2 p-3 mb-4"
          placeholder="Write your personal core value statement here..."
          style={{
            fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif",
            fontSize: "16px",
            width: "95%",
            maxWidth: "1600px",
            height: "180px",
            resize: "none",
          }}
        />
      </div>

      {/* Submit Button */}
      <button
        className="d-block mx-auto px-5 py-2"
        style={{
          backgroundColor: "#0099FF",
          color: "white",
          fontWeight: "600",
          borderRadius: "30px",
          border: "none",
          fontSize: "18px",
        }}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default M2S7;
