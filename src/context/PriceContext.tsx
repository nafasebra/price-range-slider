import {createContext, useState} from 'react'

type ContextType = {
   price: number;
   setPrice: (a: number) => void;
}

type propType = {
   children: JSX.Element[] | JSX.Element;
}

export const PriceContext = createContext<ContextType>({
   price: 0,
   setPrice: () => {},
});

export function PriceProvider({children}: propType) {
   const [price, setPrice] = useState<number>(0);

   return (
      <PriceContext.Provider value={{price, setPrice}}>
         {children}
      </PriceContext.Provider>
   )
}