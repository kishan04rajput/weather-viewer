import { useState } from "react";
import { FaCloudSun } from "react-icons/fa";

export const HeaderComponent = () => {
    const [displayNumber, setDisplayNumber] = useState(false);
    return (
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 shadow-lg">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center space-x-2 mb-3 sm:mb-0">
                    <FaCloudSun className="text-3xl text-yellow-300" />
                    <h1 className="text-2xl font-bold">Weather Viewer</h1>
                </div>
                <nav>
                    <ul className="flex space-x-4 sm:space-x-6">
                        <li>
                            <button className="text-sm sm:text-base hover:text-blue-200 transition-colors duration-200">
                                Home
                            </button>
                        </li>
                        <li>
                            <a
                                href="/Kishan Resume.pdf"
                                download="Kishan Resume.pdf"
                                className="text-sm sm:text-base hover:text-blue-200 transition-colors duration-200 cursor-pointer"
                                title="Download Resume"
                            >
                                Resume
                            </a>
                        </li>
                        <li>
                            <button
                                className="text-sm sm:text-base hover:text-blue-200 transition-colors duration-200"
                                title="kishan9rajput@gmail.com"
                                onClick={() => setDisplayNumber(true)}
                            >
                                {displayNumber ? "+91 8347223811" : "Contact"}
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
