const RoadmapHeader = () => {
  return (
    <div className="text-center mb-10 md:mb-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        LEEP: Student Development Plan
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        Follow this sequential plan to master the course material. Complete each
        step to unlock the next one.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
          <span className="text-sm text-gray-600">Completed</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
          <span className="text-sm text-gray-600">In Progress</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-gray-300 mr-2"></div>
          <span className="text-sm text-gray-600">Locked</span>
        </div>
      </div>
    </div>
  );
};

export default RoadmapHeader;
