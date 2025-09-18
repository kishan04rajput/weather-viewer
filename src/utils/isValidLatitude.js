export const isValidLatitude = (value) => {
    if (value > 90 || value < -90) {
        window.alert("Latitude can be between +90 to -90 only");
        return false;
    }
    return true;
};
