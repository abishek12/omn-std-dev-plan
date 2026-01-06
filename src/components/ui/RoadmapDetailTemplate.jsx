import { Link, useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeftIcon,
  ClockIcon,
  BookOpenIcon,
  DocumentTextIcon,
  VideoCameraIcon,
  CheckCircleIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

const RoadmapDetailTemplate = ({
  title,
  description,
  detailedContent,
  estimatedTime,
  prerequisites = [],
  resources = [],
  actions = [],
  nextStepId,
  prevStepId,
  icon,
  color,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const stepNumber = parseInt(id);

  const handleNext = () => {
    if (nextStepId) {
      navigate(`/roadmap/${nextStepId}`);
    }
  };

  const handlePrev = () => {
    if (prevStepId) {
      navigate(`/roadmap/${prevStepId}`);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header with gradient */}
      <div className={`bg-gradient-to-r ${color} p-8 text-white`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm mr-4">
              {icon}
            </div>
            <div>
              <div className="flex items-center mb-2">
                <span className="px-3 py-1 bg-white/30 rounded-full text-sm font-medium">
                  Step {stepNumber}
                </span>
              </div>
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="text-white/90 mt-2 max-w-3xl">{description}</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-center">
              <ClockIcon className="h-6 w-6 mx-auto mb-1" />
              <span className="text-sm font-medium">{estimatedTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="prose prose-lg max-w-none">{detailedContent}</div>

          {/* Resources Section */}
          {resources.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <BookOpenIcon className="h-5 w-5 mr-2 text-blue-500" />
                Learning Resources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resources.map((resource, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-center mb-2">
                      {resource.type === "video" && (
                        <VideoCameraIcon className="h-5 w-5 text-red-500 mr-2" />
                      )}
                      {resource.type === "document" && (
                        <DocumentTextIcon className="h-5 w-5 text-green-500 mr-2" />
                      )}
                      <h4 className="font-bold text-gray-800">
                        {resource.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      {resource.description}
                    </p>
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Access Resource →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions Section */}
          {actions.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <CheckCircleIcon className="h-5 w-5 mr-2 text-green-500" />
                Required Actions
              </h3>
              <div className="space-y-4">
                {actions.map((action, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <span className="text-green-600 font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">
                        {action.title}
                      </h4>
                      <p className="text-gray-600">{action.description}</p>
                      {action.deadline && (
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <CalendarDaysIcon className="h-4 w-4 mr-1" />
                          Deadline: {action.deadline}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-xl p-6 sticky top-8">
            {/* Prerequisites */}
            {prerequisites.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Prerequisites
                </h3>
                <ul className="space-y-2">
                  {prerequisites.map((prereq, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                      {prereq}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Estimated Time */}
            <div className="mb-8 p-4 bg-white rounded-lg border border-gray-200">
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 text-blue-500 mr-3" />
                <div>
                  <h4 className="font-bold text-gray-800">Estimated Time</h4>
                  <p className="text-gray-600">{estimatedTime}</p>
                </div>
              </div>
            </div>

            {/* Progress Tracking */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Your Progress
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Step Completion</span>
                    <span>60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
                  Mark as Complete
                </button>
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-gray-800">Navigation</h3>

              {prevStepId && (
                <button
                  onClick={handlePrev}
                  className="w-full flex items-center justify-center border-2 border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  <ArrowLeftIcon className="h-4 w-4 mr-2" />
                  Previous Step
                </button>
              )}

              {nextStepId && (
                <button
                  onClick={handleNext}
                  className="w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                >
                  Next Step
                  <ArrowLeftIcon className="h-4 w-4 ml-2 rotate-180" />
                </button>
              )}

              <Link
                to="/"
                className="block text-center border-2 border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Back to Roadmap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapDetailTemplate;
