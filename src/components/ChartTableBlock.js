import { useState } from "react";
import { ChartComponent } from "./ChartComponent";
import { TableComponent } from "./TableComponent";
import { FaChartLine, FaTable } from "react-icons/fa";

const ChartTableBlock = ({ data }) => {
    const [displayMode, setDisplayMode] = useState("chart");

    const displayChart = () => {
        if (displayMode === "chart") {
            return;
        }
        setDisplayMode("chart");
    };

    const displayTable = () => {
        if (displayMode === "table") {
            return;
        }
        setDisplayMode("table");
    };

    return (
        <div>
            {data && (
                <div className="flex border border-gray-200 bg-white rounded-xl p-3 sm:p-6 shadow-md flex-col justify-center">
                    {/* Display Mode Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center mb-4 sm:mb-6">
                        {/* chart button */}
                        <button
                            onClick={displayChart}
                            className={`flex items-center px-5 py-2 rounded-lg transition-colors duration-200 font-medium ${
                                displayMode === "chart"
                                    ? "bg-blue-600 text-white shadow-sm"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            <FaChartLine className="mr-2" />
                            Chart View
                        </button>
                        {/* table button */}
                        <button
                            onClick={displayTable}
                            className={`flex items-center px-5 py-2 rounded-lg transition-colors duration-200 font-medium ${
                                displayMode === "table"
                                    ? "bg-blue-600 text-white shadow-sm"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            <FaTable className="mr-2" />
                            Table View
                        </button>
                    </div>
                    {/* Display Mode Content */}
                    <div className="bg-white rounded-lg overflow-hidden w-full">
                        {displayMode === "chart" ? (
                            <div className="p-1 sm:p-2">
                                <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-2 sm:mb-4 text-center">
                                    Temperature Data Chart
                                </h3>
                                <ChartComponent data={data} />
                            </div>
                        ) : (
                            <div>
                                <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-2 sm:mb-4 text-center">
                                    Temperature Data Table
                                </h3>
                                <TableComponent data={data} />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChartTableBlock;
