import { Link, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import { FaEnvelope, FaFacebook, FaGoogle, FaLock, FaPhoneAlt, FaUser } from "react-icons/fa"
import Navbar from "../components/Navbar"
import "./Register.css"
import { useState } from "react"
import type { UserType } from "../types"
import { SubmitRegister } from "../controllers/SubmitRegister"
import { GoogleConnect } from "../controllers/GoogleAuth"
import { PhoneConnect, VerifyPhoneCode } from "../controllers/PhoneConnect"
import type { ConfirmationResult } from "firebase/auth"

function RegisterClient() {

    const navigate = useNavigate()

    const [form, setForm] = useState<UserType>({
        name: "",
        adresse: "",
        tel: "",
        role: "client",
        password: "",
    })

    // États pour l'authentification par téléphone
    const [phoneAuthStep, setPhoneAuthStep] = useState<"idle" | "phone" | "code">("idle")
    const [userName, setUserName] = useState("")
    const [userAdresse, setUserAdresse] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [verificationCode, setVerificationCode] = useState("")
    const [confirmation, setConfirmation] = useState<ConfirmationResult | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = e.target
        setForm(prev => ({
            ...prev,
            [name] : value
        }))
    }

    // Gérer l'ouverture du modal d'authentification par téléphone
    const handlePhoneAuthClick = () => {
        setPhoneAuthStep("phone")
    }

    // Gérer l'envoi du code SMS
    const handleSendCode = async () => {
        if (!userName.trim()) {
            alert("Veuillez entrer votre nom")
            return
        }

        if (!userAdresse.trim()) {
            alert("Veuillez entrer votre adresse")
            return
        }

        if (!phoneNumber || !phoneNumber.startsWith("+")) {
            alert("Veuillez entrer un numéro au format international (ex: +2250707070707)")
            return
        }

        setIsLoading(true)
        try {
            const result = await PhoneConnect(
                phoneNumber,
                navigate,
                "client",
                () => setPhoneAuthStep("code")
            )
            if (result) {
                setConfirmation(result)
            }
        } catch (error) {
            console.error("Erreur:", error)
        } finally {
            setIsLoading(false)
        }
    }

    // Gérer la vérification du code
    const handleVerifyCode = async () => {
        if (!verificationCode || verificationCode.length !== 6) {
            alert("Le code doit contenir 6 chiffres")
            return
        }

        setIsLoading(true)
        try {
            await VerifyPhoneCode(confirmation, verificationCode, navigate, "client", userName, userAdresse)
        } catch (error) {
            console.error("Erreur:", error)
        } finally {
            setIsLoading(false)
        }
    }

    // Fermer le modal
    const handleClosePhoneAuth = () => {
        setPhoneAuthStep("idle")
        setUserName("")
        setUserAdresse("")
        setPhoneNumber("")
        setVerificationCode("")
        setConfirmation(null)
    }

  return (
    <>
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
                            <div className="text-center mb-2">
                            <h3 className="fw-bold text-success">Créer un compte BusGO</h3>
                            <p className="text-muted">Rejoignez-nous pour voyager en toute simplicité</p>
                            </div>

                            <button type="button" onClick={() => GoogleConnect(navigate, "client")} className="btn btn-light border d-flex align-items-center justify-content-center w-100 mb-3 shadow-sm">
                            <FaGoogle className="me-2 text-danger" />
                            <span>Continuer avec Google</span>
                            </button>
                             <button type="button" onClick={() => GoogleConnect(navigate, "client")} className="btn btn-light border d-flex align-items-center justify-content-center w-100 mb-3 shadow-sm">
                            <FaFacebook className="me-2 text-danger" />
                            <span>Continuer avec Facebook</span>
                            </button>
                            <button type="button" onClick={handlePhoneAuthClick} className="btn btn-light border d-flex align-items-center justify-content-center w-100 mb-3 shadow-sm">
                            <FaPhoneAlt className="me-2 text-danger" />
                            <span>S'inscrire avec Téléphone</span>
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
                                <input type="tel" className="form-control" name="tel" onChange={(e) => handleChangeInput(e)} placeholder="Téléphone" required />
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
                                J'accepte la <a href="#" className="text-success text-decoration-none fw-semibold">politique de confidentialité</a> 
                                {" "}et les <a href="#" className="text-success text-decoration-none fw-semibold">conditions d'utilisation</a>.
                                </label>
                            </div>

                            <button type="submit" className="btn btn-success w-100 mt-4 shadow-sm">
                                Créer mon compte
                            </button>
                            </form>

                            <div className="text-center mt-3">
                            <p className="small text-muted">
                                Déjà un compte ?{" "}
                                <Link to={"/loginClient"} className="text-success fw-semibold text-decoration-none">Se connecter</Link>
                            </p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
      </div>

      {/* Modal pour l'authentification par téléphone */}
      {phoneAuthStep !== "idle" && (
        <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {phoneAuthStep === "phone" ? "📱 Inscription avec téléphone" : "🔐 Code de vérification"}
                </h5>
                <button type="button" className="btn-close" onClick={handleClosePhoneAuth}></button>
              </div>
              <div className="modal-body">
                {phoneAuthStep === "phone" ? (
                  <div>
                    <div className="mb-3">
                      <label className="form-label">Nom complet</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Ex: Kouamé Jean"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Adresse</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Ex: Cocody, Abidjan"
                        value={userAdresse}
                        onChange={(e) => setUserAdresse(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="form-label">Numéro de téléphone</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="+2250707070707"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                      <small className="text-muted">Format international requis (ex: +225...)</small>
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="form-label">Entre le code reçu par SMS</label>
                    <input
                      type="text"
                      className="form-control text-center"
                      placeholder="123456"
                      maxLength={6}
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                    />
                    <small className="text-muted">Code à 6 chiffres envoyé au {phoneNumber}</small>
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClosePhoneAuth}>
                  Annuler
                </button>
                {phoneAuthStep === "phone" ? (
                  <button 
                    type="button" 
                    className="btn btn-success" 
                    onClick={handleSendCode}
                    disabled={isLoading}
                  >
                    {isLoading ? "Envoi..." : "Envoyer le code"}
                  </button>
                ) : (
                  <button 
                    type="button" 
                    className="btn btn-success" 
                    onClick={handleVerifyCode}
                    disabled={isLoading}
                  >
                    {isLoading ? "Vérification..." : "Vérifier"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Conteneur pour reCAPTCHA (obligatoire) */}
      <div id="recaptcha-container"></div>
      
      <Footer />
    </div>
    </>
  )
}

export default RegisterClient