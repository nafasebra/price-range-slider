import { useContext, useEffect, useState } from "react";
import Range from "./Range";


function CardContainer() {
  return (
    <div className="bg-white text-dark w-[90%] md:w-[556px] rounded-xl mx-auto p-7">
      <div className="flex justify-between items-center">
        <p className="opacity-70 uppercase">100k pageviews</p>
        <div className="flex items-center">
          <p className="text-4xl font-semibold">$16.00</p>
          <p className="pl-3 opacity-70">/ month</p>
        </div>
      </div>
      <Range />
    </div>
  );
}

export default CardContainer;
