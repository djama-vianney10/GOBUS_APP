import "./Service.css"

function Service() {

  return (
    <div className="service container py-5 mt-5">
      <div className="row">
        <div className="mb-5">
            <p className="service-Why h5">Pourquoi nous choisir ?</p>
            <h3 className="fw-bold">Services de qualité offert</h3>
        </div>
         <div className="col-12 col-md-4">
            <div className="card shadow h-100">
                <div className="card-body d-block mx-auto text-center">
                    <div className="mb-3" style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                        src="/images/bus.png" 
                        alt="Bus" 
                        className="img-fluid"
                        style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'contain' }}
                    />
                    </div>
                    <h2 className="text-secondary fw-bold h4">Bus et Cars</h2>
                    <p className="servicePar">Voyagez à l'intérieur ou à l'exterieur du pays en choisissant votre moyen de transport sur plus d'une dizaine</p>
                </div>
            </div>
        </div>

        <div className="col-12 col-md-4">
            <div className="card shadow h-100">
                <div className="card-body d-block mx-auto text-center">
                    <div className="mb-3" style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src="/images/icon3.webp" alt="img-fluid" style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'contain' }} />
                    </div>
                    <h2 className="text-secondary fw-bold h4">Centre d'appel</h2>
                    <p className="servicePar">Pas d'internet ? Pas de soucis. Effectuez vos reservations par un simple appel téléphonique ou par whatsapp.</p>
                </div>
            </div>
        </div>

        <div className="col-12 col-md-4">
            <div className="card shadow h-100">
                <div className="card-body d-block mx-auto text-center">
                    <div className="mb-3" style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src="/images/icon4.webp" alt="img-fluid" style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'contain' }} />
                    </div>
                    <h2 className="text-secondary fw-bold h4">Transactions sécurisées</h2>
                    <p className="servicePar">Nous traitons rapidement vos demandes et, garantissons la sécurité de vos paiements.</p>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Service
