import axios from "axios";

const API_URL = "https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/";

export const getData = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log("Full API Response:", response.data);

    if (!response.data || response.data.length < 3) {
      throw new Error("Error");
    }

//Tres cartas random
    const randomIndices = new Set();
    while (randomIndices.size < 3) {
      randomIndices.add(Math.floor(Math.random() * response.data.length));
    }

    const selectedCards = [...randomIndices].map((index) => response.data[index]);

    console.log("Selected Cards:", selectedCards);
    return selectedCards;
  } catch (error) {
    console.error("Error:", error);
    return []; 
  }
};



