import axios from "axios"

const axiosInstance = axios.create({
   // baseURL: import.meta.env.VITE_BASE_URL
   baseURL: "https://api.imdbapi.dev/"
})

export const getFilms = async (peliBuscada) => {
    const resp = await axiosInstance.get(`search/titles?query=${peliBuscada}`)
    //console.log (resp.data)
    return resp.data.titles
}

export const getCatalog = async () => {

    const resp1 = await axiosInstance.get(`search/titles?query=F1`)

    return resp1.data.titles
}



export const getFilm = async (id) => {
    const resp = await axiosInstance.get(`titles/${id}`)
    //console.log (resp.data)
    return resp.data
}
