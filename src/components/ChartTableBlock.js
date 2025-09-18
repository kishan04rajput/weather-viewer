import { useState } from "react";
import "./ChartTableBlock.css";
const ChartTableBlock = ({ data }) => {
    const [displayMode, setDisplayMode] = useState("chart");

    const displayChart = () => {
        if (displayMode === "chart") {
            return;
        }
        setDisplayMode("chart");
        document.getElementById("chart-button").classList.add("active-button");
        document
            .getElementById("table-button")
            .classList.remove("active-button");
    };
    const displayTable = () => {
        if (displayMode === "table") {
            return;
        }
        setDisplayMode("table");
        document.getElementById("table-button").classList.add("active-button");
        document
            .getElementById("chart-button")
            .classList.remove("active-button");
    };
    return (
        <div>
            {data && (
                <div id="display-mode-block">
                    <div id="display-mode-buttons">
                        <span
                            onClick={displayChart}
                            className="button"
                            id="chart-button"
                        >
                            Chart
                        </span>
                        <span
                            onClick={displayTable}
                            className="button"
                            id="table-button"
                        >
                            Table
                        </span>
                    </div>
                    {displayMode === "chart" ? (
                        <div>
                            <h1>Chart</h1>
                        </div>
                    ) : (
                        <div>
                            <h1>Table</h1>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ChartTableBlock;
