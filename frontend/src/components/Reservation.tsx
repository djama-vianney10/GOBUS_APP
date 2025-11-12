import "./RerserverBillet.css"

function Reservation() {

  return (
    <div>
      <section className="py-5" >
      <div className="container">
        <h3 className="text-center mb-5 text-dark">Avis de nos utilisateurs</h3>

        <div id="avisCarousel" className="carousel slide" data-bs-ride="carousel">
          
        
          <div className="carousel-indicators mb-4">
            <button type="button" data-bs-target="#avisCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Avis 1"></button>
            <button type="button" data-bs-target="#avisCarousel" data-bs-slide-to="1" aria-label="Avis 2"></button>
            <button type="button" data-bs-target="#avisCarousel" data-bs-slide-to="2" aria-label="Avis 3"></button>
          </div>

          <div className="carousel-inner">

          
            <div className="carousel-item active">
              <div className="d-flex flex-column align-items-center">
                <img
                  src="/images/Femme1.jpeg"
                  alt="Avatar Aïcha"
                  className="rounded-circle mb-3 shadow"
                  style={{ width: '100px',
                     height: '100px',
                     objectFit: 'cover'}}
                />
                <div className="p-5 rounded shadow" style={{ maxWidth: '700px', backgroundColor: 'rgba(255,255,255,0.9)' }}>
                  <p className="mb-3 text-dark text-center fs-5">“Excellent service !”</p>
                  <small className="d-block text-center text-dark mb-3">- Aïcha K.</small>
                  <div className="text-center">
                    <span style={{ fontSize: '32px', color: '#FFC107' }}>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                  </div>
                </div>
              </div>
            </div>

          
            <div className="carousel-item">
              <div className="d-flex flex-column align-items-center">
              <img
                    src="/images/Homme1.jpeg"
                    alt="Avatar Kouadio"
                    className="rounded-circle mb-3 shadow"
                    style={{ 
                        width: '100px', 
                        height: '100px', 
                        objectFit: 'cover'  
                    }}
                    />
                <div className="p-5 rounded shadow" style={{ maxWidth: '700px', backgroundColor: 'rgba(255,255,255,0.9)' }}>
                  <p className="mb-3 text-dark text-center fs-5">“Application très pratique pour réserver mes trajets. J’aime la transparence des tarifs et la sécurité à bord.”</p>
                  <small className="d-block text-center text-dark mb-3">- Kouadio R.</small>
                  <div className="text-center">
                    <span style={{ fontSize: '32px', color: '#FFC107' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="d-flex flex-column align-items-center">
                <img
                  src="/images/Femme2.jpeg"
                  alt="Avatar Fatou"
                  className="rounded-circle mb-3 shadow"
                  style={{ width: '100px',
                          height: '100px',
                          objectFit: 'cover' }}
                />
                <div className="p-5 rounded shadow" style={{ maxWidth: '700px', backgroundColor: 'rgba(255,255,255,0.9)' }}>
                  <p className="mb-3 text-dark text-center fs-5">"Service rapide et ponctuel ! Les bus sont propres et confortables. Je recommande vivement Bus GO pour vos déplacements.”</p>
                  <small className="d-block text-center text-dark mb-3">- Fatou Savadogo</small>
                  <div className="text-center">
                    <span style={{ fontSize: '32px', color: '#FFC107' }}>&#9733;&#9733;&#9733;&#9734;&#9734;</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#avisCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Précédent</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#avisCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Suivant</span>
          </button>

        </div>
      </div>
    
     <div style={{ position: "relative", width: "100%", overflow: "hidden", marginTop: "100px" }}>
            
            <img
                src="/images/voyage.jpg"
               alt="bus"
                style={{
                width: "100%",           
                maxHeight: "400px",      
                objectFit: "cover",     
                display: "block",
                animation: "zoomInOut 6s ease-in-out infinite",

                }}
            />


            <a href="/reserver"

                className="btn text-white"
                style={{
                backgroundColor: "#ef8b27b9",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "18px",
                borderRadius: "30px",
                padding: "10px 25px",
                textDecoration: "none",
                }}
            >
                Réservez maintenant
            </a>

            <style>
                {`
                @keyframes zoomInOut {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.03); } /* zoom léger */
                    100% { transform: scale(1); }
                }
                `}
            </style>
            </div>
                </section>
    </div>
  )
}

export default Reservation
