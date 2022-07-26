import React, { useEffect, useStatus } from "react"
import { Link } from "react-router-dom"
import Logo from "../assets/images/Logo.jpg"
import Img1 from "../assets/images/Paulo2.jpeg"
import Img2 from "../assets/images/paulo3.jpg"
import Img3 from "../assets/images/paulo4.jpg"
const Inicio = () => {

    return (
        <>
            <div className="container">
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} width="80" height="80" alt="" />
                    </a>

                    <h1>Paulo Londra</h1>

                    <nav class="nav nav-pills nav-justified">
                        

                        <a class="nav-item nav-link active" href="#">Biografia</a>
                        
                        <Link to="/Comentario" class="nav-item nav-link">Comentarios</Link> 
                        
                    </nav>
                </nav>


                <div className="card mb-3 text-white bg-light">
                    <div className="row g-0">

                        <div className="col-md-2">
                            <img
                                src={Img1}
                                width="217" 
                                className="img-fluid rounded-start"
                                alt="Profile Picture"/>
                        </div>

                        <div className="col-md-8">
                            <div className="card-body text-dark">
                                
                                <h3 className="card-title text-center mb-5">Sobre el</h3>
                                <p className="card-text">
                                Paulo Londra es un cantante y compositor argentino de Rap y Trap, nacido en la ciudad de Córdoba, el 12 de abril de 1998.<br/>
                                Su vínculo con el rap comenzó cuando vio el film “8 Mile”, protagonizado por la estrella americana de rap Eminem.
                                A sus 13 años se presentó por primera vez en una competencia de Freestyle en la plaza Intendencia de su ciudad, en el torneo conocido como “Sin Escritura”. <br/>
                                El 17 de julio del 2020, Paulo Londra se convierte en papá junto con su novia Rocío Moreno, y tienen a su primera hija Isabella.<br/>
                                El 21 de febrero de ese año nace su segunda hija llamada Francisca.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="card mb-3 text-white bg-dark">
                    <div className="row g-0">

                        

                        <div className="col-md-10">
                            <div className="card-body text-light">
                                
                                <h3 className="card-title text-center mb-5">Musica</h3>
                                <p className="card-text">
                                Su álbum debut, Homerun, lanzado en el 2019 obtuvo más de 1 billón de reproducciones durante su mes de lanzamiento, 
                                mientras que su éxito mundial “Adán y Eva” se posicionó en el Top 10 de Spotify global,
                                 alcanzó el número 1 en más de 10 países, superó el billón de vistas en YouTube 
                                 y más de 1.8 billones de reproducciones combinadas. 

                                </p><br/>
                                <p>Paulo Londra ya ha colaborado con artistas internacionales como Ed Sheeran, De La Ghetto, Justin Quiles, Becky G,
                                     A Boogie Wit Da Hoodie, entre otros, y se ha presentado en importantes escenarios musicales alrededor del mundo como el Lollapalooza Argentina, 
                                     así como Palau Sant Jordi en Barcelona y el Palacio Vistalegre en Madrid, ambos con entradas agotadas. Paulo Londra continúa en su conquista global de la mano de Warner Music Latina</p>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <img
                                src={Img3}
                                width="217" 
                                className="img-fluid rounded-start"
                                alt="Profile Picture"/>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 text-white bg-light">
                    <div className="row g-0">

                        <div className="col-md-2">
                            <img
                                src={Img2}
                                width="217" 
                                className="img-fluid rounded-start"
                                alt="Profile Picture"/>
                        </div>

                        <div className="col-md-8">
                            <div className="card-body text-dark">
                                
                                <h3 className="card-title text-center mb-5">Demanda y canciones</h3>
                                <p className="card-text">
                                El artista cordobés, una de las jóvenes figuras del país, terminó en un los tribunales de Estados Unidos. Londra cuestionó en 2019 un contrato firmado en 2017 en el que le entregaba a Big Ligas los derechos de autor de cualquier obra que incluyera su voz hasta diciembre de 2020, acuerdo que se extendió hasta 2025 después de que el argentino firmara con Warner Music. <br/>
                                Tras varios años de incertidumbre, el tribunal estadounidense falló que Londra fuera liberado de cumplir con ese contrato, por lo que el popular músico argentino presentó su primer 'single' después del parón. Ahora, los seguidores del cantante disfrutan con un nuevo tema del que Bizarrap reservó el número 23 por la amistad que une a ambos argentinos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>



        </>

    )
}


export default Inicio 