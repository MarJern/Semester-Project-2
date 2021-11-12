import displayMessage from "../components/displayMessage.js";

export const baseUrl = "http://localhost:1337";

// export async function getDataFromAPI() {
//     try {
//       const response = await fetch(baseUrl);
//       return await response.json()

//     } catch(error) {
//       displayMessage("error", "Something went wrong with the loading", ".message__container");;
//       return [];
//     } 
//   }