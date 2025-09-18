import { useState } from "react";
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
                <div className="flex border border-gray-400 rounded-[10px] p-[1%] flex-col justify-center">
                    <div className="flex flex-row gap-[1vw] justify-center">
                        <button
                            onClick={displayChart}
                            className={`border border-gray-300 px-[2%] py-[1%] rounded-lg transition-colors duration-200 ${
                                displayMode === "chart"
                                    ? "bg-gray-300 hover:bg-gray-400"
                                    : "bg-white hover:bg-gray-200"
                            }`}
                            id="chart-button"
                        >
                            Chart
                        </button>
                        <button
                            onClick={displayTable}
                            className={`border border-gray-300 px-[2%] py-[1%] rounded-lg transition-colors duration-200 ${
                                displayMode === "table"
                                    ? "bg-gray-300 hover:bg-gray-400"
                                    : "bg-white hover:bg-gray-200"
                            }`}
                            id="table-button"
                        >
                            Table
                        </button>
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
