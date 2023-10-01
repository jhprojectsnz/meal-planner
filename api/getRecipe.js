export default async function handler(request, response) {
  const { extension = "" } = request.query;
  const regex = /^query=[\w ]+(&(maxReadyTime|intolerances|diet)=[\w ]+)*$/gi;

  if (!regex.test(extension) || extension === "") {
    return response.status(400).end("Invalid input");
  }
  const key = process.env.API_KEY;
  try {
    const fetchResponse = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&${extension}&number=1&type=main course&sort=random&addRecipeInformation=true&fillIngredients=true`,
    );
    if (!fetchResponse.ok) {
      throw new Error(`HTTP error! status ${fetchResponse.status}`);
    }
    const recipeData = await fetchResponse.json();
    const newRecipe = recipeData.results[0];
    return response.status(200).json({ newRecipe });
  } catch (error) {
    console.error(error);
    return response.status(502).end("Request Failed");
  }
}

// export default function handler(request, response) {
//     const { extension = "" } = request.query;
//     const regex = /^query=[\w ]+(&(maxReadyTime|intolerances|diet)=[\w ]+)*$/gi;
//     if(!regex.test(extension) || extension != "") {
//       return response.status(400).end("Invalid input");
//     }
//     co
//     const key = process.env.API_KEY;
//     try {
//       const recipeData = fetch(
//         `URL-HERE?apiKey=${key}&${extension}`,
//       ).then((response) => response.json());
//       const newRecipe = recipeData.results[0];
//       return response.status(200).json({ newRecipe });
//     } catch (error) {
//       console.error(error);
//       return response.status(502).end("Request Failed");
//     }
//   }
