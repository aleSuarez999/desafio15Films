import {  useEffect, useState } from 'react'
import { useParams } from 'react-router'
import CardDetail from '../components/CardDetail'
import { getFilm } from '../utils/api'

function FilmDetail() {
  
  const [film, setFilm] = useState([])

  const { id } = useParams() // leo el id que viene por el get que manda el card

  useEffect(() => {
    (id !== "") ? (
    getFilm(id)
    .then( obj =>  setFilm(obj) )
    .catch(err => console.error(err))
    .finally(setFilm(""))
 
    ): undefined
  }, [])

  
  
  return (
    <>
       {
      (film != "") ? 
      (
      <CardDetail key={film.id} {...film} />
      ) : undefined
     
    }

    </>
  )
}

export default FilmDetail