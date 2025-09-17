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
        if (!latitude) {
            window.alert("Please fill latitude.");
            return;
        }
        if (!longitude) {
            window.alert("Please fill longitude.");
            return;
        }
        if (!fromDate) {
            window.alert("Please fill fromDate.");
            return;
        }
        if (!toDate) {
            window.alert("Please fill toDate.");
            return;
        }
        try {
            setIsLoading(true);
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

    const updateLatitude = (value) => {
        if (value > 90 || value < -90) {
            window.alert("Latitude can be between +90 to -90 only");
            return;
        }
        setLatitude(value);
    };

    const updateLongitude = (value) => {
        if (value > 180 || value < -180) {
            window.alert("Longitude can be between +180 to -180 only");
            return;
        }
        setLongitude(value);
    };

    const updateToDate = (value) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const selectedDate = new Date(value);
        selectedDate.setHours(0, 0, 0, 0);

        if (selectedDate.getTime() > today.getTime()) {
            window.alert("Error, Can't set future date.");
            return;
        }

        setToDate(value);
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
                                            updateLatitude(e.target.value)
                                        }
                                    />
                                </div>
                                <div id="longitude-block">
                                    <span>Enter longitude:</span>
                                    <input
                                        type="text"
                                        value={longitude}
                                        onChange={(e) =>
                                            updateLongitude(e.target.value)
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
                                            updateToDate(e.target.value)
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
