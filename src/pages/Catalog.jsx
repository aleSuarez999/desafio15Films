import React, { useContext, useEffect, useState } from 'react'
import Text from '../components/Text'
import Card from '../components/Card'
import { getFilms } from '../utils/api'

export default function Products() {
  
const [films, setFilms] = useState([])

useEffect(() => {
  getFilms("a")
  .then( data => setFilms( data) )
  .catch(err => console.error(err))
  
  getFilms("b")
  .then( data => setFilms( ...films, data ) )
  .catch(err => console.error(err))
  


}, [])

 return (
  <>
        <Text as="h2" text="Peliculas" />
        <div className='product__grid'>
        {
            films.map(films => 
                <Card key={films.id} {...films} />
            )
        }
          </div>
    </>
  )
}

