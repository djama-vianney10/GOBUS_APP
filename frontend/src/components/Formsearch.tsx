import "./Hero.css"
import { FaSearch } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaFlag } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt";


function Formsearch() {

  return (
    <div>
       <div className="card shadow carte-search rounded-6">
          <div className="card-body p-4">
            <form>
             <div className="row g-2 align-items-end">
               <div className="col-12">
                <span className="search-group">
                  <FaBus size={20} color="#198754" className="me-2" />
                 <span className="search-text">Recherche bus disponibles</span>
                </span>
                  <hr />
                 </div>
                 <div className="col-12 col-md-5">
                  <div className="position-relative">
                    <MdLocationOn size={20} color="#198754" className="position-absolute" style={{ top: '50%', left: '10px', transform: 'translateY(-50%)', zIndex: 10 }} />
                    <input 
                      type="text" 
                      className="form-control shadow-none ps-5" 
                      id="depart"
                      placeholder="Départ"
                      required
                    />
                  </div>
                  </div>
                  <button type="button" className="col-12 col-md-1 icon-echange d-flex justify-content-center align-items-center border-0">
                    <FaExchangeAlt size={20} color="white" />
                  </button>
                  <div className="col-12 col-md-5">
                    <div className="position-relative">
                      <FaFlag size={20} color="#198754" className="position-absolute" style={{ top: '50%', left: '10px', transform: 'translateY(-50%)', zIndex: 10 }} />
                      <input 
                        type="text" 
                        className="form-control shadow-none ps-5" 
                        id="destination"
                        placeholder="Destination"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-1">
                    <Tilt
                      tiltMaxAngleX={20}
                      tiltMaxAngleY={20}
                      scale={1.1}
                      glareEnable={true}
                      glareMaxOpacity={0.4}
                      transitionSpeed={2000}
                     >
                      <button type="submit" className="btn btn-search w-100">
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