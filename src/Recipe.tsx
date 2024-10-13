import React from "react";

function Recipe({ recipeData }) {
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h3>{recipeData.name}</h3>
      <p><strong>Prep Time:</strong> {recipeData.prepTimeMinutes} minutes</p>
      <p><strong>Cook Time:</strong> {recipeData.cookTimeMinutes} minutes</p>
      <p><strong>Servings:</strong> {recipeData.servings}</p>
      <p><strong>Difficulty:</strong> {recipeData.difficulty}</p>
      <p><strong>Cuisine:</strong> {recipeData.cuisine}</p>
      <p><strong>Calories per serving:</strong> {recipeData.caloriesPerServing}</p>
      <h4>Ingredients:</h4>
      <ul>
        {recipeData.ingredients.map((ingredient, index) => (
          <li key={index} >{ingredient}</li>
        ))}
      </ul>
      <h4>Instructions:</h4>
      <ol>
        {recipeData.instructions.map((instruction, index) => (
          <li key={index} >{instruction}</li>
        ))}
      </ol>
    </div>
  );
}

export default Recipe;


