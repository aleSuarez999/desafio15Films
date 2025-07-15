import React from 'react'
import Text from './Text'
import { NavLink } from 'react-router'

function Navbar() {
  return (
    <header className='header__content' >  
        <div className='header__container'>
              <NavLink to="/" >
                <Text as="h1" text="MovieDB" />
              </NavLink>
            <nav>
                <NavLink to="/Catalog" >Catalogo</NavLink>
            </nav>
        </div>
    </header>
  )
}

export default Navbar