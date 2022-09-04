import { useState } from "react";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="relative flex items-center justify-center overflow-hidden w-full py-4 min-h-[calc(100vh-50px)]">
        <CardContainer />
      </div>
      <Footer />
    </>
  );
}

export default App;
