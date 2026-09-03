import "./EquipmentWidget.css";
import { FaTools } from "react-icons/fa";

function EquipmentWidget(){

    return(

        <div className="widget">

            <div className="widget-header">

                <FaTools className="widget-icon"/>

                <h3>Equipment Health</h3>

            </div>

            <h2>94%</h2>

            <p>Machines Active</p>

            <p>2 Require Service</p>

        </div>

    )

}

export default EquipmentWidget;