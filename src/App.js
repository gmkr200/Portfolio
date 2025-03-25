import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ProjectsPage from "./Components/Projects/projectsPage";
import "./App.css";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route className="App" path="/" element={<Layout />} /> {/* Home Route */}
        <Route path="/projectsPage" element={<ProjectsPage />} /> {/* Projects Page Route */}
      </Routes>
    </Router>
  );
}

export default App;
