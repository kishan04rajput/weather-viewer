import { useState } from "react";
import axios from "axios";
import { qwerty } from "./qwerty.js";
import LocationDateBlock from "./components/LocationDateBlock.js";
import { addDelay } from "./utils/addDelay.js";
import ChartTableBlock from "./components/ChartTableBlock.js";
import { FaCloudSun } from "react-icons/fa";

function App() {
    const appTitle = "Weather Viewer";
    const [isLoading, setIsLoading] = useState(false);
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [data, setData] = useState(null);

    const isInputValidated = () => {
        if (!latitude) {
            window.alert("Please fill latitude.");
            return false;
        }
        if (!longitude) {
            window.alert("Please fill longitude.");
            return false;
        }
        if (!fromDate) {
            window.alert("Please fill fromDate.");
            return false;
        }
        if (!toDate) {
            window.alert("Please fill toDate.");
            return false;
        }
        if (fromDate > toDate) {
            window.alert(
                'Error, "From date" can\'t be greater than "To date".'
            );
            return false;
        }
        return true;
    };

    const fetchData = async () => {
        if (!isInputValidated()) {
            return;
        }

        setIsLoading(true);
        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,temperature_2m_mean,apparent_temperature_max,apparent_temperature_min,apparent_temperature_mean&start_date=${fromDate}&end_date=${toDate}&timezone=Asia/Kolkata`;

        try {
            const response = await axios.get(apiUrl);
            setData(response.data);
            console.log("API data:", response.data);
        } catch (error) {
            console.error("Error fetching data from API", error);
            // Fallback to mock data for development/demo purposes
            const mockResponse = qwerty;
            await addDelay(1000);
            setData(mockResponse);
            console.log("Using mock data:", mockResponse);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-100">
            {/* Header */}
            <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 shadow-lg">
                <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
                    <div className="flex items-center space-x-2 mb-3 sm:mb-0">
                        <FaCloudSun className="text-3xl text-yellow-300" />
                        <h1 className="text-2xl font-bold">{appTitle}</h1>
                    </div>
                    <nav>
                        <ul className="flex space-x-4 sm:space-x-6">
                            <li>
                                <a
                                    href="#"
                                    className="text-sm sm:text-base hover:text-blue-200 transition-colors duration-200"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm sm:text-base hover:text-blue-200 transition-colors duration-200"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm sm:text-base hover:text-blue-200 transition-colors duration-200"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto py-4 sm:py-8 px-3 sm:px-4">
                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4 sm:gap-6 w-full">
                        {/* get info block */}
                        <div className="flex flex-col border border-gray-200 rounded-xl p-6 gap-4 bg-white shadow-md">
                            <LocationDateBlock
                                latitude={latitude}
                                longitude={longitude}
                                fromDate={fromDate}
                                toDate={toDate}
                                setLatitude={setLatitude}
                                setLongitude={setLongitude}
                                setFromDate={setFromDate}
                                setToDate={setToDate}
                            />

                            <button
                                className="self-center bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm flex items-center justify-center"
                                onClick={fetchData}
                            >
                                Get Weather Data
                            </button>
                        </div>
                        <div className="flex flex-col">
                            <ChartTableBlock data={data} />
                        </div>

                        {/* Footer */}
                        <footer className="mt-8 sm:mt-12 bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-md text-center">
                            <p className="text-gray-600">
                                &copy; {new Date().getFullYear()} Weather
                                Viewer. All rights reserved.
                            </p>
                            <p className="text-gray-500 text-sm mt-2">
                                Powered by Open-Meteo API
                            </p>
                        </footer>
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;
