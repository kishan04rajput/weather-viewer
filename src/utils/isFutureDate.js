export const isFutureDate = (value) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(value);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate.getTime() > today.getTime()) {
        return true;
    }
    return false;
};
