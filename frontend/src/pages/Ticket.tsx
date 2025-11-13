import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import ReserverBillet from "../components/ReserverBillet"
import Footer from "../components/Footer"

function Ticket() {

    const [load, setLoad] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 2000)
    }, [])

  return (
    <>
    {load ? (

        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
           <img src="/images/logo2.png" alt="" className="visually-hidden" />
          </div>
        </div>

    ):(
        <div>
          <Navbar />
          <ReserverBillet />
          <Footer />
        </div>
    )}
    </>
  )
}

export default Ticket
