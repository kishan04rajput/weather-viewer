import { useState } from "react";
import axios from "axios";
import { qwerty } from "./qwerty.js";
import LocationDateBlock from "./components/LocationDateBlock.js";
import { addDelay } from "./utils/addDelay.js";
import ChartTableBlock from "./components/ChartTableBlock.js";

function App() {
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
        try {
            setIsLoading(true);
            const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,temperature_2m_mean,apparent_temperature_max,apparent_temperature_min,apparent_temperature_mean&start_date=${fromDate}&end_date=${toDate}&timezone=Asia/Kolkata`;

            // const response = await axios.get(apiUrl);
            const response = qwerty;
            await addDelay(1000);
            setData(response);
            console.log(response);
        } catch (error) {
            console.error("Error fetching data", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <div id="main-container">
                    {/* get info block */}
                    <div className="flex flex-col border border-gray-400 rounded-[10px] m-[1%] p-[1%] gap-[1vh]">
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
                            className="self-center border border-gray-400 rounded-[10px] px-[2%] py-[1%] hover:bg-gray-200"
                            onClick={fetchData}
                        >
                            GET INFO
                        </button>
                    </div>
                    <div className="flex flex-col m-[1%]">
                        <ChartTableBlock data={data} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
