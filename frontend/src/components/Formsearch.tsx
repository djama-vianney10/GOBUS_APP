import "./Hero.css"
import { FaSearch } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaFlag } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { useState } from "react";


function Formsearch() {

  const [depart, setDepart] = useState("")
  const [destination, setDestination] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Recherche:", { depart, destination })

  }

  return (
    <div>
       <div className="card shadow carte-search rounded-6">
  <div className="card-body p-4">
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="row g-3 align-items-center justify-content-center">
        {/* Titre */}
        <div className="col-12 text-center">
          <span className="search-group d-flex align-items-center justify-content-center">
            <FaBus size={20} color="#198754" className="me-2" />
            <span className="search-text fw-semibold">
              Recherche bus disponibles
            </span>
          </span>
          <hr className="mt-2" />
        </div>

        {/* Champ départ */}
        <div className="col-12 col-sm-6 col-md-4">
          <div className="position-relative">
            <MdLocationOn
              size={20}
              color="#198754"
              className="position-absolute"
              style={{
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                zIndex: 10,
              }}
            />
            <input
              type="text"
              className="form-control shadow-none ps-5 py-2"
              id="depart"
              placeholder="Départ"
              value={depart}
              onChange={(e) => setDepart(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Bouton échange */}
        <div className="col-12 col-sm-2 col-md-1 d-flex justify-content-center">
          <button
            type="button"
            className="icon-echange d-flex justify-content-center align-items-center border-0 rounded-circle"
          >
            <FaExchangeAlt size={18} color="white" />
          </button>
        </div>

        {/* Champ destination */}
        <div className="col-12 col-sm-6 col-md-4">
          <div className="position-relative">
            <FaFlag
              size={20}
              color="#198754"
              className="position-absolute"
              style={{
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                zIndex: 10,
              }}
            />
            <input
              type="text"
              className="form-control shadow-none ps-5 py-2"
              id="destination"
              placeholder="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Bouton recherche */}
        <div className="col-12 col-md-2 text-center">
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            scale={1.1}
            glareEnable={true}
            glareMaxOpacity={0.4}
            transitionSpeed={2000}
          >
            <button
              type="submit"
              className="btn btn-search w-100 d-flex justify-content-center align-items-center"
            >
              <FaSearch className="me-2" size={18} color="white" />
            </button>
          </Tilt>
        </div>
      </div>
    </form>
  </div>
</div>
    </div>
  )
}

export default Formsearch