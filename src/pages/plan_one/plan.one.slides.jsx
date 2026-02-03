import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Layout from "../../Layout";

import M1S1 from "./slides/m1.s1";
import M1S2 from "./slides/m1.s2";
import M1S5 from "./slides/m1.s5";
import M1S6 from "./slides/m1.s6";
import M1S7 from "./slides/m1.s7";
import M1S8 from "./slides/m1.s8";
import M1S9 from "./slides/m1.s9";
import M1S10 from "./slides/m1.s10";
import M1S11 from "./slides/m1.s11";
import M1S12 from "./slides/m1.s12";
import M1S13 from "./slides/m1.s13";
import M1S14 from "./slides/m1.s14";
import M1S15 from "./slides/m1.s15";
import M1S16 from "./slides/m1.s16";
import M1S17 from "./slides/m1.s17";
import M1S18 from "./slides/m1.s18";
import M1S19 from "./slides/m1.s19";
import M1S20 from "./slides/m1.s20";
import M2S1 from "./slides/m2.s1";
import M2S2 from "./slides/m2.s2";
import M2S3 from "./slides/m2.s3";
import M2S4 from "./slides/m2.s4";
import M2S5 from "./slides/m2.s5";
import M2S6 from "./slides/m2.s6";
import M2S7 from "./slides/m2.s7";
import M2S8 from "./slides/m2.s8";
import M2S9 from "./slides/m2.s9";
import M2S10 from "./slides/m2.s10";
import M2S11 from "./slides/m2.s11";

import SlideWrapper from "../../components/slides/SlideWrapper";

const LandingPageSlide = () => {
  const { id: stepId, slideNumber = 1 } = useParams();
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(parseInt(slideNumber) || 1);
  const [completedSlides, setCompletedSlides] = useState([]);

  // Slide configuration
  const slideConfig = {
    1: {
      title: "Getting Started",
      totalSlides: 18,
      components: [
        M1S1,
        M1S2,
        M1S5,
        M1S6,
        M1S7,
        M1S8,
        M1S9,
        M1S10,
        M1S11,
        M1S12,
        M1S13,
        M1S14,
        M1S15,
        M1S16,
        M1S17,
        M1S18,
        M1S19,
        M1S20,
      ],
      color: "from-blue-600 to-indigo-700",
    },
    2: {
      title: "Course Orientation",
      totalSlides: 11,
      components: [
        M2S1,
        M2S2,
        M2S3,
        M2S4,
        M2S5,
        M2S6,
        M2S7,
        M2S8,
        M2S9,
        M2S10,
        M2S11,
      ],
      color: "from-green-600 to-emerald-700",
    },
  };

  const config = slideConfig[stepId] || slideConfig[1];
  const totalSlides = config.totalSlides;
  const CurrentSlideComponent = config.components[currentSlide - 1] || M1S1;

  // Sync URL with slide number
  useEffect(() => {
    navigate(`/roadmap/${stepId}/slides/${currentSlide}`, {
      replace: true,
    });
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
    alert(`Congratulations! You've completed Step ${stepId}: ${config.title}`);
    navigate(`/roadmap/${stepId}`);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      // prevent slide change while typing
      const activeTag = document.activeElement.tagName;
      if (activeTag === "INPUT" || activeTag === "TEXTAREA") return;

      if (e.key === "ArrowRight") {
        handleNext();
      }

      if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlide]);

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
