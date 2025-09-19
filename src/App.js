import { useState } from "react";
import axios from "axios";
import { mockResponse } from "./utils/mockResponse.js";
import LocationDateBlock from "./components/LocationDateBlock.js";
import { addDelay } from "./utils/addDelay.js";
import ChartTableBlock from "./components/ChartTableBlock.js";
import { HeaderComponent } from "./components/HeaderComponent.js";
import { FooterComponent } from "./components/FooterComponent.js";

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [latitude, setLatitude] = useState("1");
    const [longitude, setLongitude] = useState("1");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [data, setData] = useState(null);

    const processResponse = async (response) => {
        const processedData = {
            ...response,
            daily: {
                ...response.daily,
                time: [],
                temperature_2m_max: [],
                temperature_2m_min: [],
                temperature_2m_mean: [],
                apparent_temperature_max: [],
                apparent_temperature_min: [],
                apparent_temperature_mean: [],
            },
        };

        for (let i = 0; i < response.daily.time.length; i++) {
            if (
                response.daily.temperature_2m_max[i] !== null &&
                response.daily.temperature_2m_min[i] !== null &&
                response.daily.temperature_2m_mean[i] !== null &&
                response.daily.apparent_temperature_max[i] !== null &&
                response.daily.apparent_temperature_min[i] !== null &&
                response.daily.apparent_temperature_mean[i] !== null
            ) {
                processedData.daily.time.push(response.daily.time[i]);
                processedData.daily.temperature_2m_max.push(
                    response.daily.temperature_2m_max[i]
                );
                processedData.daily.temperature_2m_min.push(
                    response.daily.temperature_2m_min[i]
                );
                processedData.daily.temperature_2m_mean.push(
                    response.daily.temperature_2m_mean[i]
                );
                processedData.daily.apparent_temperature_max.push(
                    response.daily.apparent_temperature_max[i]
                );
                processedData.daily.apparent_temperature_min.push(
                    response.daily.apparent_temperature_min[i]
                );
                processedData.daily.apparent_temperature_mean.push(
                    response.daily.apparent_temperature_mean[i]
                );
            }
        }

        await addDelay(1000); // added delay to show loading indicator

        setData(processedData);
    };

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

        try {
            setIsLoading(true);
            const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,temperature_2m_mean,apparent_temperature_max,apparent_temperature_min,apparent_temperature_mean&start_date=${fromDate}&end_date=${toDate}&timezone=Asia/Kolkata`;
            // const response = await axios.get(apiUrl);
            const response = mockResponse; // for testing
            await processResponse(response.data);
        } catch (error) {
            console.error("Error fetching data from API", error.response.data);
            window.alert("Error fetching data from API");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-100 min-w-[360px]">
            {/* Header */}
            <HeaderComponent />
            {/* Main Content */}
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
                        {/* display info block */}
                        <div className="flex flex-col">
                            <ChartTableBlock data={data} />
                        </div>

                        {/* Footer */}
                        <FooterComponent />
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;
