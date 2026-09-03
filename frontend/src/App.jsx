import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Projects from "./pages/Projects/Projects";
import Safety from "./pages/Safety/Safety";
import AIHub from "./pages/AIHub/AIHub";
import Analytics from "./pages/Analytics/Analytics";
import RiskCenter from "./pages/RiskCenter/RiskCenter";
import Reports from "./pages/Reports/Reports";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/safety" element={<Safety />} />
      <Route path="/aihub" element={<AIHub />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/riskcenter" element={<RiskCenter />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;