import { useState } from 'react'
import './App.css'
import { fetchPhoto } from './api/media'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-screen text-white w-full bg-gray-900'>
      <button onClick={()=>fetchPhoto('cat')}>Click me</button>
    </div>
    </>
  )
}

export default App
