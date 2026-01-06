import React, { useState, useEffect } from "react";
import {
  TrophyIcon,
  ChartBarIcon,
  BoltIcon,
  FireIcon,
  AcademicCapIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

const ProgressSummary = ({ roadmapItems, onReset, onFastForward }) => {
  const completedCount = roadmapItems.filter(
    (item) => item.status === "completed"
  ).length;
  const totalItems = roadmapItems.length;
  const completionPercentage = Math.round((completedCount / totalItems) * 100);

  const [streak, setStreak] = useState(3);
  const [averageTime, setAverageTime] = useState(2.5);
  const [nextMilestone, setNextMilestone] = useState(null);

  useEffect(() => {
    // Calculate next milestone
    const currentItem = roadmapItems.find((item) => item.status === "current");
    if (currentItem) {
      setNextMilestone(currentItem);
    }
  }, [roadmapItems]);

  const getMotivationalMessage = () => {
    if (completionPercentage >= 90) {
      return "Amazing progress! You're almost there! 🎯";
    } else if (completionPercentage >= 70) {
      return "Great work! You're making excellent progress! ⚡";
    } else if (completionPercentage >= 50) {
      return "You're halfway there! Keep up the momentum! 🔥";
    } else if (completionPercentage >= 30) {
      return "Good start! You're building a strong foundation! 🌱";
    } else {
      return "Every journey begins with a single step! 🚀";
    }
  };

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-6 max-w-4xl mx-auto border border-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="mb-6 md:mb-0 md:mr-8">
          <h3 className="text-2xl font-bold text-gray-800">
            Learning Progress Dashboard
          </h3>
          <p className="text-gray-600 mt-2">{getMotivationalMessage()}</p>
        </div>

        {/* Main Progress Circle */}
        <div className="relative w-40 h-40">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#e5e7eb"
              strokeWidth="8"
              fill="none"
            />
            {/* Progress circle with gradient */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="url(#progressGradient)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="283"
              strokeDashoffset={283 - (283 * completionPercentage) / 100}
              transform="rotate(-90 50 50)"
            />
            <defs>
              <linearGradient
                id="progressGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {completionPercentage}%
            </span>
            <span className="text-sm text-gray-600">Complete</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg mr-3">
              <AcademicCapIcon className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Completed</p>
              <p className="text-xl font-bold text-gray-800">
                {completedCount}
                <span className="text-gray-400 text-sm">/{totalItems}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg mr-3">
              <BoltIcon className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Learning Streak</p>
              <p className="text-xl font-bold text-gray-800">{streak} days</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-2 bg-amber-100 rounded-lg mr-3">
              <FireIcon className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Avg. Time/Step</p>
              <p className="text-xl font-bold text-gray-800">{averageTime}h</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg mr-3">
              <TrophyIcon className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Next Milestone</p>
              <p className="text-xl font-bold text-gray-800">
                Step {nextMilestone?.id || "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Next Step Preview */}
      {nextMilestone && (
        <div className="mb-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg mr-4">
                {nextMilestone.icon}
              </div>
              <div>
                <p className="text-sm font-medium text-blue-700">NEXT UP</p>
                <h4 className="text-lg font-bold text-gray-800">
                  {nextMilestone.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {nextMilestone.description}
                </p>
              </div>
            </div>
            <div className="flex items-center text-blue-600">
              <CalendarDaysIcon className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">
                {nextMilestone.estimatedTime}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Course Progress</span>
          <span>
            {completedCount} of {totalItems} steps
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-blue-500 via-green-500 to-emerald-500 h-3 rounded-full transition-all duration-700"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-1">
          {roadmapItems.map((item, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx <= completedCount ? "bg-green-500" : "bg-gray-300"
              }`}
              title={`Step ${item.id}: ${item.title}`}
            ></div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={onReset}
          className="px-5 py-2.5 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg font-medium hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-md flex items-center"
        >
          <ChartBarIcon className="h-5 w-5 mr-2" />
          Reset Progress
        </button>

        <button
          onClick={onFastForward}
          className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md flex items-center"
          disabled={completedCount >= totalItems}
        >
          <BoltIcon className="h-5 w-5 mr-2" />
          Complete Current Step
        </button>
      </div>
    </div>
  );
};

export default ProgressSummary;
