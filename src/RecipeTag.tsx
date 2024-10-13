import React from "react";

function RecipeTag({ tagName, onSelectTag }) {
  return (
    <li onClick={() => onSelectTag(tagName)} style={{ cursor: "pointer", margin: '10px', padding: '5px', border: '1px solid #000' }}>
      {tagName}
    </li>
  );
}

export default RecipeTag;

