import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos"
import Bus from "./pages/Bus";
import PageNotFound from "./pages/PageNotFound";
import Conseil from "./pages/Conseil";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once:false,
      mirror: true 
    });

    AOS.refresh();
  }, [])
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home />}/>
      <Route path="/reserver" element={<Bus />}/>
      <Route path="/conseil" element={<Conseil />}/>


      <Route path="/*" element={<PageNotFound />}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
