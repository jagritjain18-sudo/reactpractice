import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGif, fetchPhoto ,fetchStickers } from '../api/media'
import { setError,setLoading,setResult } from '../redux/Feature/searchSlice'
import ResultCard from './ResultCard'
const ResultGrid = () => {
    const {query,loading,error,result,activeTab}=useSelector((store)=>store.search)
    const dispatch=useDispatch()
    useEffect(function(){
    const getData = async()=>{
        try{
            dispatch(setLoading())
        
        let data=[]
        if(activeTab=='photos'){
            let res=[];
            if(!query){
                 res=await fetchPhoto('random');
            }else{
                 res=await fetchPhoto(query);
           }
            data=res.results.map((item)=>({
                id:item.id,
                type:'photo',
                title:item.alt_description,
                thumbnail: item.urls.small,
                src: item.urls.full,
                url:item.links.html
            }));
        }
        if(activeTab=='gif'){
            let res=[];
            if(!query){
                 res=await fetchGif('random');
            }else{
                 res=await fetchGif(query);
            }
            data=res.data.map((item)=>({
                id: item.id,
                type: 'Gif',
                title: item.title,
                thumbnail: item.images.downsized.url, 
                src: item.images.original.url,
                url: item.url
            }))
        }
        if(activeTab=='stickers'){
            let res=[];
            if(!query){
                 res=await fetchStickers('random');
            }else{
                 res=await fetchStickers(query);
            }
            data=res.data.map((item)=>({
                id: item.id,
                type: 'Sticker',
                title: item.title,
                thumbnail: item.images.downsized.url, 
                src: item.images.original.url,        
                url: item.url
            }))
        }
        dispatch(setResult(data));
       }catch (err){
        dispatch(setError(err.message))
       }
    }
    getData();
    },[query, activeTab,dispatch])

    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading...</h1>
  return (
    <>
    <div className='columns-2 md:columns-3 lg:columns-4 gap-6 w-full overflow-auto px-10 space-y-6 bg-gray-900'>
      {result.map((element, index) => {
        return (
          <div key={index} className="break-inside-avoid">
            <ResultCard item={element}/>
          </div>
        );
      })}
    </div>
    </>
  )
}

export default ResultGrid