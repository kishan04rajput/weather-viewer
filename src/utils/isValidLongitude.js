export const isValidLongitude = (value) => {
    if (value > 180 || value < -180) {
        window.alert("Longitude can be between +180 to -180 only");
        return false;
    }
    return true;
};
