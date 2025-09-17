import { useState } from "react";
import "./App.css";
import axios from "axios";
import { qwerty } from "./qwerty.js";

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [data, setData] = useState(null);

    const addDelay = async (value) => {
        await new Promise((resolve, reject) => {
            setTimeout(() => resolve(), value);
        });
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

    const isFutureDate = (value) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const selectedDate = new Date(value);
        selectedDate.setHours(0, 0, 0, 0);

        if (selectedDate.getTime() > today.getTime()) {
            return true;
        }
        return false;
    };

    const updateToDate = (value) => {
        if (isFutureDate(value)) {
            window.alert("Error, Can't set future date.");
            return;
        }

        setToDate(value);
    };

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
                                        type="number"
                                        value={latitude}
                                        onChange={(e) =>
                                            updateLatitude(e.target.value)
                                        }
                                        placeholder="22.3119112"
                                    />
                                </div>
                                <div id="longitude-block">
                                    <span>Enter longitude:</span>
                                    <input
                                        type="number"
                                        value={longitude}
                                        onChange={(e) =>
                                            updateLongitude(e.target.value)
                                        }
                                        placeholder="73.1674174"
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
