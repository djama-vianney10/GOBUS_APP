import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import "./Conseil.css"
import Footer from "../components/Footer"

function Conseil() {

    const [load, setLoad] = useState(true)
    
      useEffect(() => {
    
        setTimeout(() => {
          setLoad(false)
        }, 2000)
    
      },[])

  return (
    <>
    {load ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
           <img src="/images/logo2.png" alt="" className="visually-hidden" />
          </div>
        </div>
    ):(
        <div>
            <Navbar />
            
            <section className="conseils d-flex justify-content-center align-items-center vh-100">
            <div className="container">
            <div
            className="text-center mb-5"
            data-aos="fade-down"
          data-aos-delay="200"
            >
          <h1 className="fw-bold text-danger">
            Collaborez avec nous pour votre sécurité
          </h1>
          <p className="text-muted mt-3 w-75 mx-auto">
            Chez <span className="fw-semibold text-success">BusGO</span>, nous
            nous engageons à offrir une plateforme fiable et sécurisée. Ensemble,
            prévenons les escroqueries et protégeons votre expérience de voyage.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="card h-100 shadow-lg border-0 conseil-card text-center">
              <div className="card-body p-4">
                {/*Ajout d'une icon plus tard */}
                <h4 className="fw-semibold">Protégez vos informations</h4>
                <p className="text-muted mt-2">
                  Ne partagez jamais vos identifiants, codes de paiement ou
                  informations personnelles avec des inconnus.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4" data-aos="zoom-in" data-aos-delay="500">
            <div className="card h-100 shadow-lg border-0 conseil-card text-center">
              <div className="card-body p-4">
                {/*Ajout d'une icon plus tard */}
                <h4 className="fw-semibold">Signalez les activités suspectes</h4>
                <p className="text-muted mt-2">
                  Si vous remarquez une tentative d’arnaque ou une offre
                  douteuse, signalez-la immédiatement à notre équipe.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4" data-aos="flip-left" data-aos-delay="700">
            <div className="card h-100 shadow-lg border-0 conseil-card text-center">
              <div className="card-body p-4">
                {/*Ajout d'une icon plus tard */}
                <h4 className="fw-semibold">Restons solidaires</h4>
                <p className="text-muted mt-2">
                  Votre collaboration renforce la sécurité commune. Ensemble,
                  faisons de BusGO une plateforme exemplaire.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="alert alert-info mt-5 text-center fw-semibold"
          role="alert"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          Votre vigilance est notre meilleure protection. Merci de faire partie
          d’une communauté responsable 
        </div>
      </div>
            </section>

            <Footer />
        </div>
    )}
      
    </>
  )
}

export default Conseil
