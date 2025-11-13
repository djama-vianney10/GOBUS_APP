import "./Navbar.css" 
import { Link} from "react-router-dom" 
 
function Navbar() { 

  const user = JSON.parse(localStorage.getItem("User") || "null");

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
        <li className="nav-item">
          <Link className="nav-link other-link" to={"/"}>Acceuil</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link other-link" to={"/ticket"}>Tickets</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link other-link" to={"/partern"}>Nos partenaires</Link>
        </li>
      </ul> 
      <form className="d-flex">
        {!user && (
          <>
          <Link to={"/loginClient"} className="bouton-navbar">Client</Link>
          <Link to={"/loginAgence"} className="bouton-navbar">Agence</Link>
          </>
        )}
      </form> 
    </div> 
  </div> 
</nav> 
  </div> 
  ) 
} 
 
export default Navbar