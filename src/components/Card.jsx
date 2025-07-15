import React from 'react'
import Text from './Text'
import Box from './Box'
import { useNavigate } from 'react-router'
//import Context from '../context/Context';


function Card({
    id,
    ...peli


}) {

  const navigate = useNavigate();
  //const {increment} = useContext(Context)
//<div role='button' className="card__container col-12 col-xs-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3" onClick={() => navigate(`/product/${id}`)}>
// <Button className="btn d-flex btn__outline jsc" label="Agregar" onClick={() => increment({id})}/>

  return (
    
      <div role='button'  className="card__container col-12 col-xs-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3" onClick={() => navigate(`/MovieDetail/${id}`)} >
          <Box className="card__img__container">
            <img src={peli.primaryImage.url} className="card__img" alt="..." />
          </Box>
            <div className="card__body">
                <Text as="h4" className="card__title"  text={peli.primaryTitle} />
                { /* <Text as="p" className="card__text" text={`tipo: ${peli.type}`} />  */}
                { /* <Text as="p" className="" text={`startYear: ${peli.startYear}`} />  */}

            </div>
          

          
    </div>
  )
}

export default Card