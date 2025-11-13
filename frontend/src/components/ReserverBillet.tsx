import { Link } from "react-router-dom"
import Formsearch from "./Formsearch"

function ReserverBillet() {


  return (
    <div>
          <section className="search">
           <div className="container">
                <div className="row align-items-center vh-100">
                    <div className="col-12 col-md-7">
                        <Formsearch />
                    </div>
                </div>
           </div>
        </section>
      <section className="Bus py-5 mt-5">
            <div className="container mt-5 py-5">
            <div className="row">
                <h2 className="mb-4">BusGO, La nouvelle façon de voyager.</h2>
                <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay="400">
                <div className="card shadow border-0 h-100 glass-effect">
                <div className="card-body text-center">
                    <div
                    className="mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center bg-warning-subtle"
                    style={{ width: "100px", height: "100px" }}
                    >
                    <img
                        src="/images/travel.png"
                        alt="Réservation BusGO"
                        className="img-fluid"
                        style={{ maxWidth: "60px" }}
                    />
                    </div>
                    <h3 className="fw-semibold text-success">Réservation rapide</h3>
                    <p className="text-muted mt-2">
                    Recherchez, réservez et payez vos billets en quelques clics, 
                    sans files d’attente.
                    </p>
                </div>
                </div>
            </div>

            <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay="400">
                <div className="card shadow border-0 h-100 glass-effect">
                <div className="card-body text-center">
                    <div
                    className="mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center bg-warning-subtle"
                    style={{ width: "100px", height: "100px" }}
                    >
                    <img
                        src="/images/m1.png"
                        alt="Réservation BusGO"
                        className="img-fluid"
                        style={{ maxWidth: "60px" }}
                    />
                    </div>
                    <h3 className="fw-semibold text-success">Economisez en transport</h3>
                    <p className="text-muted mt-2">
                    Explorez l'intérieur du pays en sélectionnant votre bus parmi plus d'une dizaine d'options sur notre site et application.
                    </p>
                </div>
                </div>
            </div>

            <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay="400">
                <div className="card shadow border-0 h-100 glass-effect">
                <div className="card-body text-center">
                    <div
                    className="mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center bg-warning-subtle"
                    style={{ width: "100px", height: "100px" }}
                    >
                    <img
                        src="/images/customer-service.png"
                        alt="Réservation BusGO"
                        className="img-fluid"
                        style={{ maxWidth: "60px" }}
                    />
                    </div>
                    <h3 className="fw-semibold text-success">Assistance 24h/7</h3>
                    <p className="text-muted mt-2">
                    Notre équipe est disponible à tout moment pour vous aider 
                    avant, pendant et après votre trajet.</p>
                </div>
                </div>
            </div>

            </div>

            <div className="row mt-5 py-5">
                <h2 className="mb-4 h5 text-secondary">Voyager entre les villes de pays...</h2>
                <p className="text-uppercase h3 mb-4">Explorez les destination tendance</p>
                <div
                className="col-12 col-md-4 mb-4"
                data-aos="fade-up"
                data-aos-delay="200"
                >
                <div className="card shadow-lg rounded-4 h-100 position-relative overflow-hidden card-hover border-0">
                <div className="image w-100 h-100 position-relative overflow-hidden">
                    <img src="/images/bouake2.jpg" className="img-fluid w-100 h-100 object-fit-cover" alt="BOUAKE" />
                </div>
                <div className="card-img-overlay d-flex flex-column justify-content-end bg-gradient bg-opacity-50 p-3">
                    <div className="mt-3">
                        <Link to="#" className="btn btn-success btn-sm rounded-pill px-3 shadow-sm">
                            BOUAKE
                        </Link>
                    </div>
                </div>
            </div>
            </div>

              <div
                className="col-12 col-md-4 mb-4"
                data-aos="fade-up"
                data-aos-delay="200"
                >
                <div className="card shadow-lg rounded-4 h-100 position-relative overflow-hidden card-hover border-0">
                <div className="image w-100 h-100 position-relative overflow-hidden">
                    <img src="/images/Abidjan1.jpg" className="img-fluid w-100 h-100 object-fit-cover" alt="BOUAKE" />
                </div>
                <div className="card-img-overlay d-flex flex-column justify-content-end bg-gradient bg-opacity-50 p-3">
                    <div className="mt-3">
                        <Link to="#" className="btn btn-success btn-sm rounded-pill px-3 shadow-sm">
                            ABIDJAN
                        </Link>
                    </div>
                </div>
            </div>
            </div>

             <div
                className="col-12 col-md-4 mb-4"
                data-aos="fade-up"
                data-aos-delay="200"
                >
                <div className="card shadow-lg rounded-4 h-100 position-relative overflow-hidden card-hover border-0">
                <div className="image w-100 h-100 position-relative overflow-hidden">
                    <img src="/images/Daloa.jpg" className="img-fluid w-100 h-100 object-fit-cover" alt="BOUAKE" />
                </div>
                <div className="card-img-overlay d-flex flex-column justify-content-end bg-gradient bg-opacity-50 p-3">
                    <div className="mt-3">
                        <Link to="#" className="btn btn-success btn-sm rounded-pill px-3 shadow-sm">
                            DALOA
                        </Link>
                    </div>
                </div>
            </div>
            </div>

             <div
                className="col-12 col-md-4 mb-4"
                data-aos="fade-up"
                data-aos-delay="200"
                >
                <div className="card shadow-lg rounded-4 h-100 position-relative overflow-hidden card-hover border-0">
                <div className="image w-100 h-100 position-relative overflow-hidden">
                    <img src="/images/Yamoussoukro.jpg" className="img-fluid w-100 h-100 object-fit-cover" alt="BOUAKE" />
                </div>
                <div className="card-img-overlay d-flex flex-column justify-content-end bg-gradient bg-opacity-50 p-3">
                    <div className="mt-3">
                        <Link to="#" className="btn btn-success btn-sm rounded-pill px-3 shadow-sm">
                            YAMOSSOUKRO
                        </Link>
                    </div>
                </div>
            </div>
            </div>

              <div
                className="col-12 col-md-4 mb-4"
                data-aos="fade-up"
                data-aos-delay="200"
                >
                <div className="card shadow-lg rounded-4 h-100 position-relative overflow-hidden card-hover border-0">
                <div className="image w-100 h-100 position-relative overflow-hidden">
                    <img src="/images/sanpedro.jpg" className="img-fluid w-100 h-100 object-fit-cover" alt="BOUAKE" />
                </div>
                <div className="card-img-overlay d-flex flex-column justify-content-end bg-gradient bg-opacity-50 p-3">
                    <div className="mt-3">
                        <Link to="#" className="btn btn-success btn-sm rounded-pill px-3 shadow-sm">
                            SAN-PEDRO
                        </Link>
                    </div>
                </div>
            </div>
            </div>

             <div
                className="col-12 col-md-4 mb-4"
                data-aos="fade-up"
                data-aos-delay="200"
                >
                <div className="card shadow-lg rounded-4 h-100 position-relative overflow-hidden card-hover border-0">
                <div className="image w-100 h-100 position-relative overflow-hidden">
                    <img src="/images/Man.jpg" className="img-fluid w-100 h-100 object-fit-cover" alt="BOUAKE" />
                </div>
                <div className="card-img-overlay d-flex flex-column justify-content-end bg-gradient bg-opacity-50 p-3">
                    <div className="mt-3">
                        <Link to="#" className="btn btn-success btn-sm rounded-pill px-3 shadow-sm">
                            MAN
                        </Link>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default ReserverBillet
