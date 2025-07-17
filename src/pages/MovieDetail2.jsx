import {  useEffect, useState } from 'react'
import { useParams } from 'react-router'
import CardDetail2 from '../components/CardDetail2'
import { getFilm2 } from '../utils/api2'

function FilmDetail() {
  
  const [film, setFilm] = useState([])

  const { id } = useParams() // leo el id que viene por el get que manda el card

  useEffect(() => {
    (id !== "") ? (
    getFilm2(id)
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
        <CardDetail2 key={film.id} {...film} />
      ) : undefined
     
    }

    </>
  )
}

export default FilmDetail