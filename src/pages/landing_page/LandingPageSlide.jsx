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

import M1S1 from "./slides/m1.s1";
import M1S2 from "./slides/m1.s2";
import M1S3 from "./slides/m1.s3";
import SlideWrapper from "../../components/slides/SlideWrapper";

const LandingPageSlide = () => {
  const { id: stepId, slideNumber = 1 } = useParams();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(parseInt(slideNumber) || 1);
  const [completedSlides, setCompletedSlides] = useState([]);

  // Slide configuration for each step
  const slideConfig = {
    1: {
      title: "Getting Started",
      totalSlides: 3,
      components: [M1S1, M1S2, M1S3],
      color: "from-blue-600 to-indigo-700",
    },
    2: {
      title: "Course Orientation",
      totalSlides: 5,
      components: [],
      color: "from-green-600 to-emerald-700",
    },
    // ... add configurations for other steps
  };

  const config = slideConfig[stepId] || slideConfig[1];
  const totalSlides = config.totalSlides;
  const CurrentSlideComponent = config.components[currentSlide - 1] || M1S1;

  useEffect(() => {
    // Update URL when slide changes
    navigate(`/roadmap/${stepId}/slides/${currentSlide}`, { replace: true });
  }, [currentSlide, stepId, navigate]);

  const handleNext = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide((prev) => prev + 1);
    } else {
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
  };

  const handleCompleteStep = () => {
    // In a real app, this would update progress in backend
    alert(`Congratulations! You've completed Step ${stepId}: ${config.title}`);
    navigate(`/roadmap/${stepId}`);
  };

  return (
    <Layout>
      <SlideWrapper color={config.color}>
        <CurrentSlideComponent
          onNext={handleNext}
          onPrev={handlePrev}
          onComplete={handleCompleteSlide}
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          stepId={stepId}
          stepTitle={config.title}
          config={config}
        />
      </SlideWrapper>
    </Layout>
  );
};

export default LandingPageSlide;
