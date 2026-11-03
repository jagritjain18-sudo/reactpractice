import { useState } from 'react'
import './App.css'
import { fetchGif, fetchPhoto } from './api/media'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-screen text-white w-full bg-gray-900'>
      <SearchBar/>
      <Tabs/>
    </div>
    </>
  )
}
export default App
