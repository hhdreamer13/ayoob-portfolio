import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ExperienceDetail from "./components/Experience/ExperienceDetail";

function App() {
  return (
    <Routes>
      <Route path="/details/:id" element={<ExperienceDetail />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
