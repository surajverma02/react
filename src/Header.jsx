import React from 'react'

function Header(props) {
  return (
    <>
        <div className="w-full h-10 bg-zinc-800 rounded-lg mb-5 flex items-center justify-between px-10">
              <h1 className='text-xl text-white font-bold'>{props.data2}</h1>
              <h1 className='text-xl text-white font-bold'>{props.data1}</h1>
              <div className="flex gap-8">
                <h4>Home</h4>
                <h4>About</h4>
                <h4>Projects</h4>
                <h4>Contact</h4>
              </div>
        </div>
    </>
  )
}

export default Header