import React from 'react'
import Text from './Text'
import Box from './Box'


function CardDetail2({
    id,
    ...peli
}) {

  console.log(id, peli)
  return (
    
      <div  className="cardDetail__container col-1" >
          <Box className="cardDetail__img__container ">
            <img src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`} className="cardDetail__img" alt="..." />
          </Box>

          <Box className="cardDetail__body ">
                <div className='d-flex jcfs p-1'>
                  <Text as="b"  text={"Titulo: "} />
                  <Text as="span"  text={`${peli.original_title}`} />
                </div>

                <div className='d-flex jcfs p-1'>
                  <Text as="b"  text={"Genre: "} />
                  <Text as="span"  text={`${peli.genres.map(obj => obj.name)}`} />
                </div>

                <div className='d-flex jcfs p-1'>
                  <Text as="b"  text={"tagline: "} />
                  <Text as="span"  text={`${peli.tagline}`} />
                </div>
                <div className='d-flex jcfs p-1'>
                  <Text as="b"  text={"Detalle: "} />
                  <Text as="span" text={`${peli.overview}`} />
                </div>
                <div className='d-flex jcfs p-1'>
                  <Text as="b" text={"Rating: "} />
                  <Text as="span" text={peli.vote_average} className="tal" />
                </div>
                <div className='d-flex jcfs p-1'>
                  <Text as="b"  text={"Votos: "} />
                  <Text as="span"  text={`${peli.vote_count}`} />
                </div>
                <div className='d-flex jcfs p-1'>
                  <Text as="b"  text={"Lanzamiento: "} />
                  <Text as="span"  text={`${peli.release_date}`} />
                </div>
                <div className='d-flex jcfs p-1'>
                  <Text as="b"  text={"languajes: "} />
                  <Text as="span"  text={`${peli.spoken_languages.map(obj => obj.name)}`} />
                </div>
                


          </Box>

          
    </div>
  )
}

export default CardDetail2