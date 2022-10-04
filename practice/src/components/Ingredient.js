import React from "react";

export default function Ingredient(props) {
  return (
    <div className="ingredient-card">
      <div className = "ingredient-card-contents">
        <img src="./images/icons8-liquor-64.png" alt="Triple sec"/>
        <h3>{props.name}</h3>
        <input type="submit" value="Add to shelf"></input>
      </div>
    </div>
  )
};