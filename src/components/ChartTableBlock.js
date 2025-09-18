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
                <div className="flex flex-col justify-center">
                    <div className="flex flex-row gap-[1vw] justify-center">
                        <span
                            onClick={displayChart}
                            className="cursor-pointer border border-gray-300 px-[2%] py-[1%] rounded-lg hover:bg-gray-200"
                            style={{
                                backgroundColor:
                                    displayMode === "chart"
                                        ? "lightgrey"
                                        : "white",
                            }}
                            id="chart-button"
                        >
                            Chart
                        </span>
                        <span
                            onClick={displayTable}
                            className="cursor-pointer border border-gray-300 px-[2%] py-[1%] rounded-lg hover:bg-gray-200"
                            style={{
                                backgroundColor:
                                    displayMode === "table"
                                        ? "lightgrey"
                                        : "white",
                            }}
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
