import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Layout from "../../Layout";

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

const PageTwoSlide = () => {
  const { id: stepId, slideNumber = 1 } = useParams();
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(parseInt(slideNumber) || 1);
  const [completedSlides, setCompletedSlides] = useState([]);

  // Slide configuration
  const slideConfig = {
    title: "Squad Goals & Seld-Growth",
    totalSlides: 18,
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
    color: "from-green-600 to-indigo-700",
  };

  const totalSlides = slideConfig.totalSlides;
  const CurrentSlideComponent =
    slideConfig.components[currentSlide - 1] || M2S1;

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
    alert(
      `Congratulations! You've completed Step ${stepId}: ${slideConfig.title}`,
    );
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
      <SlideWrapper color={slideConfig.color}>
        <CurrentSlideComponent
          onNext={handleNext}
          onPrev={handlePrev}
          onComplete={handleCompleteSlide}
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          stepId={stepId}
          stepTitle={slideConfig.title}
          config={slideConfig}
        />
      </SlideWrapper>
    </Layout>
  );
};

export default PageTwoSlide;
