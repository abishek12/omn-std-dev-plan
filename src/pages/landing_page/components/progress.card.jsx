import { RefreshCcw, Clock, Play } from "lucide-react";

const ProgressCard = () => {
  const overallProgress = 10; // %
  const stepProgress = 60; // %

  return (
    <div className="w-full max-w-6xl mx-auto rounded-2xl border border-blue-300 bg-white p-8 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Circular Progress */}
          <div className="relative w-20 h-20">
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke="#e5e7eb"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke="#7AC142"
                strokeWidth="8"
                fill="none"
                strokeDasharray="226"
                strokeDashoffset={226 - (226 * overallProgress) / 100}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-gray-700">
              {overallProgress}%
            </span>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Your current Progress (1/9)
            </h2>
            <p className="text-gray-500">
              Every journey begins with a single step.
            </p>
          </div>
        </div>
        <button className="flex items-center gap-2 rounded-lg border px-4 py-2 text-gray-600 hover:bg-gray-100">
          <RefreshCcw size={16} />
          Reset Progress
        </button>
      </div>
      <hr className="my-8" />
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="inline-block rounded-md bg-blue-500 px-3 py-1 text-sm text-white">
              Step 2
            </span>
            <h3 className="mt-2 text-2xl font-semibold text-gray-800">
              Find My Why
            </h3>
          </div>

          <div className="flex items-center gap-2 text-gray-500">
            <Clock size={16} />
            <span>2 hours</span>
          </div>
        </div>
        {/* Status */}
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 text-blue-600 font-medium">
            <Play size={16} />
            IN PROGRESS
          </span>

          {/* Progress Bar */}
          <div className="flex-1 flex items-center gap-4">
            <div className="relative h-3 w-full rounded-full bg-gray-200">
              <div
                className="absolute left-0 top-0 h-3 rounded-full bg-green-500"
                style={{ width: `${stepProgress}%` }}
              />
            </div>
            <span className="text-gray-500 font-medium">{stepProgress}%</span>
          </div>
        </div>
        {/* Actions */}
        <div className="flex gap-4">
          <button className="rounded-xl bg-gradient-to-r from-blue-500 to-green-500 px-6 py-3 text-white font-semibold hover:opacity-90">
            Continue with the course
          </button>

          <button className="rounded-xl border border-green-500 px-6 py-3 font-semibold text-green-600 hover:bg-green-50">
            ✓ Mark as Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
