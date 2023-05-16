import React from "react";

import {FaPizzaSlice, FaHamburger, } from "react-icons/fa";
import {GiChopsticks} from "react-icons/gi";
import {BiBowlRice} from "react-icons/bi";
import {IoFastFoodOutline} from "react-icons/io5";


const CategoryButton = ({ category, setCategory }) => {
    let icon = null;
  
    switch (category) {
      case "Indonesian":
        icon = <BiBowlRice />;
        break;
      case "Western":
        icon = <FaHamburger />;
        break;
      case "Japanese":
        icon = <GiChopsticks />;
        break;
      case "American":
        icon = <FaPizzaSlice />;
        break;
      case "All Menu":
        icon = <IoFastFoodOutline />;
        break;
      default:
        icon = <IoFastFoodOutline />;
    }
  
    return (
      <button className="category-button" onClick={() => setCategory(category)}>
        {icon}
        <div className="category-name">{category}</div>
      </button>
    );
  };
  
export default CategoryButton;
