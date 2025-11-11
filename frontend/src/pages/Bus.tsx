import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"

function Bus() {

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
        <Navbar />
    )}
    </>
  )
}

export default Bus
