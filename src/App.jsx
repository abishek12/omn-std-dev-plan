import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landing_page/LandingPage";
import LandingPageDetails from "./pages/landing_page/LandingPageDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/roadmap/1" element={<LandingPageDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
