import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
import "./Footer.css"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div>
    <section className="w-100 mt-0" style={{ backgroundColor: '#2e5e2eff', minHeight: '200px', paddingBottom: '50px' }}>
    <footer className="text-white py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="m-0">
            <img src="/images/logo2.png" alt="logo" className="img-fluid w-25 m-0" />
            <span className="footer-logo">BusGO</span>
          </div>
          <h5 className="text-uppercase">À propos de Bus GO</h5>
          <p className="lead">
            Bus GO est une plateforme sécurisée pour réserver vos trajets facilement et en toute confiance.
            Notre objectif est d'assurer votre confort et votre sécurité lors de vos déplacements.
          </p>
        </div>

        <div className="col-md-2 mb-4">
          <h5 className="text-uppercase">Liens utiles</h5>
          <ul className="list-unstyled">
            <li className="mb-2"><Link to="/" className="text-white text-decoration-none h5">Accueil</Link></li>
            <li className="mb-2"><Link to="/reserver" className="text-white text-decoration-none h5">Réserver</Link></li>
            <li className="mb-2"><Link to="/faq" className="text-white text-decoration-none h5">FAQ</Link></li>
            <li className="mb-2"><Link to="/contact" className="text-white text-decoration-none h5">Contact</Link></li>
          </ul>
        </div>

        <div className="col-md-3 mb-4">
          <h5 className="text-uppercase">Suivez-nous</h5>
          <div className="d-flex gap-3 mt-2">
            <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaFacebookF size={30} />
            </Link>
            <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaInstagram size={30}  />
            </Link>
            <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaTwitter size={30}  />
            </Link>
          </div>
        </div>

        <div className="col-md-3 mb-4 text-center text-md-start">
          <h5>Téléchargez notre application</h5>
          <div className="d-flex gap-2 mt-2 justify-content-center justify-content-md-start">
            <Link to="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img src="/images/google_store.png" alt="Google Play" style={{ maxWidth: '150px' }} />
            </Link>
            <Link to="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src="/images/apple-store.webp" alt="AppStore" className="img-fluid AppStore" style={{ maxWidth: '150px' }} />
            </Link>
          </div>
        </div>

      </div>

      <hr className="border-light" />
      <div className="text-center small h2">
        &copy; 2025 Bus GO. Tous droits réservés.
      </div>
    </div>
  </footer>
</section>
    </div>
  )
}

export default Footer
