import { useState } from 'react'
import './App.css'
import { fetchGif, fetchPhoto } from './api/media'
import SearchBar from './components/SearchBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-screen text-white w-full bg-gray-900'>
      <SearchBar/>
      
    </div>
    </>
  )
}
export default App
