import {FormEvent, useContext, useState} from 'react'
import { PriceContext } from '../context/PriceContext';

function Range() {
  const [widthSlide, setWithSlide] = useState<number>(50);
  const PriceUseContext = useContext(PriceContext);

  const ChnagePrice = (e: FormEvent<HTMLInputElement>): void => {
    PriceUseContext.setPrice(Number(e.currentTarget.value));
    setWithSlide(Number(e.currentTarget.value));
  }

  return (
   <div className='my-5 relative'>
      <span style={{width: widthSlide + "%"}} className='absolute left-0 top-[9px] rounded-tl-lg rounded-bl-lg bg-turquoise-100 h-2 transition-none z-10'></span>
      <input type="range" min="0" max="100" onChange={ChnagePrice} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
   </div>
  )
}

export default Range