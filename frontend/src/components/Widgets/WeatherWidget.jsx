import "./WeatherWidget.css";
import { FaCloudSunRain } from "react-icons/fa";

function WeatherWidget() {
  return (
    <div className="widget weather">
      <div className="widget-header">
        <FaCloudSunRain className="widget-icon" />
        <h3>Weather Intelligence</h3>
      </div>

      <h2>32°C</h2>

      <p>Rain Probability : 78%</p>

      <p>Wind Speed : 14 km/h</p>

      <span className="high-risk">
        High Weather Risk
      </span>
    </div>
  );
}

export default WeatherWidget;