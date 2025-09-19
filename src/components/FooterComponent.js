export const FooterComponent = () => {
    return (
        <footer className="mt-8 sm:mt-12 bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-md text-center">
            <p className="text-gray-600">
                &copy; {new Date().getFullYear()} Weather Viewer. All rights
                reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
                Powered by Open-Meteo API
            </p>
        </footer>
    );
};
