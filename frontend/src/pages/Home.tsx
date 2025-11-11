import Conseils from "../components/Conseils"
import Download from "../components/Download"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Reservation from "../components/Reservation"

function home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Conseils />
      <Reservation />
      <Download />
      <Footer />
    </div>
  )
}

export default home
