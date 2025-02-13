import axios from "axios";

const API_URL = "https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/";

export const getData = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log("Full API", response.data);
    const filteredCard = response.data[10];
    console.log("Imagen carta dorso", filteredCard.clowCard)
    console.log("Nombre carta", filteredCard.spanishName);
    console.log("Imagen carta", filteredCard.cardsReverse.clowReverse);
    console.log("Mensaje", filteredCard.meaning);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

