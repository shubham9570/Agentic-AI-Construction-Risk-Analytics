import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import Projects from "./pages/Projects/Projects";
import Safety from "./pages/Safety/Safety";
import AIHub from "./pages/AIHub/AIHub";
import Analytics from "./pages/Analytics/Analytics";
import RiskCenter from "./pages/RiskCenter/RiskCenter";
import Reports from "./pages/Reports/Reports";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";

function Guarded({ children }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Guarded><Dashboard /></Guarded>} />
      <Route path="/projects" element={<Guarded><Projects /></Guarded>} />
      <Route path="/safety" element={<Guarded><Safety /></Guarded>} />
      <Route path="/aihub" element={<Guarded><AIHub /></Guarded>} />
      <Route path="/analytics" element={<Guarded><Analytics /></Guarded>} />
      <Route path="/riskcenter" element={<Guarded><RiskCenter /></Guarded>} />
      <Route path="/reports" element={<Guarded><Reports /></Guarded>} />
      <Route path="/settings" element={<Guarded><Settings /></Guarded>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
