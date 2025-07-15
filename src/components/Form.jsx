import React, { useEffect, useState } from 'react'
import Text from './Text'
import Button from './Button'
import { getFilms } from '../utils/api'

function Form() {

const [value, setValue] = useState("")

const [buscado, setBuscado] = useState("")

const [films, setfilms] = useState([])

const handleSubmit = (e) => {
  e.preventDefault()
  setBuscado(value)
}

const handleChange = (e) => {
  setValue( e.target.value )
}

useEffect(() => {
  if (buscado == "")
    return
  getFilms(buscado)
  .then( data => setfilms( data) )
  .catch(err => console.error(err))

  setBuscado("")
}, [buscado])

  return (
    <>
      <form className='form mb-100' onSubmit={handleSubmit} >
          <input name="textoBuscado" type='text' placeholder='Ingrese un titulo a buscar' value={value} onChange={handleChange} />
          <Button type="submit" label="Buscar" className="btn__primary btn__outline mt-2" />
      </form>
      {
        (films.length > 0) ? ( films.map( pelis => <Text as='h3' key={pelis.id} text={pelis.primaryTitle} /> )) : undefined
           
      }
      </>
  )
}

export default Form