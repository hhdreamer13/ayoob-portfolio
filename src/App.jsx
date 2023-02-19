import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import ExperienceDetail from "./components/Experience/ExperienceDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/details/:id" element={<ExperienceDetail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
