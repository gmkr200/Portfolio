import { HashRouter as Router, Route, Routes } from "react-router-dom";
//import ProjectsPage from "./Components/Projects/projectsPage";
// Import the ProjectsPage component
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} /> {/* Home Route */}
        {/*  Projects Page Route */}
      </Routes>
    </Router>
  );
}

export default App;
