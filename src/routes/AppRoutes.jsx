import { BrowserRouter, Route, Routes } from "react-router"
import Home from "../pages/Home"
import "../styles/main.scss"
import Layout from "../layouts/Layout"
import MovieDetail from "../pages/MovieDetail"
import Catalog from "../pages/Catalog"

function AppRoutes() {
  return (
    <BrowserRouter> 
        <Routes> 
            <Route element={<Layout />} >  
                <Route index element={<Home />} />
                <Route path="/Catalog" element={ <Catalog />  } />
                <Route path="/MovieDetail/:id" element={ <MovieDetail  /> } />
            </Route>
        </Routes>
    </BrowserRouter> 
  )
}

export default AppRoutes