export const resolve = async (promise) => {
    try {
        const result = await promise;

        return [null, result];
    } catch(err) {
        return [err];
    }
}
