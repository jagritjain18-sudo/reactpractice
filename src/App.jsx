import react from 'react'

const App= ()=>{
  return(
    <div className=" h-screen w-screen flex  bg-blue-600 justify-center items-center
    flex-fit">
  <div className="w-1/6 h-full flex justify-center items-center  p-5 ">
  <div className='w-full h-full bg-amber-600 rounded-xl '></div>
  </div>
  <div className="w-5/6 h-full bg-green-400 flex rounded-xl"></div>
</div>
  )
}

export default App