import { Link, useNavigate } from "react-router-dom"
import type { UserType } from "../types"
import { useState } from "react"
import Footer from "../components/Footer"
import { FaEnvelope, FaGoogle, FaLock, FaPhoneAlt, FaUser } from "react-icons/fa"
import { SubmitRegister } from "../controllers/SubmitRegister"
import { GoogleConnect } from "../controllers/GoogleAuth"
import Navbar from "../components/Navbar"

function RegisterAgence() {

    const navigate = useNavigate()

    const [form, setForm] = useState<UserType>({
        name: "",
        adresse: "",
        tel: "",
        role: "agence",
        password: "",
    })

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = e.target
        setForm(prev => ({
            ...prev,
            [name] : value
        }))
    }
  return (
    <div>
       <div>
        <Navbar />
        <div className="register mt-5 py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="mt-5 register-image">
                            <img src="/images/login4.webp" alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="register-container  py-3">
                        <div className="card shadow-lg border-0 rounded-4 p-4 register-card" style={{ maxWidth: "500px", width: "100%" }}>
                            <div className="text-center mb-4">
                            <h3 className="fw-bold text-success">Créer un compte BusGO</h3>
                            <p className="text-muted">Rejoignez-nous pour voyager en toute simplicité</p>
                            </div>

                            <button type="button" onClick={() => GoogleConnect(navigate, "agence")} className="btn btn-light border d-flex align-items-center justify-content-center w-100 mb-3 shadow-sm">
                            <FaGoogle className="me-2 text-danger" />
                            <span>Continuer avec Google</span>
                            </button>
                            <form onSubmit={(e) => SubmitRegister(e, form, navigate)}>
                            <div className="row g-2">
                                <div className="col-12 col-md-12">
                                <div className="input-group">
                                    <span className="input-group-text bg-success text-white"><FaUser /></span>
                                    <input onChange={(e) => handleChangeInput(e)} type="text" name="name" className="form-control" placeholder="Nom complet" required />
                                </div>
                                </div>
                            </div>

                            <div className="input-group mt-3">
                                <span className="input-group-text bg-success text-white">
                                <FaPhoneAlt />
                                </span>
                                <select onChange={(e) => handleChangeInput(e)} className="form-select" style={{ maxWidth: "120px" }}>
                                <option value="+225">🇨🇮 +225</option>
                                <option value="+33">🇫🇷 +33</option>
                                <option value="+1">🇺🇸 +1</option>
                                <option value="+44">🇬🇧 +44</option>
                                </select>
                                <input type="tel" className="form-control" name="tel" placeholder="Téléphone" required />
                            </div>

                            <div className="input-group mt-3">
                                <span className="input-group-text bg-success text-white"><FaEnvelope /></span>
                                <input onChange={(e) => handleChangeInput(e)} type="text" name="adresse" className="form-control" placeholder="Adresse" required />
                            </div>

                            <div className="input-group mt-3">
                                <span className="input-group-text bg-success text-white"><FaLock /></span>
                                <input onChange={(e) => handleChangeInput(e)} type="password" name="password" className="form-control" placeholder="Mot de passe" required />
                            </div>

                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" id="conditions" required />
                                <label className="form-check-label text-muted small" htmlFor="conditions">
                                J’accepte la <a href="#" className="text-success text-decoration-none fw-semibold">politique de confidentialité</a> 
                                {" "}et les <a href="#" className="text-success text-decoration-none fw-semibold">conditions d’utilisation</a>.
                                </label>
                            </div>

                            <button type="submit" className="btn btn-success w-100 mt-4 shadow-sm">
                                Créer mon compte
                            </button>
                            </form>

                            <div className="text-center mt-3">
                            <p className="small text-muted">
                                Déjà un compte ?{" "}
                                <Link to={"/loginAgence"} className="text-success fw-semibold text-decoration-none">Se connecter</Link>
                            </p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
      </div>
      <Footer />
    </div>
    </div>
  )
}

export default RegisterAgence
