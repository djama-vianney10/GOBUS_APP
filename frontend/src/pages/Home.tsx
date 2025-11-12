import { useEffect, useState } from "react"
import Download from "../components/Download"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Reservation from "../components/Reservation"
import LearnBillet from "../components/LearnBillet"
import Parterns from "../components/Parterns"
import ConseilSection from "../components/ConseilSection"

function home() {

  const [load, setLoad] = useState(true)

  useEffect(() => {

    setTimeout(() => {
      setLoad(false)
    }, 2000)

  },[])


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
          <Hero />
          <LearnBillet />
          <Parterns />
          <ConseilSection />
          <Reservation />
          <Download />
          <Footer />
        </div>
      )}
    </>
  )
}

export default home
