import React from 'react'
import Text from './Text'
import Box from './Box'
import { useNavigate } from 'react-router'
//import Context from '../context/Context';


function Card2({
    id,
    ...peli


}) {

  const navigate = useNavigate();
  //const {increment} = useContext(Context)
//<div role='button' className="card__container col-12 col-xs-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3" onClick={() => navigate(`/product/${id}`)}>
// <Button className="btn d-flex btn__outline jsc" label="Agregar" onClick={() => increment({id})}/>

  return (
    
      <div role='button'  className="card__container col-12 col-xs-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3" onClick={() => navigate(`/MovieDetail2/${id}`)} >
          <Box className="card__img__container">
            <img src={peli.primaryImage.url} className="card__img" alt="..." />
          </Box>
            <div className="card__body">
                <Text as="h4" className="card__title"  text={peli.title} />


            </div>
          

          
    </div>
  )
}

export default Card2