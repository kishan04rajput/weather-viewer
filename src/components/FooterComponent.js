export const FooterComponent = () => {
    return (
        <footer className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-md text-center">
            <a
                href="https://open-meteo.com/en/docs/historical-weather-api"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 text-sm hover:text-blue-600 transition-colors duration-200"
            >
                Powered by Open-Meteo API
            </a>
        </footer>
    );
};
