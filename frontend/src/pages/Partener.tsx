import { useState } from "react";
import { FaClock, FaSearch } from "react-icons/fa";
import "./Partener.css";
import type { AgenceType } from "../types";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Partener() {
  const agencesData: AgenceType[] = [
    {
      id: 1,
      nom: "CA Transport",
      image: "/images/CA.jpeg",
      description: `Située au cœur de Cocody, notre agence CA Transport vous accueille dans un cadre moderne et convivial.
      Nous mettons à votre disposition une large gamme de véhicules confortables pour vos déplacements urbains et interurbains.
      Notre équipe est toujours disponible pour vous conseiller et garantir un service rapide et sécurisé.`,
      horaires: "Ouvert tous les jours de 6h00 à 22h00",
      color: "#e37a17ff",
    },
    {
      id: 2,
      nom: "UTB",
      image: "/images/UTB.jpeg",
      description: `Implantée près du grand carrefour de Yopougon, l’agence UTB est réputée pour sa ponctualité et son accueil chaleureux.
      Elle offre un service de transport de qualité avec des départs réguliers vers plusieurs villes du pays.
      Le confort de nos passagers et leur sécurité sont nos priorités absolues.`,
      horaires: "Ouvert du lundi au dimanche de 5h30 à 21h30",
      color: "#e3751cff",
    },
    {
      id: 3,
      nom: "Alino Transport",
      image: "/images/Alino.jpeg",
      description: `Située à Treichville, à proximité immédiate de la gare principale, notre agence Alino Transport est idéale
      pour vos voyages longue distance ou vos trajets rapides en ville. Grâce à nos chauffeurs expérimentés et
      notre service client disponible, nous vous garantissons un voyage agréable à chaque trajet.`,
      horaires: "Ouvert tous les jours de 6h00 à 23h00",
      color: "#198754",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredAgences = agencesData.filter((agence) =>
    agence.nom.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
     <Navbar /> 
      <section className="agence py-5 mt-5">
     <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap mt-5 py-5">
        <h2 className="fw-bold text-success mb-3">Nos Agences</h2>
        <div className="search-box position-relative">
          <input
            type="text"
            className="form-control ps-5 shadow-sm"
            placeholder="Rechercher une agence..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch
            className="position-absolute"
            style={{ top: "50%", left: "15px", transform: "translateY(-50%)", color: "#198754" }}
          />
        </div>
      </div>

      {/* ✅ Liste des agences */}
      {filteredAgences.length > 0 ? (
        filteredAgences.map((agence, index) => (
          <div
            className={`row align-items-center mb-5 agence-section ${
              index % 2 === 1 ? "flex-md-row-reverse" : ""
            }`}
            key={agence.id}
          >
            {/* Image */}
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="image-wrapper rounded-4 overflow-hidden shadow-sm">
                <img
                  src={agence.image}
                  alt={agence.nom}
                  className="img-fluid w-100 h-100"
                  style={{ objectFit: "cover", minHeight: "300px" }}
                />
              </div>
            </div>

            {/* Détails de l’agence */}
            <div
              className={`col-md-6 ${index % 2 === 1 ? "text-md-end" : ""}`}
              data-aos="fade-up"
            >
              {/* Nom stylisé */}
              {agence.nom === "CA Transport" ? (
                <h3 className="fw-bold mb-3">
                  <span style={{ color: "#e37a17ff" }}>CA</span>{" "}
                  <span style={{ color: "#0d6efd" }}>Transport</span>
                </h3>
              ) : (
                <h3 className="fw-bold mb-3" style={{ color: agence.color }}>
                  {agence.nom}
                </h3>
              )}

              <p className="agence-text text-secondary">{agence.description}</p>
              <p className="hours fw-semibold mt-3">
                <FaClock className="me-2 text-success" />
                {agence.horaires}
              </p>
              <Link to={"/trajet/${index}"} className="btn btn-success mt-3 px-4 py-2 fw-semibold">
                Voir itinéraire
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-muted fs-5">Aucune agence trouvée.</p>
      )}
    </div>
      </section>
    </>
  );
}

export default Partener;
