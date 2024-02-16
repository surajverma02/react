import React from 'react'
import Header from './Header'
import Footer from './Footer'

function App() {
  var age = 20;
  var name = "Suraj";
  return (
      <>
        <div  className='bg-zinc-700 py-2 h-screen w-full text-white p-1 flex flex-col justify-between'>
          <Header  data1={age} data2={name} />
          <Footer />
        </div>        
      </>
  )
}

export default App