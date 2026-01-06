import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landing_page/LandingPage";
import LandingPageDetails from "./pages/landing_page/LandingPageDetails";
import LandingPageSlide from "./pages/landing_page/LandingPageSlide";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/roadmap/:id" element={<LandingPageDetails />} />
        <Route
          path="/roadmap/:id/slides/:slideNumber"
          element={<LandingPageSlide />}
        />
      </Routes>
    </Router>
  );
};

export default App;
