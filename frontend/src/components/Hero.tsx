import Formsearch from "./Formsearch"
import "./Hero.css"
import LearnBillet from "./LearnBillet"
import Service from "./Service"

function Hero() {

    return (
        <div className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="mt-4">
                            <h1 className="hero-title mb-4">BusGO Réservez vos billets de bus en toute simplicité</h1>
                            <p className="hero-para">Trouvez, réservez et payez vos billets de bus instantanément, sans attendre aux guichets.</p>
                            <div className="mt-4">
                               <Formsearch />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 h-100 d-flex align-items-center">
                       <div className="hero-img w-100">
                        <img src="/images/object.webp" alt="" className="img-fluid w-100" />
                       </div>
                    </div>
                </div>
                <Service />
                <LearnBillet />
            </div>
        </div>
    )
}

export default Hero