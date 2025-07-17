import React from 'react'
import Text from './Text'
import Box from './Box'
import { useNavigate } from 'react-router'
//import Context from '../context/Context';


function CardTmdb({
    id,
    ...peli


}) {

  const navigate = useNavigate();
 // console.log(peli)
  return (
    
      <div role='button'  className="card__container col-12 col-xs-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3" onClick={() => navigate(`/MovieDetail2/${id}`)} >
          <Box className="card__img__container">
            <img src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`}  className="card__img" alt="..." />
          </Box>
            <div className="card__body">
                <Text as="h4" className="card__title"  text={peli.original_title} />
                <Text as="h3" className="card__title"  text={`(${peli.release_date})`} />
                { /* <Text as="p" className="card__text" text={`tipo: ${peli.type}`} />  */}
                { /* <Text as="p" className="" text={`startYear: ${peli.startYear}`} />  */}

            </div>
          

          
    </div>
  )
}

export default CardTmdb