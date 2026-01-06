import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  BookOpenIcon,
  VideoCameraIcon,
  QuestionMarkCircleIcon,
  ClipboardDocumentCheckIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

import Layout from "../../Layout";

const LandingPageSlide = () => {
  const { id, slideNumber = 1 } = useParams();
  const stepId = parseInt(id);
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(parseInt(slideNumber) || 1);
  const [completedSlides, setCompletedSlides] = useState([]);

  const slideContent = {
    1: [
      {
        id: 1,
        title: "Welcome to the Course",
        content:
          "Welcome to your learning journey! In this step, you'll get familiar with the platform and understand how to make the most of your learning experience.",
        type: "welcome",
        icon: <AcademicCapIcon className="h-8 w-8" />,
        color: "from-blue-500 to-cyan-400",
        duration: "5 min",
        action: "Watch the welcome video",
        quiz: null,
      },
      {
        id: 2,
        title: "Platform Navigation",
        content:
          "Learn how to navigate through the platform, access your materials, submit assignments, and track your progress.",
        type: "tutorial",
        icon: <BookOpenIcon className="h-8 w-8" />,
        color: "from-green-500 to-emerald-400",
        duration: "10 min",
        action: "Explore the dashboard",
        quiz: {
          question: "Where can you find your assignment submissions?",
          options: ["Dashboard", "Profile", "Settings", "Help Center"],
          correct: 0,
        },
      },
      {
        id: 3,
        title: "Course Expectations",
        content:
          "Understand what's expected of you, the grading criteria, and how to succeed in this course.",
        type: "info",
        icon: <LightBulbIcon className="h-8 w-8" />,
        color: "from-purple-500 to-violet-400",
        duration: "8 min",
        action: "Review syllabus",
        quiz: null,
      },
      {
        id: 4,
        title: "Technical Requirements",
        content:
          "Ensure your system meets the technical requirements and learn about the tools you'll be using.",
        type: "technical",
        icon: <VideoCameraIcon className="h-8 w-8" />,
        color: "from-amber-500 to-yellow-400",
        duration: "7 min",
        action: "Check system requirements",
        quiz: {
          question: "Which browser is recommended for this platform?",
          options: ["Chrome/Firefox", "Safari", "Edge", "All work fine"],
          correct: 0,
        },
      },
      {
        id: 5,
        title: "Getting Help",
        content:
          "Learn where to find help when you need it - from instructors, TAs, and the community forum.",
        type: "support",
        icon: <QuestionMarkCircleIcon className="h-8 w-8" />,
        color: "from-pink-500 to-rose-400",
        duration: "6 min",
        action: "Join community forum",
        quiz: {
          question: "What's the best way to ask technical questions?",
          options: [
            "Community Forum",
            "Email",
            "Direct Message",
            "All of the above",
          ],
          correct: 3,
        },
      },
    ],
    2: [
      // Similar structure for step 2 slides
    ],
    // Add data for other steps...
  };

  const stepTitles = {
    1: "Getting Started",
    2: "Course Orientation",
    3: "Fundamentals Review",
    4: "Core Concepts",
    5: "Practice Exercises",
    6: "Coding Projects",
    7: "Group Collaboration",
    8: "Final Assessment",
    9: "Course Completion",
  };

  const currentStepContent = slideContent[stepId] || slideContent[1];
  const totalSlides = currentStepContent.length;
  const slide = currentStepContent[currentSlide - 1];

  useEffect(() => {
    // Update URL when slide changes
    navigate(`/roadmap/${stepId}/slides/${currentSlide}`, { replace: true });
  }, [currentSlide, stepId, navigate]);

  const handleNext = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      // Complete the step and go back to roadmap
      handleCompleteStep();
    }
  };

  const handlePrev = () => {
    if (currentSlide > 1) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleCompleteSlide = () => {
    if (!completedSlides.includes(currentSlide)) {
      setCompletedSlides([...completedSlides, currentSlide]);
    }
    handleNext();
  };

  const handleCompleteStep = () => {
    // In a real app, this would update progress in backend
    alert(
      `Congratulations! You've completed Step ${stepId}: ${stepTitles[stepId]}`
    );
    navigate(`/roadmap/${stepId}`);
  };

  const handleExit = () => {
    navigate(`/roadmap`);
  };

  const getSlideTypeColor = (type) => {
    const colors = {
      welcome: "bg-blue-100 text-blue-800",
      tutorial: "bg-green-100 text-green-800",
      info: "bg-purple-100 text-purple-800",
      technical: "bg-amber-100 text-amber-800",
      support: "bg-pink-100 text-pink-800",
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 py-4">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button
                  onClick={handleExit}
                  className="flex items-center text-gray-600 hover:text-gray-800 mr-4"
                >
                  <XMarkIcon className="h-5 w-5 mr-1" />
                  Exit
                </button>
                <div>
                  <h1 className="text-xl font-bold text-gray-800">
                    Step {stepId}: {stepTitles[stepId]}
                  </h1>
                  <p className="text-gray-600 text-sm">
                    Slide {currentSlide} of {totalSlides}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => navigate(`/roadmap/${stepId}`)}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Details
                </button>
                <div className="flex items-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{
                        width: `${(currentSlide / totalSlides) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">
                    {Math.round((currentSlide / totalSlides) * 100)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gradient-to-br from-gray-50 to-blue-50 py-8">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Slide Header */}
              <div className={`bg-gradient-to-r ${slide.color} p-8 text-white`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm mr-4">
                      {slide.icon}
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getSlideTypeColor(
                            slide.type
                          )}`}
                        >
                          {slide.type.charAt(0).toUpperCase() +
                            slide.type.slice(1)}
                        </span>
                        <span className="ml-3 px-3 py-1 bg-white/30 rounded-full text-sm font-medium">
                          {slide.duration}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold">
                        {slide.title}
                      </h2>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-lg font-medium">
                      Slide {currentSlide}
                    </div>
                    <div className="text-white/80 text-sm">
                      of {totalSlides}
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide Content */}
              <div className="p-8">
                <div className="prose prose-lg max-w-none mb-8">
                  <div className="text-lg text-gray-700 leading-relaxed">
                    {slide.content}
                  </div>
                </div>

                {/* Action Card */}
                <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
                  <div className="flex items-center mb-4">
                    <ClipboardDocumentCheckIcon className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">
                      Your Task
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">{slide.action}</p>
                  <button className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md">
                    Complete Task
                  </button>
                </div>

                {/* Quiz Section (if available) */}
                {slide.quiz && (
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-8 border border-purple-100">
                    <div className="flex items-center mb-6">
                      <QuestionMarkCircleIcon className="h-6 w-6 text-purple-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-800">
                        Quick Check
                      </h3>
                    </div>

                    <p className="text-lg font-medium text-gray-800 mb-4">
                      {slide.quiz.question}
                    </p>

                    <div className="space-y-3">
                      {slide.quiz.options.map((option, index) => (
                        <div
                          key={index}
                          className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 cursor-pointer transition-colors"
                        >
                          <div className="w-6 h-6 rounded-full border-2 border-gray-300 mr-3 flex items-center justify-center">
                            {String.fromCharCode(65 + index)}
                          </div>
                          <span className="text-gray-700">{option}</span>
                        </div>
                      ))}
                    </div>

                    <button className="mt-6 px-5 py-2.5 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-md">
                      Submit Answer
                    </button>
                  </div>
                )}
              </div>

              {/* Navigation Footer */}
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <div className="flex items-center mb-4 sm:mb-0">
                    {completedSlides.includes(currentSlide) ? (
                      <div className="flex items-center text-green-600 font-medium">
                        <CheckCircleIcon className="h-5 w-5 mr-2" />
                        Slide Completed
                      </div>
                    ) : (
                      <button
                        onClick={handleCompleteSlide}
                        className="px-5 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-md flex items-center"
                      >
                        <CheckCircleIcon className="h-5 w-5 mr-2" />
                        Mark as Complete
                      </button>
                    )}
                  </div>

                  <div className="flex items-center space-x-4">
                    <button
                      onClick={handlePrev}
                      disabled={currentSlide === 1}
                      className={`px-5 py-2.5 rounded-lg font-medium flex items-center ${
                        currentSlide === 1
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <ChevronLeftIcon className="h-5 w-5 mr-2" />
                      Previous
                    </button>

                    {currentSlide < totalSlides ? (
                      <button
                        onClick={handleNext}
                        className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md flex items-center"
                      >
                        Next Slide
                        <ChevronRightIcon className="h-5 w-5 ml-2" />
                      </button>
                    ) : (
                      <button
                        onClick={handleCompleteStep}
                        className="px-5 py-2.5 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-md flex items-center"
                      >
                        Complete Step
                        <CheckCircleIcon className="h-5 w-5 ml-2" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Slide Progress Dots */}
            <div className="mt-8">
              <div className="flex justify-center space-x-2">
                {currentStepContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index + 1)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index + 1 === currentSlide
                        ? "bg-blue-600 scale-125"
                        : completedSlides.includes(index + 1)
                        ? "bg-green-500"
                        : "bg-gray-300"
                    }`}
                    title={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <div className="text-center text-sm text-gray-600 mt-2">
                Click on dots to jump between slides
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LandingPageSlide;
