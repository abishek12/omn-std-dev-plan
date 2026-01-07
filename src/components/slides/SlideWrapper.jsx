const SlideWrapper = ({ children }) => {
  return (
    <div
      className={`h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center overflow-hidden`}
    >
      <div
        className={`
          w-full
          h-full
          rounded-2xl
          overflow-hidden
          bg-white/20
          backdrop-blur-xl
          border border-white/30
          shadow-2xl
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default SlideWrapper;
