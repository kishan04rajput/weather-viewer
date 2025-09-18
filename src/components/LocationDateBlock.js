import React from "react";
import "./LocationDateBlock.css";

const LocationDateBlock = ({
    latitude,
    longitude,
    fromDate,
    toDate,
    setLatitude,
    setLongitude,
    setFromDate,
    setToDate,
}) => {
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
        <div id="location-date-block">
            {/* location block */}
            <div id="location-block">
                <h1>Location</h1>
                <div id="latitude-block">
                    <span>Enter latitude:</span>
                    <input
                        type="number"
                        value={latitude}
                        onChange={(e) => updateLatitude(e.target.value)}
                        placeholder="22.3119112"
                    />
                </div>
                <div id="longitude-block">
                    <span>Enter longitude:</span>
                    <input
                        type="number"
                        value={longitude}
                        onChange={(e) => updateLongitude(e.target.value)}
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
                        onChange={(e) => setFromDate(e.target.value)}
                    />
                </div>
                <div id="to-date-block">
                    <span>To:</span>
                    <input
                        type="date"
                        value={toDate}
                        onChange={(e) => updateToDate(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default LocationDateBlock;
