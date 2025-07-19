import React from 'react'
import Text from './Text'
import Box from './Box'
import { useNavigate } from 'react-router'

function Card( peli ) {
    const navigate = useNavigate();
   // console.log(peli.primaryImage?.url)
    
     if (!peli) return null;

    return (
    
  
        <div role='button'  className="card__container col-12 col-xs-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3" onClick={() => navigate(`/MovieDetail/${peli.id}`)} >
            <Box className="card__img__container">
              <img src={peli.primaryImage?.url} className="card__img" alt="..." />
            </Box>
              <div className="card__body">
                  <Text as="h4" className="card__title"  text={peli.primaryTitle} />

              </div>
      </div>
    

      
  )
}

export default Card