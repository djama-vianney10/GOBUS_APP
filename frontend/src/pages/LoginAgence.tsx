import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import { FaEnvelope, FaGoogle, FaLock } from "react-icons/fa"
import { SubmitLogin } from "../controllers/SubmitLogin"
import { GoogleConnect } from "../controllers/GoogleAuth"
import Navbar from "../components/Navbar"


function LoginAgence() {

     const navigate = useNavigate()

    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setForm(prev => ({
            ...prev,
            [name] : value
        }))
    }

    const [loadconnect, setLoadConnect] = useState(true)

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("User")!)?.uid || null
        if(user){
            navigate("/dashAgence")
        }else{
            setLoadConnect(false)
        }
    }, [])


  return (
    <div>
       {!loadconnect && (
         <div>
        <Navbar />
         <div className="login mt-5 py-5">
                  <div className="container">
                      <div className="row mt-5 py-5">
                        <div className="col-12 col-md-6">
                              <div className="register-container  py-3">
                              <div className="card shadow-lg border-0 rounded-4 p-4 register-card" style={{ maxWidth: "500px", width: "100%" }}>
                                  <div className="text-center mb-4">
                                  <h3 className="fw-bold text-success">Se connecter</h3>
                                  <p className="text-muted">Rejoignez-nous pour voyager en toute simplicité</p>
                                  </div>
                                  
                                  <button type="button" onClick={() => GoogleConnect(navigate, "agence")} className="btn btn-light border d-flex align-items-center justify-content-center w-100 mb-3 shadow-sm">
                                  <FaGoogle className="me-2 text-danger" />
                                  <span>Continuer avec Google</span>
                                  </button>
                                  <form onSubmit={(e) => SubmitLogin(e, form, navigate, "client")}>
                                  <div className="input-group mt-3">
                                      <span className="input-group-text bg-success text-white"><FaEnvelope /></span>
                                      <input onChange={(e) => handleChangeInput(e)} type="email" className="form-control" placeholder="Adresse e-mail" required />
                                  </div>
      
                                  <div className="input-group mt-3">
                                      <span className="input-group-text bg-success text-white"><FaLock /></span>
                                      <input onChange={(e) => handleChangeInput(e)} type="password" className="form-control" placeholder="Mot de passe" required />
                                  </div>
      
                                  <button type="submit" className="btn btn-success w-100 mt-4 shadow-sm">
                                      Connexion
                                  </button>
                                  </form>
      
                                  <div className="text-center mt-3">
                                  <p className="small text-muted">
                                      Pas de compte ?{" "}
                                      <Link to={"/registerAgence"} className="text-success fw-semibold text-decoration-none">Creez un compte</Link>
                                  </p>
                                  </div>
                              </div>
                          </div>
                          </div>
                          <div className="col-12 col-md-6">
                              <div className="mt-5 register-image">
                                  <img src="/images/login.svg" alt="login" className="img-fluid w-100" />
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
        <Footer />
        </div>
      )}
    </div>
  )
}

export default LoginAgence
