import m1_s2 from "../../../assets/slides/one/m1_s2.png";

const M1S2 = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        alignItems: "center",
      }}
    >
      {/* LEFT CONTENT */}
      <div
        style={{
          width: "45%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "32px",
          color: "#4a4a4a",
          fontSize: "1.1rem",
          lineHeight: "1.7",
        }}
      >
        <p>
          Welcome to LEEP’s 9th Grade Development Plans! Get ready for an awesome
          journey built just for you. We’ll give you the tools, skills, and a
          simple plan to help you reach your goals in school and in life.
        </p>

        <p style={{ marginTop: "16px" }}>
          This is your first step toward making your dreams real, and we’re here
          to help you the whole way. Let’s get started and make it happen!
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div
        style={{
          width: "55%",
          height: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={m1_s2}
          alt="Student Development Journey"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default M1S2;
