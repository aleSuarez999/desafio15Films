import React, { useContext, useEffect, useState } from 'react'
import Text from '../components/Text'

import { getCatalog } from '../utils/api2'
import CardTmdb from '../components/CardTmdb'

export default function Catalog2() {
  
const [films, setFilms] = useState([])

useEffect(() => {
//  getFilms("x")
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
                  <CardTmdb key={films1.id} {...films1} />
              )
            ):undefined  
        }
          </div>
    </>
  )
}

