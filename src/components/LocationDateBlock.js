import React, { useState } from "react";
import { isFutureDate } from "../utils/isFutureDate";
import { isValidLongitude } from "../utils/isValidLongitude";
import { isValidLatitude } from "../utils/isValidLatitude";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

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
    const [latitudeError, setLatitudeError] = useState("");
    const [longitudeError, setLongitudeError] = useState("");
    const [fromDateError, setFromDateError] = useState("");
    const [toDateError, setToDateError] = useState("");

    const updateLatitude = (value) => {
        if (!isValidLatitude(value)) {
            setLatitudeError("Please enter a valid latitude (-90 to 90)");
            return;
        }
        setLatitudeError("");
        setLatitude(value);
    };

    const updateLongitude = (value) => {
        if (!isValidLongitude(value)) {
            setLongitudeError("Please enter a valid longitude (-180 to 180)");
            return;
        }
        setLongitudeError("");
        setLongitude(value);
    };

    const updateFromDate = (value) => {
        if (isFutureDate(value)) {
            setFromDateError("Cannot set future date");
            return;
        }
        setFromDateError("");
        setFromDate(value);

        if (value && toDate && value > toDate) {
            window.alert('"From date" cannot be after "To date"');
            setFromDateError('"From date" cannot be after "To date"');
        } else {
            setToDateError("");
        }
    };

    const updateToDate = (value) => {
        if (isFutureDate(value)) {
            setToDateError("Cannot set future date");
            return;
        }

        if (value && fromDate && fromDate > value) {
            window.alert('"To date" cannot be before "From date"');
            setToDateError('"To date" cannot be before "From date"');
            return;
        }

        setToDateError("");
        setToDate(value);
    };

    return (
        <div className="flex flex-col gap-6 md:flex-row md:gap-6">
            {/* location block */}
            <div className="flex flex-col border border-gray-200 bg-white p-6 rounded-xl shadow-sm max-w-1/2 gap-4 flex-1">
                {/* location block title */}
                <div className="flex items-center mb-2 text-blue-700">
                    <FaMapMarkerAlt className="mr-2" />
                    <h2 className="text-xl font-semibold">Location</h2>
                </div>
                {/* latitude input */}
                <div className="flex flex-col space-y-1">
                    <label
                        htmlFor="latitude"
                        className="text-sm font-medium text-gray-700"
                    >
                        Latitude
                    </label>
                    <input
                        id="latitude"
                        type="number"
                        value={latitude}
                        onChange={(e) => updateLatitude(e.target.value)}
                        placeholder="+90 to -90"
                        className={`px-3 py-2 border ${
                            latitudeError ? "border-red-500" : "border-gray-300"
                        } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    />
                    {latitudeError && (
                        <p className="text-red-500 text-xs mt-1">
                            {latitudeError}
                        </p>
                    )}
                </div>
                {/* longitude input */}
                <div className="flex flex-col space-y-1">
                    <label
                        htmlFor="longitude"
                        className="text-sm font-medium text-gray-700"
                    >
                        Longitude
                    </label>
                    <input
                        id="longitude"
                        type="number"
                        value={longitude}
                        onChange={(e) => updateLongitude(e.target.value)}
                        placeholder="+180 to -180"
                        className={`px-3 py-2 border ${
                            longitudeError
                                ? "border-red-500"
                                : "border-gray-300"
                        } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    />
                    {longitudeError && (
                        <p className="text-red-500 text-xs mt-1">
                            {longitudeError}
                        </p>
                    )}
                </div>
            </div>

            {/* date block */}
            <div className="flex flex-col border border-gray-200 bg-white p-6 rounded-xl shadow-sm max-w-1/2 gap-4 flex-1">
                {/* date block title */}
                <div className="flex items-center mb-2 text-blue-700">
                    <FaCalendarAlt className="mr-2" />
                    <h2 className="text-xl font-semibold">Date Range</h2>
                </div>
                {/* from date input */}
                <div className="flex flex-col space-y-1">
                    <label
                        htmlFor="from-date"
                        className="text-sm font-medium text-gray-700"
                    >
                        From
                    </label>
                    <input
                        id="from-date"
                        type="date"
                        value={fromDate}
                        onChange={(e) => updateFromDate(e.target.value)}
                        className={`px-3 py-2 border ${
                            fromDateError ? "border-red-500" : "border-gray-300"
                        } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    />
                    {fromDateError && (
                        <p className="text-red-500 text-xs mt-1">
                            {fromDateError}
                        </p>
                    )}
                </div>
                {/* to date input */}
                <div className="flex flex-col space-y-1">
                    <label
                        htmlFor="to-date"
                        className="text-sm font-medium text-gray-700"
                    >
                        To
                    </label>
                    <input
                        id="to-date"
                        type="date"
                        value={toDate}
                        onChange={(e) => updateToDate(e.target.value)}
                        className={`px-3 py-2 border ${
                            toDateError ? "border-red-500" : "border-gray-300"
                        } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    />
                    {toDateError && (
                        <p className="text-red-500 text-xs mt-1">
                            {toDateError}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LocationDateBlock;
