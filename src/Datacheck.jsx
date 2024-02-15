import React from 'react'

function Datacheck() {
  const name = "Suraj";
  const age = 20;
return (
  <>
    <div className='w-full h-20 bg-zinc-800 rounded-lg mb-10 pt-2 font-serif'>
        <h1 className='text-lg px-10'>Name : {name}</h1>
        <h1 className='text-lg px-10'>Age : {age}</h1>
    </div>
  </>
)
}

export default Datacheck