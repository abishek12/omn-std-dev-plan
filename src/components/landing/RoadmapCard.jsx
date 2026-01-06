import {
  LockClosedIcon,
  LockOpenIcon,
  CheckCircleIcon,
  ClockIcon,
  AcademicCapIcon,
  UserGroupIcon,
  BookOpenIcon,
  ChartBarIcon,
  PresentationChartLineIcon,
  TrophyIcon,
  LightBulbIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

const RoadmapCard = ({ item, index, totalItems, isEven, onComplete }) => {
  const iconMap = {
    AcademicCapIcon,
    UserGroupIcon,
    BookOpenIcon,
    ChartBarIcon,
    PresentationChartLineIcon,
    TrophyIcon,
    LightBulbIcon,
    CodeBracketIcon,
  };

  const getIconComponent = (iconName) => {
    const IconComponent = iconMap[iconName];
    if (IconComponent) {
      return <IconComponent className="h-6 w-6" />;
    }
    return null;
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case "current":
        return <LockOpenIcon className="h-5 w-5 text-blue-500" />;
      case "locked":
        return <LockClosedIcon className="h-5 w-5 text-gray-400" />;
      default:
        return null;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "current":
        return "In Progress";
      case "locked":
        return "Locked";
      default:
        return "";
    }
  };

  return (
    <div
      className={`relative flex flex-col md:flex-row ${
        isEven ? "md:flex-row-reverse" : ""
      } items-center`}
    >
      {/* Timeline Node */}
      <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-white shadow-lg">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center 
          ${
            item.status === "completed"
              ? "bg-green-500"
              : item.status === "current"
              ? "bg-blue-500"
              : "bg-gray-300"
          }`}
        >
          {getStatusIcon(item.status)}
        </div>
      </div>

      {/* Content Card */}
      <div
        className={`ml-20 md:ml-0 md:w-5/12 ${
          isEven ? "md:pr-12" : "md:pl-12"
        }`}
      >
        <div
          className={`rounded-2xl p-6 shadow-lg border-2 ${item.borderColor} ${
            item.bgColor
          } transition-all duration-300 hover:shadow-xl ${
            item.status === "locked" ? "opacity-80" : ""
          }`}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <div
                className={`p-3 rounded-xl bg-gradient-to-r ${item.color} mr-4`}
              >
                <div className="text-white">
                  {getIconComponent(item.iconName)}
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-sm font-medium px-2 py-1 rounded-full bg-white shadow mr-2">
                    Step {item.id}
                  </span>
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full ${
                      item.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : item.status === "current"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {getStatusText(item.status)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mt-2">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-6">{item.description}</p>

          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center">
              {item.status === "current" && (
                <button
                  onClick={() => onComplete(item.id)}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
                >
                  <CheckCircleIcon className="h-5 w-5 mr-2" />
                  Mark as Complete
                </button>
              )}

              {item.status === "completed" && (
                <div className="flex items-center text-green-600 font-medium">
                  <CheckCircleIcon className="h-5 w-5 mr-2" />
                  Completed on Jan 15
                </div>
              )}

              {item.status === "locked" && (
                <div className="flex items-center text-gray-500 font-medium">
                  <LockClosedIcon className="h-5 w-5 mr-2" />
                  Complete previous step to unlock
                </div>
              )}
            </div>

            <div className="mt-4 md:mt-0 flex items-center">
              <ClockIcon className="h-4 w-4 text-gray-400 mr-1" />
              <span className="text-gray-500 text-sm">
                {item.estimatedTime}
              </span>
            </div>
          </div>

          {/* Progress bar for current item */}
          {item.status === "current" && item.progress && (
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>{item.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoadmapCard;
