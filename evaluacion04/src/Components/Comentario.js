import React, {useEffect, useStatus} from "react"
import { Link } from "react-router-dom"
import Logo from "../assets/images/Logo.jpg"
import Paulo from '../assets/images/paulo_londra_32d7bc17.jpeg'
import swal from "sweetalert";

const Comentario = () => {
    const mostrarAlerta = () => {swal("Por favor agregue un comentario")}




    return (
        
        <>
           

            <div className="container">

            <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} width="80" height="80" alt="" />
                    </a>

                    <h1>Paulo Londra</h1>

                    <nav class="nav nav-pills nav-justified">
                        

                        <Link to="/" class="nav-item nav-link">Biografia</Link> 
                        
                        <Link to="/Comentario" class="nav-item nav-link">Comentarios</Link> 
                       
                        
                    </nav>
                </nav>

                <div className="row">
                    <div className="col-12">
                        <h1 className="titulo text-center mb-4">COMENTARIOS</h1>
                    </div>
                </div>


                <div className="row">

                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={Paulo} alt="Card image cap"/>
                                <div className="card-body">
                                    <p className="card-text"> Paulo Londra</p>
                                </div>
                        </div>
                    </div>




                    <div className="col-4">
                        
                        <label htmlFor="comentar"> Agregue un comentario</label> <br/>
                        <input type="text" 
                                
                               name="comentar"
                               placeholder="Ej.: Que bonito paisaje"
                              
                               /> <br/> <br/>

                        <input type="checkbox" value="true" name="emoji"/>
                        <label htmlFor="emoji"> Agregar emoji 💖​</label> <br/> <br/>

                        
                       <button onClick={() => mostrarAlerta()}  > Publicar comentario</button> 

                     </div>



                    <div className="col-4">COMENTARIOS </div>
                </div>




            </div>
        </>













    )

}

export default Comentario