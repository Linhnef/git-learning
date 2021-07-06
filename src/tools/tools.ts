

export const URLParamsToObject = (str : string) => {
    const urlParams = new URLSearchParams(str);
    return Object.fromEntries(urlParams);
}