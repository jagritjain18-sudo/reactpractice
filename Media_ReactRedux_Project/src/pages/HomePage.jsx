import React from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { fetchGif, fetchPhoto } from '../api/media'
const HomePage = () => {
  return (
    <>
     <SearchBar/>
      <Tabs/>
      <ResultGrid/>
    </>
  )
}

export default HomePage