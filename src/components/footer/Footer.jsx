const Footer = () => {
  return (
    <>
      <div className="mt-16 p-6 bg-gradient-to-r from-white to-blue-50 rounded-2xl border border-blue-100 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Need Help?</h4>
            <p className="text-gray-600">
              Contact your instructor or teaching assistant if you're stuck on
              any step.
            </p>
          </div>
          <button className="mt-4 md:mt-0 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md">
            Get Support
          </button>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>
          Designed for students and teachers • Complete each step in sequence to
          progress
        </p>
      </div>
    </>
  );
};

export default Footer;
