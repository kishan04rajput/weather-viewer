import { useState, useEffect } from "react";
import {
    FaChevronLeft,
    FaChevronRight,
    FaTemperatureHigh,
    FaTemperatureLow,
} from "react-icons/fa";
export const TableComponent = ({ data }) => {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState("15");
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showCompactView, setShowCompactView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setShowCompactView(window.innerWidth < 768);
        };

        // Set initial state
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const decreasePage = () => {
        if (page === 1) {
            return;
        }
        setPage(page - 1);
    };

    const increasePage = () => {
        if (page >= data.daily.time.length / perPage) {
            return;
        }
        setPage(page + 1);
    };

    const handleJumpToPage = (value) => {
        if (value > data.daily.time.length / perPage) {
            value = Math.ceil(data.daily.time.length / perPage);
        }
        if (value < 0) {
            value = 1;
        }
        setPage(value);
    };

    // Render a compact mobile view of the data
    const renderCompactView = () => {
        return (
            <div className="w-full">
                {data.daily.time.map(
                    (time, index) =>
                        index < page * perPage &&
                        index >= (page - 1) * perPage && (
                            <div
                                key={index}
                                className={`mb-4 p-3 rounded-lg shadow-sm ${
                                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                }`}
                            >
                                <h4 className="font-medium text-gray-900 border-b pb-2 mb-2">
                                    {time}
                                </h4>

                                <div className="grid grid-cols-2 gap-2">
                                    {/* Temperature Section */}
                                    <div className="bg-blue-50 p-2 rounded">
                                        <h5 className="text-xs font-medium text-gray-500 mb-1">
                                            Temperature
                                        </h5>
                                        <div className="flex flex-col space-y-1">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-red-600 font-medium flex items-center">
                                                    <FaTemperatureHigh className="mr-1" />{" "}
                                                    {
                                                        data.daily
                                                            .temperature_2m_max[
                                                            index
                                                        ]
                                                    }
                                                </span>
                                                <span className="text-green-600 font-medium flex items-center">
                                                    <FaTemperatureLow className="mr-1" />{" "}
                                                    {
                                                        data.daily
                                                            .temperature_2m_min[
                                                            index
                                                        ]
                                                    }
                                                </span>
                                            </div>
                                            <div className="text-center text-sm">
                                                <span className="text-blue-600 font-medium">
                                                    Mean:{" "}
                                                    {
                                                        data.daily
                                                            .temperature_2m_mean[
                                                            index
                                                        ]
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Apparent Temperature Section */}
                                    <div className="bg-orange-50 p-2 rounded">
                                        <h5 className="text-xs font-medium text-gray-500 mb-1">
                                            Apparent
                                        </h5>
                                        <div className="flex flex-col space-y-1">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-red-600 font-medium flex items-center">
                                                    <FaTemperatureHigh className="mr-1" />{" "}
                                                    {
                                                        data.daily
                                                            .apparent_temperature_max[
                                                            index
                                                        ]
                                                    }
                                                </span>
                                                <span className="text-green-600 font-medium flex items-center">
                                                    <FaTemperatureLow className="mr-1" />{" "}
                                                    {
                                                        data.daily
                                                            .apparent_temperature_min[
                                                            index
                                                        ]
                                                    }
                                                </span>
                                            </div>
                                            <div className="text-center text-sm">
                                                <span className="text-purple-600 font-medium">
                                                    Mean:{" "}
                                                    {
                                                        data.daily
                                                            .apparent_temperature_mean[
                                                            index
                                                        ]
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                )}

                {/* Mobile Pagination Controls - Bottom */}
                <div className="bg-white rounded-lg shadow-sm p-3 mt-4">
                    <div className="flex items-center justify-between mb-3">
                        <button
                            className="inline-flex items-center px-2 py-1 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={() => decreasePage()}
                            disabled={page === 1}
                        >
                            <FaChevronLeft className="mr-1" /> Prev
                        </button>

                        <div className="flex items-center space-x-1">
                            <span className="text-xs text-gray-700">Page</span>
                            <input
                                type="text"
                                className="border border-gray-300 w-10 text-center rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                                value={page}
                                onChange={(e) =>
                                    handleJumpToPage(parseInt(e.target.value))
                                }
                            />
                            <span className="text-xs text-gray-700">
                                of {Math.ceil(data.daily.time.length / perPage)}
                            </span>
                        </div>

                        <button
                            className="inline-flex items-center px-2 py-1 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={() => increasePage()}
                            disabled={
                                page >=
                                Math.ceil(data.daily.time.length / perPage)
                            }
                        >
                            Next <FaChevronRight className="ml-1" />
                        </button>
                    </div>

                    <div className="flex items-center justify-center mt-3">
                        <span className="text-xs text-gray-700 mr-2">Show</span>
                        <select
                            className="border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xs py-1"
                            value={perPage}
                            onChange={(e) => setPerPage(e.target.value)}
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            {data.daily.time.length > 15 && (
                                <option value="30">30</option>
                            )}
                            {data.daily.time.length > 30 && (
                                <option value="all">All</option>
                            )}
                        </select>
                        <span className="text-xs text-gray-700 ml-2">
                            per page
                        </span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col items-center p-2 sm:p-4">
            <div className="overflow-x-auto w-full max-w-full">
                {showCompactView ? (
                    renderCompactView()
                ) : (
                    <table className="min-w-full divide-y divide-gray-200 border-collapse shadow-sm">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    rowSpan={2}
                                >
                                    Date
                                </th>
                                <th
                                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider bg-blue-50"
                                    colSpan={3}
                                >
                                    {`Temperature ${data.daily_units.temperature_2m_max}`}
                                </th>
                                <th
                                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider bg-orange-50"
                                    colSpan={3}
                                >
                                    {`Apparent Temperature ${data.daily_units.apparent_temperature_max}`}
                                </th>
                            </tr>
                            <tr>
                                <td className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider bg-blue-50">
                                    Max
                                </td>
                                <td className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider bg-blue-50">
                                    Mean
                                </td>
                                <td className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider bg-blue-50">
                                    Min
                                </td>
                                <td className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider bg-orange-50">
                                    Max
                                </td>
                                <td className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider bg-orange-50">
                                    Mean
                                </td>
                                <td className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider bg-orange-50">
                                    Min
                                </td>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {data.daily.time.map(
                                (time, index) =>
                                    index < page * perPage &&
                                    index >= (page - 1) * perPage && (
                                        <tr
                                            key={index}
                                            className={`${
                                                index % 2 === 0
                                                    ? "bg-white"
                                                    : "bg-gray-50"
                                            } hover:bg-gray-100 transition-colors duration-150`}
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {time}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 bg-blue-50">
                                                <span className="font-medium text-red-600">
                                                    {
                                                        data.daily
                                                            .temperature_2m_max[
                                                            index
                                                        ]
                                                    }
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 bg-blue-50">
                                                <span className="font-medium text-blue-600">
                                                    {
                                                        data.daily
                                                            .temperature_2m_mean[
                                                            index
                                                        ]
                                                    }
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 bg-blue-50">
                                                <span className="font-medium text-green-600">
                                                    {
                                                        data.daily
                                                            .temperature_2m_min[
                                                            index
                                                        ]
                                                    }
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 bg-orange-50">
                                                <span className="font-medium text-red-600">
                                                    {
                                                        data.daily
                                                            .apparent_temperature_max[
                                                            index
                                                        ]
                                                    }
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 bg-orange-50">
                                                <span className="font-medium text-purple-600">
                                                    {
                                                        data.daily
                                                            .apparent_temperature_mean[
                                                            index
                                                        ]
                                                    }
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 bg-orange-50">
                                                <span className="font-medium text-green-600">
                                                    {
                                                        data.daily
                                                            .apparent_temperature_min[
                                                            index
                                                        ]
                                                    }
                                                </span>
                                            </td>
                                        </tr>
                                    )
                            )}
                        </tbody>
                        <tfoot className="bg-gray-50">
                            <tr>
                                <td
                                    colSpan={7}
                                    className="px-6 py-4 text-center"
                                >
                                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                                        <button
                                            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                            onClick={() => decreasePage()}
                                            disabled={page === 1}
                                        >
                                            <FaChevronLeft className="mr-1" />{" "}
                                            Previous
                                        </button>

                                        <div className="flex items-center space-x-1 my-2 sm:my-0">
                                            <span className="text-sm text-gray-700">
                                                Page
                                            </span>
                                            <input
                                                type="text"
                                                className="border border-gray-300 w-12 text-center rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                                                value={page}
                                                onChange={(e) =>
                                                    handleJumpToPage(
                                                        parseInt(e.target.value)
                                                    )
                                                }
                                            />
                                            <span className="text-sm text-gray-700">
                                                of{" "}
                                                {Math.ceil(
                                                    data.daily.time.length /
                                                        perPage
                                                )}
                                            </span>
                                        </div>

                                        <button
                                            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                            onClick={() => increasePage()}
                                            disabled={
                                                page >=
                                                Math.ceil(
                                                    data.daily.time.length /
                                                        perPage
                                                )
                                            }
                                        >
                                            Next{" "}
                                            <FaChevronRight className="ml-1" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td
                                    className="px-6 py-4 text-center"
                                    colSpan={7}
                                >
                                    <div className="flex flex-wrap items-center justify-center space-x-2">
                                        <span className="text-sm text-gray-700">
                                            Show
                                        </span>
                                        <select
                                            className="border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                                            value={perPage}
                                            onChange={(e) =>
                                                setPerPage(e.target.value)
                                            }
                                        >
                                            <option value="15">15</option>
                                            {data.daily.time.length > 15 && (
                                                <option value="30">30</option>
                                            )}
                                            {data.daily.time.length > 30 && (
                                                <option value="45">45</option>
                                            )}
                                            {data.daily.time.length > 45 && (
                                                <option value="60">60</option>
                                            )}
                                            {data.daily.time.length > 60 && (
                                                <option value="all">All</option>
                                            )}
                                        </select>
                                        <span className="text-sm text-gray-700">
                                            entries per page
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                )}
            </div>
        </div>
    );
};
