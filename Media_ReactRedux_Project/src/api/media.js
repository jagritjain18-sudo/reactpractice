import axios from 'axios'
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const GIPHY_KEY= import.meta.env.VITE_GIPHY_KEY;

export async function fetchPhoto(query, page = 10, per_page = 20) {
  
    const res = await axios('https://api.unsplash.com/search/photos', {
      params: { query, page, per_page },
      headers: { 
        Authorization: `Client-ID ${UNSPLASH_KEY}` 
      }
    });
    return res.data;
  
}

export async function fetchGif(query, per_page = 20) {

    const res = await axios('https://api.giphy.com/v1/gifs/search', {
      params: {
        api_key: GIPHY_KEY,
        q: query,
        limit: per_page
      }
    });
    
    return res.data;
}

export async function fetchStickers(query, per_page = 20) {
  try {
    const res = await axios('https://api.giphy.com/v1/stickers/search', {
      params: {
        api_key: GIPHY_KEY,
        q: query,
        limit: per_page
      }
    }); 
    return res.data;
    

  } catch (error) {
    console.error("Error details:", error.response?.data || error.message);
  }
}
