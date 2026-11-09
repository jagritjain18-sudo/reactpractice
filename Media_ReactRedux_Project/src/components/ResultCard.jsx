import React from 'react'

const ResultCard = ({item}) => {
  return (
    <>
   
    <img src={item.src} alt={item.title || 'media'} className="w-full rounded-lg object-cover" loading="lazy"/>
    <div className='flex justify-between p-2 gap-3 wrap-normal'>
    <h1>{item.title ||'Untitled Media'}</h1>
    <button onClick={addToCollection(item)} className='bg-blue-700 text-2xl p-2 rounded-2xl h-12'>Save</button>
    </div>
    </>
  )
}

export default ResultCard