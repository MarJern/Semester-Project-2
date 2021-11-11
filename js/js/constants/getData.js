export async function getData(url) {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
        displayMessage("error", "There seems to be a problem with getting the data", "");
    }
}