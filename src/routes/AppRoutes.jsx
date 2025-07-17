import { BrowserRouter, Route, Routes } from "react-router"
import Home from "../pages/Home"
import "../styles/main.scss"
import Layout from "../layouts/Layout"
import MovieDetail from "../pages/MovieDetail"
import MovieDetail2 from "../pages/MovieDetail2"
import Catalog from "../pages/Catalog"
import Catalog2 from "../pages/Catalog2"

function AppRoutes() {
  return (
    <BrowserRouter> 
        <Routes> 
            <Route element={<Layout />} >  
                <Route index element={<Home />} />
                <Route path="/Catalog" element={ <Catalog />  } />
                <Route path="/Catalog2" element={ <Catalog2 />  } />
                <Route path="/MovieDetail/:id" element={ <MovieDetail  /> } />
                <Route path="/MovieDetail2/:id" element={ <MovieDetail2  /> } />
            </Route>
        </Routes>
    </BrowserRouter> 
  )
}

export default AppRoutes