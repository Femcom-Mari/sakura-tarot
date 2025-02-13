import axios from "axios";

const API_URL = "https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/";

export const getData = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log("Full API", response.data);

    // Generar los tres indices de forma aleatoria
    const randomIndices = [];
    while (randomIndices.length < 3) {
      const randomIndex = Math.floor(Math.random() * response.data.length);
      // Sin duplicados
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    // Imprimir los tres indices seleccionados
    console.log("Indices elegidos:", randomIndices);

    // Elegir las tres cartas según los indices arriba
    const pastCard = response.data[randomIndices[0]];
    const presentCard = response.data[randomIndices[1]];
    const futureCard = response.data[randomIndices[2]];

    // Imprimir los datos para las tres cartas
    console.log("Carta pasada:", pastCard.spanishName.toUpperCase());
    console.log("Imagen carta dorso:", pastCard.clowCard);
    console.log("Nombre carta:", pastCard.spanishName);
    console.log("Imagen carta:", pastCard.cardsReverse.clowReverse);
    console.log("Mensaje:", pastCard.meaning);

    console.log("Carta presente:", presentCard.spanishName.toUpperCase());
    console.log("Imagen carta dorso:", presentCard.clowCard);
    console.log("Nombre carta:", presentCard.spanishName);
    console.log("Imagen carta:", presentCard.cardsReverse.clowReverse);
    console.log("Mensaje:", presentCard.meaning);

    console.log("Carta futuro:", futureCard.spanishName.toUpperCase());
    console.log("Imagen carta dorso:", futureCard.clowCard);
    console.log("Nombre carta:", futureCard.spanishName);
    console.log("Imagen carta:", futureCard.cardsReverse.clowReverse);
    console.log("Mensaje:", futureCard.meaning);
  
    //Mensaje de error
  } catch (error) {
    console.error("Error", error);
  }
};


