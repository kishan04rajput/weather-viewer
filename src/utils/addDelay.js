export const addDelay = async (value) => {
    await new Promise((resolve, reject) => {
        setTimeout(() => resolve(), value);
    });
};
