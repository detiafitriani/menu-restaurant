import React, { useState } from "react";
import Image from "./components/Image";
import CategoryButton from "./components/CategoryButton";
import SearchBar from "./components/SearchBar";
import { images } from "./data/images";
import "./App.css";


const AllMenuScreen = () => {
  const [category, setCategory] = useState("All Menu");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredImages = images.filter(
    (image) =>
      (category === "All Menu" || image.category === category) &&
      (image.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="menu-list">
      <div className="filters">
        <CategoryButton category="All Menu" setCategory={setCategory} />
        <CategoryButton category="Indonesian" setCategory={setCategory} />
        <CategoryButton category="Western" setCategory={setCategory} />
        <CategoryButton category="Japanese" setCategory={setCategory} />
        <CategoryButton category="American" setCategory={setCategory} />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="images">
        {filteredImages.length > 0 ? (
          filteredImages.map((image, index) => (
            <Image key={index} name={image.name} category={image.category} image={image.image} />
          ))
        ) : (
          <div className="no-images">No images found...</div>
        )}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <AllMenuScreen />
    </div>
  );
};

export default App;
