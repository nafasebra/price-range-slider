import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import { PriceProvider } from "./context/PriceContext";

function App() {
  return (
    <PriceProvider>
      <div className="relative flex flex-col items-center justify-center overflow-hidden w-full py-4 min-h-[calc(100vh-50px)]">
        <div className="bg-circle px-1 py-10 mb-5 text-dark flex flex-col justify-center items-center">
          <h1 className="text-2xl pb-4 font-semibold">Simple, traffic-based pricing</h1>
          <p className="text-sm">Sign-up for our 30-day trial, No credit card required</p>
        </div>
        <CardContainer />
      </div>
      <Footer />
    </PriceProvider>
  );
}

export default App;
