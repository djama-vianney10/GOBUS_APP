import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos"
import PageNotFound from "./pages/PageNotFound";
import LoginClient from "./pages/LoginClient";
import LoginAgence from "./pages/LoginAgence";
import RegisterClient from "./pages/RegisterClient";
import RegisterAgence from "./pages/RegisterAgence";
import Conseil from "./pages/Conseil";
import DashboardClient from "./pages/DashboardClient";
import DashboardAgence from "./pages/DashboardAgence";
import Partener from "./pages/Partener";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer, Bounce } from 'react-toastify';
import Ticket from "./pages/Ticket";

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
      <Route path="/conseil" element={<Conseil />}/>
      <Route path="/ticket" element={<Ticket />}/>
      <Route path="/partern" element={<Partener />}/>
      <Route path="/loginClient" element={<LoginClient />}/>
      <Route path="/loginAgence" element={<LoginAgence />}/>
      <Route path="/registerClient" element={<RegisterClient />}/>
      <Route path="/registerAgence" element={<RegisterAgence />}/>
      <Route path="/dashClient" element={
        <ProtectedRoute role="client">
          <DashboardClient />
          </ProtectedRoute>
          }/>

      <Route path="/dashAgence" element={
        <ProtectedRoute role="agence">
          <DashboardAgence />
        </ProtectedRoute>
        }/>


      <Route path="/*" element={<PageNotFound />}/>

    </Routes>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
    transition={Bounce}
    />
    </BrowserRouter>
  );
}

export default App;
