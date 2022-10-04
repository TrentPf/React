import React from "react";
import Ingredient from "./Ingredient";

export default function Main() {
  return (
    <main>
      <Ingredient 
        name="Triple Sec"
      />
      <Ingredient 
        name="Lime Juice"
      />
      <Ingredient 
        name="Mezcal"
      />
      <Ingredient 
        name="Simple Syrup"
      />
    </main>
  );
};