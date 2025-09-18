import { useState } from "react";
import "./ChartTableBlock.css";
import { ChartComponent } from "./ChartComponent";
import { TableComponent } from "./TableComponent";

const ChartTableBlock = ({ data }) => {
    const [displayMode, setDisplayMode] = useState("table");

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
                            <ChartComponent data={data} />
                        </div>
                    ) : (
                        <div>
                            <TableComponent data={data} />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ChartTableBlock;
