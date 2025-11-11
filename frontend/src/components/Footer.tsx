import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"

function Footer() {
  return (
    <div>
    <section className="w-100 mt-0" style={{ backgroundColor: '#375d37ff', minHeight: '500px', paddingBottom: '100px' }}>
    <footer className="text-white py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-4">
          <h5>À propos de Bus GO</h5>
          <p>
            Bus GO est une plateforme sécurisée pour réserver vos trajets facilement et en toute confiance.
            Notre objectif est d'assurer votre confort et votre sécurité lors de vos déplacements.
          </p>
        </div>

        <div className="col-md-2 mb-4">
          <h5>Liens utiles</h5>
          <ul className="list-unstyled">
            <li><a href="/" className="text-white text-decoration-none">Accueil</a></li>
            <li><a href="/reserver" className="text-white text-decoration-none">Réserver</a></li>
            <li><a href="/faq" className="text-white text-decoration-none">FAQ</a></li>
            <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
          </ul>
        </div>

        <div className="col-md-3 mb-4">
          <h5>Suivez-nous</h5>
          <div className="d-flex gap-3 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="col-md-3 mb-4 text-center text-md-start">
          <h5>Téléchargez notre application</h5>
          <div className="d-flex gap-2 mt-2 justify-content-center justify-content-md-start">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img src="/images/google_store.png" alt="Google Play" style={{ maxWidth: '120px' }} />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src="/images/apple-store.webp" alt="App Store" style={{ maxWidth: '120px' }} />
            </a>
          </div>
        </div>

      </div>

      <hr className="border-light" />
      <div className="text-center small">
        &copy; 2025 Bus GO. Tous droits réservés.
      </div>
    </div>
  </footer>
</section>
    </div>
  )
}

export default Footer
