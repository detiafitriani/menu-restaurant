import React, { useState } from "react";
import Image from "../components/Image";
import CategoryButton from "../components/CategoryButton";
import SearchBar from "../components/SearchBar";
import { images } from "../data/images";

const HomeScreen = () => {
  // Set the initial state for category and search term using the useState hook
  const [category, setCategory] = useState("All Menu");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the images based on the category and search term
  const filteredImages = images.filter(
    (image) =>
      (category === "All Menu" || image.category === category) &&
      (image.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const categoryIcon = {
    "All Menu": "https://example.com/all-menu-icon.png",
    Indonesian: "https://example.com/indonesian-icon.png",
    Western: "https://banner2.cleanpng.com/20180623/qxw/kisspng-pasta-primavera-italian-cuisine-pizza-spaghetti-wi-shawarma-sandwich-5b2e4e014cb2b8.8567791615297612813142.jpg",
    Japanese: "https://example.com/japanese-icon.png",
    American: "https://example.com/american-icon.png",
  };

  return (
    <div className="menu-title">
  <i className="menu-icon fas fa-utensils"></i>
  <h1>All Menu</h1>
      <div className="filters">
       {Object.keys(categoryIcon).map((categoryName, index) => (
          <CategoryButton
            key={index}
            category={categoryName}
            setCategory={setCategory}
            icon={categoryIcon[categoryName]} // Menambahkan prop icon dengan URL icon
          />
        ))}
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

export default HomeScreen;
