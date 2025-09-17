import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { qwerty } from "./qwerty.js";

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [latitude, setLatitude] = useState(22.3119112);
    const [longitude, setLongitude] = useState(73.1674174);
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [data, setData] = useState(null);

    const fetchData = async () => {
        if (!latitude || !longitude || !fromDate || !toDate) {
            console.error("Please fill all data....");
            return;
        }
        setIsLoading(true);
        try {
            const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,temperature_2m_mean,apparent_temperature_max,apparent_temperature_min,apparent_temperature_mean&start_date=${fromDate}&end_date=${toDate}&timezone=Asia/Kolkata`;

            // const response = await axios.get(apiUrl);
            const response = qwerty;
            await new Promise((resolve, reject) => {
                setTimeout(() => resolve(), 1000);
            });
            setData(response);
            console.log(response);
        } catch (error) {
            console.error("Error fetching data", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        // fetchData();
    }, []);

    return (
        <div>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <div id="main-container">
                    {/* get info block */}
                    <div id="get-info-block">
                        <div id="location-date-block">
                            {/* location block */}
                            <div id="location-block">
                                <h1>Location</h1>
                                <div id="latitude-block">
                                    <span>Enter latitude:</span>
                                    <input
                                        type="text"
                                        value={latitude}
                                        onChange={(e) =>
                                            setLatitude(e.target.value)
                                        }
                                    />
                                </div>
                                <div id="longitude-block">
                                    <span>Enter longitude:</span>
                                    <input
                                        type="text"
                                        value={longitude}
                                        onChange={(e) =>
                                            setLongitude(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            {/* date block */}
                            <div id="date-block">
                                <h1>Date</h1>
                                <div id="from-date-block">
                                    <span>From:</span>
                                    <input
                                        type="date"
                                        value={fromDate}
                                        onChange={(e) =>
                                            setFromDate(e.target.value)
                                        }
                                    />
                                </div>
                                <div id="to-date-block">
                                    <span>To:</span>
                                    <input
                                        type="date"
                                        value={toDate}
                                        onChange={(e) =>
                                            setToDate(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        <button id="get-info" onClick={fetchData}>
                            GET INFO
                        </button>
                    </div>
                    <div id="display-info-block">
                        <span>Display info block</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
