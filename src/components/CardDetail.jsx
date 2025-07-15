import React from 'react'
import Text from './Text'
import Box from './Box'


function CardDetail({
    id,
    ...peli
}) {

  console.log(id, peli)
  return (
    
      <div  className="cardDetail__container col-1" >
          <Box className="cardDetail__img__container ">
            <img src={peli.primaryImage.url} className="cardDetail__img" alt="..." />
          </Box>

          <Box className="cardDetail__body ">
                <div className='d-flex jcfs p-1'>
                  <Text as="b"  text={"Titulo: "} />
                  <Text as="span"  text={`${peli.primaryTitle}`} />
                </div>
                <div className='d-flex jcfs p-1'>
                  <Text as="b"  text={"Tipo: "} />
                  <Text as="span"  text={`${peli.type}`} />
                </div>
                <div className='d-flex jcfs p-1'>
                  <Text as="b"  text={"Genero: "} />
                  <Text as="span"  text={`${peli.genres}`} />
                </div>
                <div className='d-flex jcfs p-1'>
                  <Text as="b"  text={"Pais Origen: "} />
                  <Text as="span"  text={`${peli.originCountries[0].name}`} />
                </div>
                <div className='d-flex jcfs p-1'>
                  <Text as="b"  text={"Detalle: "} />
                  <Text as="span" text={`${peli.plot}`} />
                </div>
                <div className='d-flex jcfs p-1'>
                  <Text as="b" text={"Rating: "} />
                  <Text as="span" text={peli.rating.aggregateRating} className="tal" />
                </div>
                <div className='d-flex jcfs p-1'>
                  <Text as="b"  text={"Votos: "} />
                  <Text as="span"  text={`${peli.rating.voteCount}`} />
                </div>
                <div className='d-flex jcfs p-1'>
                  <Text as="b"  text={"Lanzamiento: "} />
                  <Text as="span"  text={`${peli.startYear}`} />
                </div>
                


          </Box>

          
    </div>
  )
}

export default CardDetail