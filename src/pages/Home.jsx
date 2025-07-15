
import { useState } from 'react'
import Form from '../components/Form'
import Text from '../components/Text'

export default function Home() {
  
  //const [first, setfirst] = useState(second)



  return (

  <>
      <Text as="h1" text="Bienvenido a MovieDB" />
          <Text as="p" text="Miles de películas de cine, programas de TV y series por descubrir. Busca ahora tu preferida."/>
          <Form  />

    </>
  )
}
