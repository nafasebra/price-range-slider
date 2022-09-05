import { createContext, useState } from "react";

type ContextType = {
  price: number;
  isYearly: boolean;
  setPrice: (a: number) => void;
  setIsYearly: (a: boolean) => void;
};

type propType = {
  children: JSX.Element[] | JSX.Element;
};

export const PriceContext = createContext<ContextType>({
  price: 0,
  isYearly: false,
  setPrice: () => {},
  setIsYearly: () => {},
});

export function PriceProvider({ children }: propType) {
  const [price, setPrice] = useState<number>(0);
  const [isYearly, setIsYearly] = useState<boolean>(false);

  return (
    <PriceContext.Provider value={{ price, isYearly, setPrice, setIsYearly }}>
      {children}
    </PriceContext.Provider>
  );
}
