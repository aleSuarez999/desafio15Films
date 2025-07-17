import axios from "axios"

const API_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjY2YTEwNGNjY2JhZWU5MjMwMzAyZWEyODkwOTNlYSIsIm5iZiI6MTc1Mjc3MjkwMC41NTcsInN1YiI6IjY4NzkzMTI0M2NiZmJlNGExZWJhODc0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._MLV3QvjdRaVmIcvUZRXd_IyIZHpSo5lkBPczmUfBw8'

const axiosInstance = axios.create({
   // baseURL: import.meta.env.VITE_BASE_URL
   
   baseURL: "https://api.themoviedb.org/3",
    headers: {
    'Authorization': API_TOKEN
  }
})

export const getFilm2 = async (peliBuscada) => {
    
    const url = `/movie/${peliBuscada}`;
  
    const headers = {
          accept: 'application/json',
          Authorization: API_TOKEN
        };
    
    const resp = await axiosInstance.get(url, {
//          params,
          headers
        });

   // console.log (resp.data)
    return resp.data
}

export const getCatalog = async () => {
    const url = `/discover/movie`;
    const params = {
          include_adult: false,
          include_video: false,
          language: 'en-US',
          page: 1,
          sort_by: 'popularity.desc'
        };
    const headers = {
          accept: 'application/json'
          
        };

    const resp = await axiosInstance.get(url, {
          params,
          headers
        });
        //console.log(resp)
    return resp.data.results
}



export const getFilm = async (id) => {
    const resp = await axiosInstance.get(`titles/${id}`)
    //console.log (resp.data)
    return resp.data
}
