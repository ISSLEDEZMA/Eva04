import React, {useEffect, useStatus} from "react"
import {Routes, Route, Link} from "react-router-dom"
import Inicio from "./Components/Inicio"
import Comentario from "./Components/Comentario"




const App = () => {

  return (
    <>
   
    <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/Comentario" element={<Comentario/>} />

    </Routes>
    </>
  )
}


export default App