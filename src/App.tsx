import React, { useEffect, useState } from "react";
import RecipeTagList from "./RecipeTagList";
import RecipeList from "./RecipeList";

function App() {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [recipes, setRecipes] = useState([]);

  // Fetch recipe tags from API
  useEffect(() => {
    fetch("https://dummyjson.com/recipes/tags")
      .then((response) => response.json())
      .then((data) => setTags(data));
  }, []);

  // Fetch recipes when a tag is selected
  useEffect(() => {
    if (selectedTag) {
      fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`)
        .then((response) => response.json())
        .then((data) => setRecipes(data.recipes));
    }
  }, [selectedTag]);

  // Handle tag selection
  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag);
  };

  return (
    <div>
      <h1>ACME Recipe O'Master</h1>
      <h2>Recipe App</h2>
      {selectedTag ? (
        <RecipeList recipes={recipes} />
      ) : (
        <RecipeTagList tagList={tags} onSelectTag={handleTagSelect} />
      )}
      {selectedTag && <button onClick={() => setSelectedTag(null)}>Back to tags</button>}
    </div>
  );
}

export default App;


