import { Routes, Route, useParams, Navigate } from "react-router-dom";

import LandingPage from "./pages/landing_page/landing.page";
import PlanOne from "./pages/plan_one/plan.one";
import PlanOneSlides from "./pages/plan_one/plan.one.slides";

// Mapping of step IDs to their corresponding components
// This follows the pattern for different plans
const planComponents = {
  1: {
    details: PlanOne,
    slides: PlanOneSlides,
  },
  // Plan 2 and others can be added here following the same pattern
  // "2": { details: PlanTwo, slides: PlanTwoSlides },
};

const PlanDetailsWrapper = () => {
  const { id } = useParams();
  const PlanComponent = planComponents[id]?.details;

  if (!PlanComponent) {
    return <Navigate to="/" replace />;
  }

  return <PlanComponent />;
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
      <Route path="/roadmap/:id" element={<PlanDetailsWrapper />} />
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
