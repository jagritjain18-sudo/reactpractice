import axios from 'axios'
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const GIPHY_KEY= import.meta.env.VITE_GIPHY_KEY;



export async function fetchPhoto(query, page = 1, per_page = 20) {
  try {
    const res = await axios('https://api.unsplash.com/search/photos', {
      params: { query, page, per_page },
      headers: { 
        Authorization: `Client-ID ${UNSPLASH_KEY}` 
      }
    });
    console.log(res.data); 
    return res.data.results;
  } catch (error) {
    console.error("Error details:", error.response?.data || error.message);
  }
}


