import { useState } from 'react'
import './App.css'
import { fetchGif, fetchPhoto } from './api/media'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'
function App() {
  return (
    <>
    <div className='h-screen text-white w-full bg-gray-900'>
      <SearchBar/>
      <Tabs/>
      <ResultGrid/>
    </div>
    </>
  )
}
export default App
