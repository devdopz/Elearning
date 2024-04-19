
import React from "react";

import Header from '../Components/Header/Header'
import SavedCard from "../Components/SavedCard/SavedCard";
const Imagetiles = () => {
  return (
    <div className="savedvideos">
      <Header />
      <h3 className="heading ml-8 mt-3 text-blue-500 text-lg">Saved</h3>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-4">

        {/* Saved Cards  */}
        <SavedCard />
        <SavedCard />
        <SavedCard />
        <SavedCard />
        <SavedCard />

      </div>
    </div>
  );
};

export default Imagetiles;
