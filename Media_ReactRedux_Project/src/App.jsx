import { useState } from 'react'
import './App.css'
import { fetchGif, fetchPhoto } from './api/media'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'
import { Routes ,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
function App() {
  return (
    <>
    <div className='h-screen text-white w-full bg-gray-900'>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/collection' element={<CollectionPage/>}/>
      </Routes>
    </div>
    </>
  )
}
export default App
