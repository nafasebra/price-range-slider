import React from 'react'

function Range() {
  return (
   <div className='my-5'>
      <input type="range" min="0" max="100" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
   </div>
  )
}

export default Range