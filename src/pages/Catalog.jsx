import React, { useContext, useEffect, useState } from 'react'
import Text from '../components/Text'
import Card from '../components/Card'
import { getCatalog } from '../utils/api'

export default function Catalog() {
  
const [films, setFilms] = useState([])

useEffect(() => {

  getCatalog()
  
  .then( data => setFilms(data) )
  .catch(err => console.error(err))
  
    }, [])
    
    
 // }, [])

 return (
  
  <>
        <Text as="h2" text="Peliculas" />
        <div className='product__grid'>
        {
            (films.length > 8) ? (
              films.map(films1 => 
                  <Card key={films1.id} {...films1} />
              )
            ):undefined
        }
          </div>
    </>
  )
}

