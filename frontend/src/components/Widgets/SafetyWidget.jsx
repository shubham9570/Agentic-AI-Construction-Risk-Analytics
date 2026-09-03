import "./SafetyWidget.css";
import { FaHardHat } from "react-icons/fa";

function SafetyWidget() {
  return (
    <div className="widget">

      <div className="widget-header">

        <FaHardHat className="widget-icon"/>

        <h3>Safety Status</h3>

      </div>

      <h2>96%</h2>

      <p>PPE Compliance</p>

      <p>3 Violations Today</p>

    </div>
  );
}

export default SafetyWidget;