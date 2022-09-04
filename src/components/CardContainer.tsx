import { useContext, useEffect, useState } from "react";
import Badge from "./Badge";
import Range from "./Range";
import Toggle from "./Toggle";

function CardContainer() {
  return (
    <div className="bg-white text-dark w-[90%] md:w-[556px] rounded-xl mx-auto">
      <div className="p-7">
        <div className="flex justify-between items-center">
          <p className="opacity-70 uppercase">100k pageviews</p>
          <div className="flex items-center">
            <p className="text-4xl font-semibold">$16.00</p>
            <p className="pl-3 opacity-70">/ month</p>
          </div>
        </div>
        <Range />
        <div className="flex items-center justify-end pt-7">
          <p>Annualy</p>
          <Toggle />
          <p>Monthly</p>
          <Badge text="28% discount" />
        </div>
      </div>
      <hr />
      <div className="p-7 flex flex-col md:flex-row items-center justify-between">
        <ul>
          <li className="flex items-center py-1">
            <svg className="w-5 h-5 text-turquoise-200 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <p className="opacity-80">option 1</p>
          </li>
          <li className="flex items-center py-1">
            <svg className="w-5 h-5 text-turquoise-200 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <p className="opacity-80">option 1</p>
          </li>
          <li className="flex items-center py-1">
            <svg className="w-5 h-5 text-turquoise-200 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <p className="opacity-80">option 1</p>
          </li>
        </ul>
        <a href="#" className="bg-dark w-[90%] mx-auto md:w-[170px] md:mx-0 rounded-full text-center py-3 text-gray-300 hover:text-white">
          Start my trial
        </a>
      </div>
    </div>
  );
}

export default CardContainer;
