import "./BudgetWidget.css";
import { FaMoneyBillWave } from "react-icons/fa";

function BudgetWidget(){

    return(

        <div className="widget">

            <div className="widget-header">

                <FaMoneyBillWave className="widget-icon"/>

                <h3>Budget Health</h3>

            </div>

            <h2>₹1.8 Cr</h2>

            <p>Budget Used</p>

            <p>68% Utilized</p>

        </div>

    )

}

export default BudgetWidget;