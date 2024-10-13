import React from "react";
import RecipeTag from "./RecipeTag";

function RecipeTagList({ tagList, onSelectTag }) {
  return (
    <div>
      <h2>Select a Recipe Tag</h2>
      <ul>
        {tagList.map((tag, index) => (
          <RecipeTag key={index} tagName={tag} onSelectTag={onSelectTag} />
        ))}
      </ul>
    </div>
  );
}

export default RecipeTagList;
