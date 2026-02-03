import m1_s1 from "../../../assets/slides/one/m1_s1.png";

const M1S1 = ({ onNext }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
      }}
    >
      {/* LEFT IMAGE */}
      <div
        style={{
          width: "60%",
          height: "80%",
        }}
      >
        <img
          src={m1_s1}
          alt="Student Development Journey"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div
        style={{
          width: "60%",
          height: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "32px",
        }}
      >
        <h1
          style={{
            color: "#00b0f0",
            fontWeight: "700",
            fontSize: "2rem",
            lineHeight: "1.3",
            marginBottom: "16px",
          }}
        >
          LEEP 9<sup>th</sup> GRADE STUDENT DEVELOPMENT PLAN
        </h1>

        <button
          onClick={onNext}
          style={{
            background: "none",
            border: "none",
            color: "#92d050",
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "left",
            padding: 0,
            cursor: "pointer",
          }}
        >
          CLICK HERE TO ENTER THE JOURNEY
        </button>
      </div>
    </div>
  );
};

export default M1S1;
