import { useState } from "react";
import "./App.css";
import axios from "axios";
import { qwerty } from "./qwerty.js";
import LocationDateBlock from "./components/LocationDateBlock";

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

    return (
        <div>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <div id="main-container">
                    {/* get info block */}
                    <div id="get-info-block">
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
