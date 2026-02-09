import { Routes, Route, useParams, Navigate } from "react-router-dom";

import LandingPage from "./pages/landing_page/landing.page";
import PageDetails from "./pages/landing_page/page.details";

import PlanOneSlides from "./pages/plan_one/plan.one.slides";

import PlanTwoSlides from "./pages/plan_two/plan.two.slides";

// Mapping of step IDs to their corresponding components
// This follows the pattern for different plans
const planComponents = {
  1: {
    slides: PlanOneSlides,
  },
  2: {
    slides: PlanTwoSlides,
  },
};

const PlanSlidesWrapper = () => {
  const { id } = useParams();
  const SlidesComponent = planComponents[id]?.slides;

  if (!SlidesComponent) {
    return <Navigate to="/" replace />;
  }

  return <SlidesComponent />;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/roadmap/:id" element={<PageDetails />} />
      <Route
        path="/roadmap/:id/slides/:slideNumber"
        element={<PlanSlidesWrapper />}
      />
      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
