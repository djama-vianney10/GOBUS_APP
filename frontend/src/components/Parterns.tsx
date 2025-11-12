import "./Parterns.css"

function Parterns() {
  return (
    <div>
    <section className="parterns py-5">
      <div className="container">
        <div className="row align-item-center py-5">
          <div className="col-md-5 mb-5">
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
            <div className="p-2 bg-white rounded shadow-sm">
            <img
            src="/images/Citran.jpg"
            alt=""
            className="img-fluid w-100 h-100"
            style={{ maxHeight: "80px", width: "auto" }}
            loading="lazy"
            />
            </div>
            <div className="p-2 bg-white rounded shadow-sm">
            <img
            src="/images/SBTA.jpg"
            alt=""
            className="img-fluid w-100 h-100"
            style={{ maxHeight: "80px", width: "auto" }}
            loading="lazy"
            />
            </div>
             <div className="p-2 bg-white rounded shadow-sm">
            <img
            src="/images/SOTRA.png"
            alt=""
            className="img-fluid w-100 h-100"
            style={{ maxHeight: "80px", width: "auto" }}
            loading="lazy"
            />
            </div>
             <div className="p-2 bg-white rounded shadow-sm">
            <img
            src="/images/STL.png"
            alt=""
            className="img-fluid w-100 h-100"
            style={{ maxHeight: "80px", width: "auto" }}
            loading="lazy"
            />
            </div>
             <div className="p-2 bg-white rounded shadow-sm">
            <img
            src="/images/STM.png"
            alt=""
            className="img-fluid w-100 h-100"
            style={{ maxHeight: "50px", width: "auto" }}
            loading="lazy"
            />
            </div>
             <div className="p-2 bg-white rounded shadow-sm">
            <img
            src="/images/UTB.png"
            alt=""
            className="img-fluid w-100 h-100"
            style={{ maxHeight: "50px", width: "auto" }}
            loading="lazy"
            />
            </div>
            </div>
            </div>

          {/* Texte descriptif */}
          <div className="col-md-7 text-center">
            <h2 className="fw-bold text-success mb-4">
              Toutes les possibilités de voyage sur une seule plateforme
            </h2>
            <p className="lead  h2">
              Profitez d’une expérience de voyage simplifiée avec nos partenaires de confiance.
              Réservez vos billets facilement, où que vous alliez en Côte d’Ivoire.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Parterns
