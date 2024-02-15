import React, { useState } from 'react'

function Counter() {
    const [counter, setupdate] = useState(4);
  return (
    <div className='w-full h-40 bg-zinc-800 rounded-lg mb-10 pt-5 pl-20 font-serif'>
        <h1 className='pl-10 pb-5 text-5xl'>{counter}</h1>
        <button onClick={()=>setupdate(counter + 1)} className='px-8 py-2 bg-green-500 rounded-lg'>Increment</button>
        <button onClick={()=>setupdate(counter - 1)} className='px-8 py-2 bg-green-500 ml-2 rounded-lg'>Decrement</button>
    </div>
  )
}

export default Counter