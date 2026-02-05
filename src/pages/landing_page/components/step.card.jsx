import { Clock, Lock, Play, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StepCard = ({ step }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    step.status === "locked" ? null : navigate(`/roadmap/${step.id}`);
  };
  return (
    <div
      className="rounded-xl border border-blue-200 bg-white p-6 space-y-4 hover:cursor-pointer hover:shadow-cyan-50 transition-shadow duration-300"
      onClick={() => handleCardClick()}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-blue-300 text-blue-500">
            🎓
          </div>

          <div>
            <span
              className={`inline-block rounded-md px-3 py-1 text-xs font-semibold
                ${step.status === "completed" && "bg-green-100 text-green-600"}
                ${step.status === "in_progress" && "bg-blue-100 text-blue-600"}
                ${step.status === "locked" && "bg-gray-200 text-gray-500"}
              `}
            >
              Step {step.id}
            </span>

            <h3 className="mt-1 text-lg font-semibold text-gray-800">
              {step.title}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Clock size={14} />
          {step.duration}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm">{step.description}</p>

      {/* Completed */}
      {step.status === "completed" && (
        <>
          <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
            <Check size={16} />
            COMPLETED{" "}
            <span className="text-gray-400">on {step.completedAt}</span>
          </div>

          <button className="w-fit rounded-lg bg-gradient-to-r from-blue-500 to-green-500 px-4 py-2 text-white font-medium">
            View the Course
          </button>
        </>
      )}

      {/* In progress */}
      {step.status === "in_progress" && (
        <>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 rounded-md bg-blue-50 px-3 py-1 text-blue-600 text-sm font-medium">
              <Play size={14} />
              IN PROGRESS
            </span>

            <div className="flex-1 h-2 rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-green-500"
                style={{ width: `${step.progress}%` }}
              />
            </div>

            <span className="text-sm text-gray-500">{step.progress}%</span>
          </div>

          <div className="flex gap-3">
            <button className="rounded-lg bg-blue-500 px-4 py-2 text-white text-sm font-medium">
              Continue Course
            </button>
            <button className="rounded-lg border border-green-500 px-4 py-2 text-green-600 text-sm font-medium">
              ✓ Mark as Complete
            </button>
          </div>
        </>
      )}

      {/* Locked */}
      {step.status === "locked" && (
        <>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Lock size={14} />
            Complete Previous Step to Unlock
          </div>

          <button
            disabled
            className="flex items-center gap-2 rounded-lg bg-gray-300 px-4 py-2 text-gray-600 text-sm font-medium cursor-not-allowed"
          >
            <Lock size={14} />
            Locked
          </button>
        </>
      )}
    </div>
  );
};

export default StepCard;
