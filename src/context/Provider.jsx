//import { useEffect, useState } from "react"
import Context from "./Context"
//import {getFilms} from "../utils/api"



function Provider({children}) {


    return (
        <Context.Provider value={{
//          films, 
          }}>
            {children}
        </Context.Provider>
  )
}

export default Provider