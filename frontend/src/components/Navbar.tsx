import { useState } from "react" 
import "./Navbar.css" 
import type { LienProps } from "../types" 
import { Link, useLocation } from "react-router-dom" 
import Tilt from "react-parallax-tilt";
 
function Navbar() { 
 
    const location = useLocation() 
 
    const [liensNav, setLienNav] = useState<LienProps[]>([ 
        { nom: "Accueil", path: "/", visible: true }, 
        { nom: "Réserver", path: "/reserver", visible: true }, 
        { nom: "Agences", path: "/agences", visible: true }, 
    ]) 
 
    const liensAffiches = liensNav.filter(lien => { 
        if (location.pathname === "/agences" && lien.nom === "Agences"){ 
            return false 
        } 
 
        return lien.visible 
    }) 
 
  return ( 
    <div> 
      <nav className="navbar navbar-expand-lg navbar-light  glass-morphisme p-4 fixed-top"> 
    <div className="container position-relative"> 
    <Link className="navbar-brand position-absolute start-50 translate-middle-x" to="/"> 
        <img title="BusGO" src="/images/logo2.png" alt="BusGO" className="logo" /> 
        <span className="logo-text">BusGO</span> 
    </Link> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 
      <span className="navbar-toggler-icon"></span> 
    </button> 
    <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
      <ul className="navbar-nav mb-2 me-auto mb-lg-0 px-3"> 
        {liensAffiches.map((lien, index) => ( 
        <li key={index} className="nav-item"> 
          <Link className={`nav-link other-link ${location.pathname === lien.path ? "active" : ""}`} to={lien.path}>{lien.nom}</Link> 
        </li> 
        ))} 
      </ul> 
      <form className="d-flex" role="search"> 
        <Tilt 
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        scale={1.1}
        glareEnable={true}
        glareMaxOpacity={0.4}
        transitionSpeed={2000}
        >
        <button className="btn btn-outline-success fw-bold me-3" type="button">Connexion</button>
        </Tilt>
        <Tilt 
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        scale={1.1}
        glareEnable={true}
        glareMaxOpacity={0.4}
        transitionSpeed={2000}
        >
        <button className="btn btn-success me-3" type="button">S'inscrire</button>
        </Tilt>
      </form> 
    </div> 
  </div> 
</nav> 
    </div> 
  ) 
} 
 
export default Navbar