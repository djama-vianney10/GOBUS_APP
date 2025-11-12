import { FaSearch, FaTicketAlt, FaBus } from "react-icons/fa"
import "./LearnBillet.css"

function LearnBillet() {
  return (
    <div className="container-fluid learnBillet py-5" data-aos="fade-down" data-aos-delay="300">
      <div className="row py-5">
            <div className="col-12 col-md-6">
                <div className="imageBillet">
                    <img 
                    src="/images/hommeheureux.png" 
                    alt="Réserver billet" 
                    className="img-fluid h-100 w-100" 
                    />
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="method-billet">
                    <h1 className="text-secondary h5">Simple et rapide</h1>
                    <h3 className="fw-bold mb-5">Reservez votre billet en 3 étapes</h3>
                    <div className="d-flex flex-column mb-4">
                    <div className="d-flex">
                        <div className="method-icon1 d-flex justify-content-center align-items-center">
                            <FaSearch size={20} color="white"  />
                        </div>
                        <div className="d-flex flex-column ms-3">
                            <span className="text-secondary h5 fw-bold">Recherchez</span>
                            <span className="methodPara">Choisissez votre endroit préféré. Peu importe où vous voyagez.</span>
                        </div>
                    </div>
                </div>

               <div className="d-flex flex-column mb-4">
                    <div className="d-flex">
                        <div className="method-icon2 d-flex justify-content-center align-items-center">
                            <FaTicketAlt size={20} color="white" />
                        </div>
                        <div className="d-flex flex-column ms-3">
                            <span className="text-secondary h5 fw-bold">Reservez</span>
                            <span className="methodPara">Après avoir trouvé votre endroit idéal, effectuez votre paiement en ligne grâce à plusieurs moyens de paiement.</span>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column mb-4">
                    <div className="d-flex">
                        <div className="method-icon3 d-flex justify-content-center align-items-center">
                            <FaBus size={20} color="white" />
                        </div>
                        <div className="d-flex flex-column ms-3">
                            <span className="text-secondary h5 fw-bold">Embarquez</span>
                            <span className="methodPara">Enfin, assurez-vous d'arriver à l'agence de voyage à temps et savourez pleinement votre séjour..</span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default LearnBillet

