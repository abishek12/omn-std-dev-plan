import leepImg from "/slides/one/leep.png";

const M1S8 = () => {
  return (
    <div className="w-full">
      <img
        src={leepImg}
        alt="LEEP"
        className="w-full block object-cover"
        style={{
          maxHeight: "60vh",
          height: "auto",
        }}
      />
    </div>
  );
};

export default M1S8;
